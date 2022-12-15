// Automatically generated with Reach 0.1.12 (0b231964)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (0b231964)';
export const _backendVersion = 25;

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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1],
      5: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc1]
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
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  
  
  const v187 = stdlib.protect(ctc0, await interact.getId(), {
    at: './index.rsh:31:41:application',
    fs: ['at ./index.rsh:30:15:application call to [unknown function] (defined at: ./index.rsh:30:19:function exp)'],
    msg: 'getId',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v187],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:33:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v189], secs: v191, time: v190, didSend: v28, from: v188 } = txn1;
      
      ;
      const v192 = v188;
      const v193 = v190;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v189], secs: v191, time: v190, didSend: v28, from: v188 } = txn1;
  ;
  let v192 = v188;
  let v193 = v190;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 2,
      out_tys: [ctc0, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v210, v211], secs: v213, time: v212, didSend: v50, from: v209 } = txn3;
    ;
    const v215 = stdlib.safeAdd(v193, v211);
    let v216 = v210;
    let v217 = true;
    let v218 = v192;
    let v219 = v212;
    let v220 = v193;
    
    let txn4 = txn3;
    while (await (async () => {
      const v231 = stdlib.gt(v215, v220);
      
      return v231;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: ['time', v215],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v192, v215, v216, v217, v218, v219],
          evt_cnt: 0,
          funcNum: 5,
          lct: v219,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:53:62:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v271, time: v270, didSend: v154, from: v269 } = txn6;
            
            ;
            const cv216 = v216;
            const cv217 = v217;
            const cv218 = v218;
            const cv219 = v270;
            const cv220 = v219;
            
            await (async () => {
              const v216 = cv216;
              const v217 = cv217;
              const v218 = cv218;
              const v219 = cv219;
              const v220 = cv220;
              
              if (await (async () => {
                const v231 = stdlib.gt(v215, v220);
                
                return v231;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v274 = v217 ? stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '0') : v216;
                sim_r.txns.push({
                  kind: 'from',
                  to: v192,
                  tok: undefined /* Nothing */
                  });
                const cv192 = v218;
                const cv193 = v219;
                
                await (async () => {
                  const v192 = cv192;
                  const v193 = cv193;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc1, ctc0, ctc0, ctc2, ctc1, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v271, time: v270, didSend: v154, from: v269 } = txn6;
        ;
        const cv216 = v216;
        const cv217 = v217;
        const cv218 = v218;
        const cv219 = v270;
        const cv220 = v219;
        
        v216 = cv216;
        v217 = cv217;
        v218 = cv218;
        v219 = cv219;
        v220 = cv220;
        
        txn4 = txn6;
        continue;
        }
      else {
        const {data: [v256], secs: v258, time: v257, didSend: v129, from: v255 } = txn5;
        ;
        const v262 = stdlib.gt(v256, v216);
        stdlib.assert(v262, {
          at: './index.rsh:74:18:application',
          fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:15:function exp)'],
          msg: null,
          who: 'Creator'
          });
        const v263 = v217 ? stdlib.checkedBigNumberify('./index.rsh:76:33:decimal', stdlib.UInt_max, '0') : v216;
        ;
        const cv216 = v256;
        const cv217 = false;
        const cv218 = v255;
        const cv219 = v257;
        const cv220 = v219;
        
        v216 = cv216;
        v217 = cv217;
        v218 = cv218;
        v219 = cv219;
        v220 = cv220;
        
        txn4 = txn5;
        continue;}
      
      }
    const v274 = v217 ? stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '0') : v216;
    ;
    const cv192 = v218;
    const cv193 = v219;
    
    v192 = cv192;
    v193 = cv193;
    
    txn2 = txn4;
    continue;
    
    }
  return;
  
  
  };
