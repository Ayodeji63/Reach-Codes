// Automatically generated with Reach 0.1.12 (ae94865f)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (ae94865f)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Bidder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    i: ctc0,
    sign: ctc1
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'));
  
  
  const v51 = stdlib.protect(ctc2, await interact.seePrice(), {
    at: './index.rsh:23:51:application',
    fs: ['at ./index.rsh:22:17:application call to [unknown function] (defined at: ./index.rsh:22:21:function exp)'],
    msg: 'seePrice',
    who: 'Bidder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v51],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:25:13:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:25:13:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v55], secs: v57, time: v56, didSend: v29, from: v54 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v55], secs: v57, time: v56, didSend: v29, from: v54 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v62], secs: v64, time: v63, didSend: v38, from: v61 } = txn2;
  ;
  return;
  
  
  
  
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    i: ctc0,
    sign: ctc1
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'));
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v55], secs: v57, time: v56, didSend: v29, from: v54 } = txn1;
  ;
  const v60 = stdlib.protect(ctc3, await interact.getDescription(), {
    at: './index.rsh:29:63:application',
    fs: ['at ./index.rsh:28:16:application call to [unknown function] (defined at: ./index.rsh:28:20:function exp)'],
    msg: 'getDescription',
    who: 'Buyer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v60],
    evt_cnt: 1,
    funcNum: 1,
    lct: v56,
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:31:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v62], secs: v64, time: v63, didSend: v38, from: v61 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v62], secs: v64, time: v63, didSend: v38, from: v61 } = txn2;
  ;
  return;
  
  
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Object({
    i: ctc0,
    sign: ctc1
    });
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'));
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v55], secs: v57, time: v56, didSend: v29, from: v54 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc3],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v62], secs: v64, time: v63, didSend: v38, from: v61 } = txn2;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByACAAEmAQAiNQAxGEEA1ChkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAACUjEkQjNAESRDQESSISTDQCEhFESTUFNf+ABJYYheY0/1CwQgAxSIGgjQaIAJYiNAESRDQESSISTDQCEhFESTUFNf+ABIfUIrY0/1CwIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQjMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_i",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "_sign",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T1",
                "name": "v55",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "_i",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "_sign",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T1",
                "name": "v55",
                "type": "tuple"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes6",
                "name": "v62",
                "type": "bytes6"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes6",
                "name": "v62",
                "type": "bytes6"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516106f53803806106f5833981016040819052610022916101be565b6000805543600355604080513381528251602080830191909152808401515180518385015201511515606082015290517f7771a4d1719cfc778aa5a55f7e9996d369eae21e7b93a2ddd53ecb8ccae88b919181900360800190a1610088341560076100c6565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100be9260029201906100ef565b50505061029a565b816100eb5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100fb9061025f565b90600052602060002090601f01602090048101928261011d5760008555610163565b82601f1061013657805160ff1916838001178555610163565b82800160010185558215610163579182015b82811115610163578251825591602001919060010190610148565b5061016f929150610173565b5090565b5b8082111561016f5760008155600101610174565b604080519081016001600160401b03811182821017156101b857634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156101d157600080fd5b6101d9610188565b835181526040601f19830112156101ef57600080fd5b6040519150602082016001600160401b038111838210171561022157634e487b7160e01b600052604160045260246000fd5b60405261022c610188565b602085015181526040850151801515811461024657600080fd5b6020828101919091529083528101919091529392505050565b600181811c9082168061027357607f821691505b6020821081141561029457634e487b7160e01b600052602260045260246000fd5b50919050565b61044c806102a96000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063ab53f2c614610082578063bfeb5695146100a557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b34801561008e57600080fd5b506100976100b8565b6040516100649291906102fe565b6100476100b336600461035b565b610155565b6000606060005460028080546100cd90610373565b80601f01602080910402602001604051908101604052809291908181526020018280546100f990610373565b80156101465780601f1061011b57610100808354040283529160200191610146565b820191906000526020600020905b81548152906001019060200180831161012957829003601f168201915b50505050509050915091509091565b6101656001600054146009610283565b61017f8135158061017857506001548235145b600a610283565b60008080556002805461019190610373565b80601f01602080910402602001604051908101604052809291908181526020018280546101bd90610373565b801561020a5780601f106101df5761010080835404028352916020019161020a565b820191906000526020600020905b8154815290600101906020018083116101ed57829003601f168201915b505050505080602001905181019061022291906103a8565b90507f1a08d6253eb5f200eda6690d288e306497ccae95f09fd3ab24068640c594f50833836040516102559291906103d1565b60405180910390a161026934156008610283565b6000808055600181905561027f906002906102a8565b5050565b8161027f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102b490610373565b6000825580601f106102c4575050565b601f0160209004906000526020600020908101906102e291906102e5565b50565b5b808211156102fa57600081556001016102e6565b5090565b82815260006020604081840152835180604085015260005b8181101561033257858101830151858201606001528201610316565b81811115610344576000606083870101525b50601f01601f191692909201606001949350505050565b60006040828403121561036d57600080fd5b50919050565b600181811c9082168061038757607f821691505b6020821081141561036d57634e487b7160e01b600052602260045260246000fd5b6000602082840312156103ba57600080fd5b815180151581146103ca57600080fd5b9392505050565b6001600160a01b0383168152813560208083019190915260608201908301356001600160d01b0319811680821461040757600080fd5b8060408501525050939250505056fea2646970667358221220ae8916ccff284e173ac7c41391154925282b2bfb9a19b39dbe7eb5358a94e35564736f6c634300080c0033`,
  BytecodeLen: 1781,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:26:14:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:32:14:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bidder": Bidder,
  "Buyer": Buyer,
  "Creator": Creator
  };
export const _APIs = {
  };
