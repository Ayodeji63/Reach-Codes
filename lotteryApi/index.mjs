import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib({ REACH_NO_WARN: "Y" });

const startingBalance = stdlib.parseCurrency(100);
const accD = await stdlib.newTestAccount(startingBalance);

console.log(`Hello Players! Pick a number and, let the lottery begin`);
console.log(`Launching...`);
const ctcD = accD.contract(backend);
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBal = async (who) => fmt(await stdlib.balanceOf(who));

let done = false;
let pAcc = [];

const randNum = () => {
  const n = Math.floor(Math.random() * 2);
  return n;
};

const startPlayers = async () => {
  const runPlayers = async (who) => {
    const acc = await stdlib.newTestAccount(startingBalance);
    const ctc = acc.contract(backend, ctcD.getInfo());
    pAcc.push([who, ctc, acc]);

    const wager = stdlib.parseCurrency(Math.floor(Math.random() * 90) + 10);
    const pObj = await ctc.apis.P.joinGame(randNum(), wager);
    console.log(`${who} summary of: ${stdlib.formatAddress(pObj.addr)}
    wager: ${stdlib.formatCurrency(pObj.amt)}
    number picked: ${pObj.pNum}`);
  };
  await runPlayers("Fave");
  await runPlayers("Zico");
  await runPlayers("Sam");

  while (!done) {
    await stdlib.wait(1);
  }
};

const checkWin = async () => {
  for (const [who, ctc, acc] of pAcc) {
    try {
      const b = await ctc.apis.H.checkWin(acc);
      console.log(`${who} saw winning number ${b}`);
      const pBal = await getBal(acc);
      console.log(`${who} balance is ${pBal}`);
    } catch (error) {
      console.log(`${error}`);
    }
  }
};
console.log(`Starting Backends....`);
await Promise.all([
  backend.D(ctcD, {
    ...stdlib.hasRandom,
    winNum: async () => {
      startPlayers();
      let wNum = randNum();
      console.log(`Dealer picked ${wNum}`);
      return wNum;
    },
    showBalance: (bal) => {
      console.log(`Balance total: ${stdlib.formatCurrency(bal)}`);
    },
    deadline: 10,
    seeWinner: () => {
      console.log(`Winning Num`);
      checkWin();
    },
    showWinner: (who, num) => {
      console.log(`Deployer saw ${who} number ${num}`);
    },
  }),
]);

const afterD = await getBal(accD);

console.log(`Dealer went from 100 Algos to ${afterD}`);
console.log(`Lottery Ended`);
done = true;
