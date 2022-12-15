import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib({ REACH_NO_WARN: "Y" });

const startingBalance = stdlib.parseCurrency(100);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

const accBob = await stdlib.newTestAccount(startingBalance);
const accAlice = await stdlib.newTestAccount(startingBalance);

const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const Hand = ["Rock", "Paper", "Scissors"];
const OUTCOME = ["Bob wins", "Draw", "Alice wins"];
const Player = (who) => ({
  ...stdlib.hasRandom,
  getHand: async () => {
    const hand = Math.floor(Math.random() * 3);
    console.log(`${who} played ${Hand[hand]}`);
    if (Math.random() <= 0.01) {
      for (let i = 0; i < 10; i++) {
        console.log(`${who} takes their sweet time sending it back`);
        await stdlib.wait(1);
      }
    }
    return hand;
  },
  seeOutcome: (outcome) => {
    console.log(`${who} saw outcome ${OUTCOME[outcome]}`);
  },
  informTimeout: () => {
    console.log(`${who} observed a timeout`);
  },
});
await Promise.all([
  ctcAlice.p.Alice({
    ...Player("Alice"),
    wager: stdlib.parseCurrency(5),
    deadline: 10, // blocks
  }),
  ctcBob.p.Bob({
    ...Player("Bob"),
    acceptWager: async (amt) => {
      console.log(`Bob accepts the wager ${fmt(amt)}`);
    },
  }),
]);

const afterBob = await getBalance(accBob);
const afterAlice = await getBalance(accAlice);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}`);
console.log(`Bob went from ${beforeBob} to ${afterBob}`);
console.log("GoodBye Alice and Bob");
