import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const fortuneArray = [
  "You will get married",
  "You will sit with Kings and Presidents",
];

await Promise.all([
  ctcAlice.p.Alice({
    price: stdlib.parseCurrency(5),
    showFortune: (outcome) => {
      console.log(`${outcome}`);
    },
    acceptFortune: () => {
      if (Math.random() < 0.5) {
        console.log(`Alice accepts the fortune`);
        return true;
      } else {
        console.log(`Alice declines the fortune`);
        return false;
      }
    },
  }),
  ctcBob.p.Bob({
    setFortune: () => {
      const randnum = Math.floor(Math.random() * fortuneArray.length);
      return fortuneArray[randnum];
    },
    acceptPrice: () => {
      console.log(`Bob accepts the price`);
    },
  }),
]);

console.log(`Goodbye Alice and Bob`);
