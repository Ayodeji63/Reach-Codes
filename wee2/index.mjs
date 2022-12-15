import {loadStdlib} from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(1000)

const accDep = await stdlib.newTestAccount(startingBalance)
const accAtt = await stdlib.newTestAccount(startingBalance)

const ctcDep = accDep.contract(backend)
const ctcAtt = accAtt.contract(backend, ctcDep.getInfo())

const fmt = (x) => stdlib.formatCurrency(x, 3)

const getBalance = async(who) => fmt(await stdlib.balanceOf(who))

const beforeDep = await getBalance(accDep)
const beforeAtt = await getBalance(accAtt)

// const DepAtomic = 
console.log(beforeDep);
console.log(beforeAtt);