export async function Owner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Object({
    startingBid: ctc0,
    timeout: ctc0
    });
  const ctc3 = stdlib.T_Data({
    None: ctc1,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v189], secs: v191, time: v190, didSend: v28, from: v188 } = txn1;
  ;
  let v192 = v188;
  let v193 = v190;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const v199 = ctc.selfAddress();
    stdlib.protect(ctc1, await interact.showOwner(v189, v192), {
      at: './index.rsh:42:25:application',
      fs: ['at ./index.rsh:41:15:application call to [unknown function] (defined at: ./index.rsh:41:19:function exp)'],
      msg: 'showOwner',
      who: 'Owner'
      });
    const v201 = stdlib.addressEq(v199, v192);
    let v202;
    if (v201) {
      const v203 = stdlib.protect(ctc2, await interact.getAuctionProps(), {
        at: './index.rsh:45:46:application',
        fs: ['at ./index.rsh:41:15:application call to [unknown function] (defined at: ./index.rsh:41:19:function exp)'],
        msg: 'getAuctionProps',
        who: 'Owner'
        });
      v202 = v203;
      }
    else {
      const v206 = {
        startingBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        timeout: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      v202 = v206;
      }
    const v207 = v202.startingBid;
    const v208 = v202.timeout;
    
    const txn3 = await (ctc.sendrecv({
      args: [v192, v193, v207, v208],
      evt_cnt: 2,
      funcNum: 2,
      lct: v193,
      onlyIf: v201,
      out_tys: [ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:48:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v210, v211], secs: v213, time: v212, didSend: v50, from: v209 } = txn3;
        
        ;
        const v215 = stdlib.safeAdd(v193, v211);
        const v216 = v210;
        const v217 = true;
        const v218 = v192;
        const v219 = v212;
        const v220 = v193;
        
        if (await (async () => {
          const v231 = stdlib.gt(v215, v220);
          
          return v231;})()) {
          sim_r.isHalt = false;
          }
        else {
          const v274 = v217 ? stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '0') : v216;
          sim_r.txns.push({
            kind: 'from',
            to: v192,
            tok: undefined /* Nothing */
            });
          const cv192 = v218;
          const cv193 = v219;
          
          await (async () => {
            const v192 = cv192;
            const v193 = cv193;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();}
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v210, v211], secs: v213, time: v212, didSend: v50, from: v209 } = txn3;
    ;
    const v215 = stdlib.safeAdd(v193, v211);
    let v216 = v210;
    let v217 = true;
    let v218 = v192;
    let v219 = v212;
    let v220 = v193;
    
    let txn4 = txn3;
    while (await (async () => {
      const v231 = stdlib.gt(v215, v220);
      
      return v231;})()) {
      const v237 = ctc.selfAddress();
      const v239 = stdlib.addressEq(v237, v192);
      const v241 = stdlib.addressEq(v237, v218);
      const v242 = v241 ? false : true;
      const v243 = v239 ? false : v242;
      let v244;
      if (v243) {
        const v245 = stdlib.protect(ctc3, await interact.getBid(v216), {
          at: './index.rsh:65:43:application',
          fs: ['at ./index.rsh:62:12:application call to [unknown function] (defined at: ./index.rsh:62:12:function exp)', 'at ./index.rsh:62:12:application call to [unknown function] (defined at: ./index.rsh:62:12:function exp)'],
          msg: 'getBid',
          who: 'Owner'
          });
        v244 = v245;
        }
      else {
        const v248 = ['None', null];
        v244 = v248;
        }
      let v249;
      switch (v244[0]) {
        case 'None': {
          const v250 = v244[1];
          v249 = false;
          
          break;
          }
        case 'Some': {
          const v251 = v244[1];
          const v252 = stdlib.gt(v251, v216);
          v249 = v252;
          
          break;
          }
        }
      const v253 = stdlib.fromSome(v244, stdlib.checkedBigNumberify('./index.rsh:69:33:decimal', stdlib.UInt_max, '0'));
      
      const txn5 = await (ctc.sendrecv({
        args: [v192, v215, v216, v217, v218, v219, v253],
        evt_cnt: 1,
        funcNum: 4,
        lct: v219,
        onlyIf: v249,
        out_tys: [ctc0],
        pay: [v253, []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v256], secs: v258, time: v257, didSend: v129, from: v255 } = txn5;
          
          sim_r.txns.push({
            amt: v256,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v263 = v217 ? stdlib.checkedBigNumberify('./index.rsh:76:33:decimal', stdlib.UInt_max, '0') : v216;
          sim_r.txns.push({
            kind: 'from',
            to: v218,
            tok: undefined /* Nothing */
            });
          const cv216 = v256;
          const cv217 = false;
          const cv218 = v255;
          const cv219 = v257;
          const cv220 = v219;
          
          await (async () => {
            const v216 = cv216;
            const v217 = cv217;
            const v218 = cv218;
            const v219 = cv219;
            const v220 = cv220;
            
            if (await (async () => {
              const v231 = stdlib.gt(v215, v220);
              
              return v231;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v274 = v217 ? stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '0') : v216;
              sim_r.txns.push({
                kind: 'from',
                to: v192,
                tok: undefined /* Nothing */
                });
              const cv192 = v218;
              const cv193 = v219;
              
              await (async () => {
                const v192 = cv192;
                const v193 = cv193;
                
                if (await (async () => {
                  
                  return true;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();}})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: ['time', v215],
        tys: [ctc4, ctc0, ctc0, ctc5, ctc4, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn5.didTimeout) {
        const txn6 = await (ctc.sendrecv({
          args: [v192, v215, v216, v217, v218, v219],
          evt_cnt: 0,
          funcNum: 5,
          lct: v219,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./index.rsh:53:62:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v271, time: v270, didSend: v154, from: v269 } = txn6;
            
            ;
            const cv216 = v216;
            const cv217 = v217;
            const cv218 = v218;
            const cv219 = v270;
            const cv220 = v219;
            
            await (async () => {
              const v216 = cv216;
              const v217 = cv217;
              const v218 = cv218;
              const v219 = cv219;
              const v220 = cv220;
              
              if (await (async () => {
                const v231 = stdlib.gt(v215, v220);
                
                return v231;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v274 = v217 ? stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '0') : v216;
                sim_r.txns.push({
                  kind: 'from',
                  to: v192,
                  tok: undefined /* Nothing */
                  });
                const cv192 = v218;
                const cv193 = v219;
                
                await (async () => {
                  const v192 = cv192;
                  const v193 = cv193;
                  
                  if (await (async () => {
                    
                    return true;})()) {
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }})();}})();
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc5, ctc4, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v271, time: v270, didSend: v154, from: v269 } = txn6;
        ;
        const cv216 = v216;
        const cv217 = v217;
        const cv218 = v218;
        const cv219 = v270;
        const cv220 = v219;
        
        v216 = cv216;
        v217 = cv217;
        v218 = cv218;
        v219 = cv219;
        v220 = cv220;
        
        txn4 = txn6;
        continue;
        }
      else {
        const {data: [v256], secs: v258, time: v257, didSend: v129, from: v255 } = txn5;
        ;
        const v262 = stdlib.gt(v256, v216);
        stdlib.assert(v262, {
          at: './index.rsh:74:18:application',
          fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:15:function exp)'],
          msg: null,
          who: 'Owner'
          });
        const v263 = v217 ? stdlib.checkedBigNumberify('./index.rsh:76:33:decimal', stdlib.UInt_max, '0') : v216;
        ;
        const cv216 = v256;
        const cv217 = false;
        const cv218 = v255;
        const cv219 = v257;
        const cv220 = v219;
        
        v216 = cv216;
        v217 = cv217;
        v218 = cv218;
        v219 = cv219;
        v220 = cv220;
        
        txn4 = txn5;
        continue;}
      
      }
    const v274 = v217 ? stdlib.checkedBigNumberify('./index.rsh:82:27:decimal', stdlib.UInt_max, '0') : v216;
    ;
    const cv192 = v218;
    const cv193 = v219;
    
    v192 = cv192;
    v193 = cv193;
    
    txn2 = txn4;
    continue;
    
    }
  return;
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAJAAEFIAIIKFEDJgIBAAAiNQAxGEECRClkSSJbNQEhBVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQQMQADDSSQMQABKJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDJVs1/4AEzJmSXLAyBjT/D0Q0A1cAIDT/NAMhBls0A1cwARc0A1cxIDIGNAMhB1tCARtIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSSVbNf8hBls1/kk1BRc1/YAE+YuveDT9FlCwMgY0/wxENP2IAac0/TT+DUSxIrIBNP4iNANXMAEXTbIII7IQNANXMSCyB7M0A1cAIDT/NP0iMQAyBjQDIQdbQgCoSSEEDEAAUyEEEkQhCDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/kk1BUkiWzX9IQVbNfyABPMtCgw0/RZQNPwWULA0/zT+NPwINP0jNP8yBjT+QgBOIhJEgaCNBogBDCI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsDEAMgZCAAA1/0k1/jT/FlAoSwFXAChnSCEINQEyBjUCQgB2Nf81/jX9Nfw1+zX6Nfk0+jT/DUEAKjT5NPoWUDT7FlA0/BZRBwhQNP1QNP4WUChLAVcAWWdIJDUBMgY1AkIANrEisgE0+yI0/E2yCCOyEDT5sgezNP00/kL/iTEZJBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEEMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 89,
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
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
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
                "internalType": "uint256",
                "name": "v189",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
                "internalType": "uint256",
                "name": "v210",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "internalType": "uint256",
                "name": "v256",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
                "internalType": "uint256",
                "name": "v210",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v211",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
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
                "internalType": "uint256",
                "name": "v256",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200102538038062001025833981016040819052620000269162000230565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a16200008234156007620000ae565b6200008c6200014a565b602080820180513390525143910152620000a681620000d8565b50506200030f565b81620000d45760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080518082018252600080825260208083018281528582018051516001600160a01b03168086529051830151825260039093554360015584518083019390935251828501528351808303850181526060909201909352805191926200014592600292909101906200018a565b505050565b604051806040016040528060001515815260200162000185604051806040016040528060006001600160a01b03168152602001600081525090565b905290565b8280546200019890620002d2565b90600052602060002090601f016020900481019282620001bc576000855562000207565b82601f10620001d757805160ff191683800117855562000207565b8280016001018555821562000207579182015b8281111562000207578251825591602001919060010190620001ea565b506200021592915062000219565b5090565b5b808211156200021557600081556001016200021a565b60008183036040808212156200024557600080fd5b80518082016001600160401b0380821183831017156200027557634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200028f57600080fd5b835194506020850191508482108183111715620002bc57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b610d06806200031f6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806383230757146100835780638e314769146100985780639014596a146100ab578063a209ad4e146100be578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008f57600080fd5b50600154610070565b61005d6100a6366004610a7f565b6100f4565b61005d6100b9366004610aa2565b610290565b61005d6100cc366004610a7f565b610436565b3480156100dd57600080fd5b506100e6610631565b60405161007a929190610ab4565b61010460056000541460116106ce565b61011e8135158061011757506001548235145b60126106ce565b60008080556002805461013090610b11565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610b11565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610b70565b90506101d5816020015143101560136106ce565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610206929190610c0d565b60405180910390a161021a341560106106ce565b610222610941565b815181516001600160a01b0391821690526020808401518351820152604080850151828501805191909152606080870151825190151594019390935260808087015182519516949092019390935282514392019190915260a08401519151015261028b816106f8565b505050565b6102a060036000541460096106ce565b6102ba813515806102b357506001548235145b600a6106ce565b6000808055600280546102cc90610b11565b80601f01602080910402602001604051908101604052809291908181526020018280546102f890610b11565b80156103455780601f1061031a57610100808354040283529160200191610345565b820191906000526020600020905b81548152906001019060200180831161032857829003601f168201915b505050505080602001905181019061035d9190610c45565b604080513381528435602080830191909152850135818301529084013560608201529091507feade97c60783e4c8b7590ebdcad0dcf3d731471c98f3f06328d9701c9d0e19699060800160405180910390a16103bb341560086106ce565b6103c3610941565b815181516001600160a01b03909116905260208201516103e790604085013561089a565b815160209081019190915280820180518583013590528051600190830152835181516001600160a01b039091166040909101528051436060909101529083015190516080015261028b816106f8565b610446600560005414600d6106ce565b6104608135158061045957506001548235145b600e6106ce565b60008080556002805461047290610b11565b80601f016020809104026020016040519081016040528092919081815260200182805461049e90610b11565b80156104eb5780601f106104c0576101008083540402835291602001916104eb565b820191906000526020600020905b8154815290600101906020018083116104ce57829003601f168201915b50505050508060200190518101906105039190610b70565b905061051681602001514310600f6106ce565b6040805133815283356020808301919091528401358183015290517f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc09181900360600190a161056c34602084013514600b6106ce565b604081015161058290602084013511600c6106ce565b80608001516001600160a01b03166108fc82606001516105a65782604001516105a9565b60005b6040518115909202916000818181858888f193505050501580156105d1573d6000803e3d6000fd5b506105da610941565b815181516001600160a01b039091169052602080830151825182015280820180518583013590528051600092019190915280513360409091015280514360609091015260a083015190516080015261028b816106f8565b60006060600054600280805461064690610b11565b80601f016020809104026020016040519081016040528092919081815260200182805461067290610b11565b80156106bf5780601f10610694576101008083540402835291602001916106bf565b820191906000526020600020905b8154815290600101906020018083116106a257829003601f168201915b50505050509050915091509091565b816106f45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b8060200151608001518160000151602001511115610803576040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528151516001600160a01b0390811680835283516020908101518185019081528186018051516040808801918252825185015115156060808a01918252845183015189166080808c01918252955182015160a0808d019182526005600055436001558551998a019a909a5296519388019390935292519286019290925290511515918401919091525190931691810191909152905160c082015260e0015b6040516020818303038152906040526002908051906020019061028b929190610994565b8060000151600001516001600160a01b03166108fc82602001516020015161083057602083015151610833565b60005b6040518115909202916000818181858888f1935050505015801561085b573d6000803e3d6000fd5b50610864610a18565b602080830180516040015183830180516001600160a01b039092169091529051606001519051909101526106f4816108ed565b50565b6000826108a78382610caa565b91508110156108e75760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016106eb565b92915050565b604080518082019091526000808252602082015260208281018051516001600160a01b03168084529051820151838301908152600360005543600155604080519384019290925251908201526060016107df565b604080516080810182526000918101828152606082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b905290565b8280546109a090610b11565b90600052602060002090601f0160209004810192826109c25760008555610a08565b82601f106109db57805160ff1916838001178555610a08565b82800160010185558215610a08579182015b82811115610a085782518255916020019190600101906109ed565b50610a14929150610a52565b5090565b604051806040016040528060001515815260200161098f604051806040016040528060006001600160a01b03168152602001600081525090565b5b80821115610a145760008155600101610a53565b600060408284031215610a7957600080fd5b50919050565b600060408284031215610a9157600080fd5b610a9b8383610a67565b9392505050565b600060608284031215610a7957600080fd5b82815260006020604081840152835180604085015260005b81811015610ae857858101830151858201606001528201610acc565b81811115610afa576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610b2557607f821691505b60208210811415610a7957634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610b5d57600080fd5b919050565b801515811461089757600080fd5b600060c08284031215610b8257600080fd5b60405160c0810181811067ffffffffffffffff82111715610bb357634e487b7160e01b600052604160045260246000fd5b604052610bbf83610b46565b815260208301516020820152604083015160408201526060830151610be381610b62565b6060820152610bf460808401610b46565b608082015260a083015160a08201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135610c3581610b62565b8015156040840152509392505050565b600060408284031215610c5757600080fd5b6040516040810181811067ffffffffffffffff82111715610c8857634e487b7160e01b600052604160045260246000fd5b604052610c9483610b46565b8152602083015160208201528091505092915050565b60008219821115610ccb57634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220a928d1df3ec0fd25c159e6343ba7f6ba2d9778ee48abe30ee9172cd41719518064736f6c634300080c0033`,
  BytecodeLen: 4133,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:88:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:38:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:53:62:after expr stmt semicolon',
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
  "Creator": Creator,
  "Owner": Owner
  };
export const _APIs = {
  };
