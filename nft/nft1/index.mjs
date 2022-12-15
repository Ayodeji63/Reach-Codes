import * as backend from "./build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
const stdlib = loadStdlib({ REACH_NO_WARN: "Y" });

const startingBalance = stdlib.parseCurrency(100);

console.log(`Creating a test account for Creator`);
const accCreator = await stdlib.newTestAccount(startingBalance);

console.log(`Having the creator create a testing NFT`);

const theNFT = await stdlib.launchToken(accCreator, "bumple", "NFT", {
  supply: 1,
});

const nftId = theNFT.id;
const minBid = stdlib.parseCurrency(2);
const lenInBlocks = 10;
const params = { nftId, minBid, lenInBlocks };

let done = false;
const bidders = [];

const startBidders = async () => {
  let bid = minBid;
  const runBidder = async (who) => {
    const inc = stdlib.parseCurrency(Math.random() * 10);
    bid = bid.add(inc);

    const acc = await stdlib.newTestAccount(startingBalance);
    acc.setDebugLabel(who);

    await acc.tokenAccept(nftId);

    bidders.push([who, acc]);

    const ctc = acc.contract(backend, ctcCreator.getInfo());
    const getBal = async () =>
      stdlib.formatCurrency(await stdlib.balanceOf(acc));

    console.log(`${who} decides to bid ${stdlib.formatCurrency(bid)}.`);
    console.log(`${who} balance before is ${await getBal()}`);

    try {
      const [lastBidder, lastBid] = await ctc.apis.Bidder.bid(bid);
      console.log(
        `${who} out bid ${lastBidder} who bid ${stdlib.formatCurrency(
          lastBid
        )}.`
      );
    } catch (e) {
      console.log(`${who} failed to bid, because the auction is over`);
    }
    console.log(`${who} balance after is ${await getBal()}`);
  };

  await runBidder("Oz");
  await runBidder("Bob");
  await runBidder("Claire");
  // await runBidder("John");
  while (!done) {
    await stdlib.wait(1);
  }
};

const ctcCreator = accCreator.contract(backend);
await ctcCreator.participants.Creator({
  getSale: () => {
    console.log(`Creator set paramets of sale:`, params);
    return params;
  },
  autionReady: () => {
    startBidders();
  },
  seeBid: (who, amt) => {
    console.log(
      `Creator saw that ${stdlib.formatAddress(
        who
      )} bid ${stdlib.formatCurrency(amt)}}`
    );
  },
  showOutcome: (winner, amt) => {
    console.log(
      `Creator saw that ${stdlib.formatAddress(
        winner
      )} won with ${stdlib.formatCurrency(amt)}`
    );
  },
});

for (const [who, acc] of bidders) {
  const [amt, amtNFT] = await stdlib.balancesOf(acc, [null, nftId]);

  console.log(
    `${who} has ${stdlib.formatCurrency(amt)} ${
      stdlib.standardUnit
    } and ${amtNFT} of the NFT`
  );
}

done = true;
