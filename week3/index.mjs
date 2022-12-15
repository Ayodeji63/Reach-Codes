import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.js";

const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);

const accEve = await stdlib.newTestaccount(startingBalance);
const accAlice = await stdlib.newTestaccount(startingBalance);

const ctcEve = accEve.contract(backend);
const ctcAlice = accAlice.contract(backend, ctcEve.getInfo());

await Promise.all([]);
