import { loadStdlib, test } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

//Basics
const GAS_LIMIT = 5000000;
const stdlib = loadStdlib();
const err = {
  ETH: "transaction may fail",
  ALGO: "assert failed",
  CFX: "transaction is reverted",
}[stdlib.connector];

//Framework
const makeRSVP = async ({ hostLabel, name, reservation, timeLimit }) => {
  const sbal = stdlib.parseCurrenct(100);
  const accHost = await stdlib.newTestAccount(sbal);
  accHost.setDebugLabel(hostLabel);
  accHost.setGasLimit(GAS_LIMIT);

  //Event.Host

  const stdPerson = (obj) => {
    const { acc } = obj;
    const getBalance = async () => {
      const bal = await acc.balanceOf();
      return `${stdlib.formatCurrency(bal, 4)} ${stdlib.standardUnit}`;
    };
    return {
      ...obj,
      getBalance,
    };
  };

  const Host = stdPerson({
    acc: accHost,
    label: hostLabel,
  });

  const deadline = (await stdlib.getNetworkTime()).add(timeLimit);

  //Event.waitUntilDeadline
  const waitUntilDeadline = async () => {
    console.log(`Waiting until ${deadline}`);
    await stdlib.waitUntilTime(deadline);
  };

  //Details object
  const details = {
    name,
    reservation,
    deadline,
    host: accHost,
  };

  const ctcHost = accHost.contract(backend);
  const ctcInfo = await stdlib.withDisconnect(() =>
    ctcHost.p.Admin({
      details,
      launched: stdlib.disconnect,
    })
  );
  console.log(`${hostLabel} launched contract`);
  // Event.makeGuest
  const makeGuest = async (label) => {
    const acc = await stdlib.newTestAccount(sbal);
    acc.setDebugLabel(label);
    acc.setGasLimit(GAS_LIMIT);

    const willGo = async () => {
      const ctcGuest = acc.contract(backend, ctcInfo);
      await ctcGuest.a.Guest.register();
      console.log(`${label} made reservation`);
    };

    const doHost = async (showed) => {
      console.log(`Checking in ${label}...`);
      await ctcHost.a.Host.checkin(acc, showed);
      console.log(`${label} did${showed ? "" : " not"} show.`);
    };

    const showUp = () => doHost(true);
    const noShow = () => doHost(false);

    return stdPerson({
      acc,
      label,
      willGo,
      showUp,
      noShow,
    });
  };
  const makeGuests = (labels) => Promise.all(labels.map(makeGuest));

  return { Host, makeGuest, makeGuests, waitUntilDeadline };
};
