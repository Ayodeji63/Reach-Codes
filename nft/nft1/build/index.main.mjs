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
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2],
      5: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2]
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
export async function _Bidder_bid5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v284, v285, v309, v310, v311, v312, v313] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2]);
  const v335 = stdlib.protect(ctc4, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:42:29:application call to [unknown function] (defined at: ./index.rsh:42:29:function exp)', 'at ./index.rsh:42:29:application call to [unknown function] (defined at: ./index.rsh:42:29:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v336 = v335[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v338 = stdlib.gt(v336, v312);
  stdlib.assert(v338, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:43:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:42:29:application call to [unknown function] (defined at: ./index.rsh:42:29:function exp)', 'at ./index.rsh:42:29:application call to [unknown function] (defined at: ./index.rsh:42:29:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v284, v285, v309, v310, v311, v312, v313, v335],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [v336, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v347], secs: v349, time: v348, didSend: v165, from: v346 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Bidder_bid"
        });
      const v351 = v347[stdlib.checkedBigNumberify('./index.rsh:42:10:spread', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        amt: v351,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v360 = [v310, v312];
      const v361 = await txn1.getOutput('Bidder_bid', 'v360', ctc5, v360);
      
      if (v311) {
        const v616 = v346;
        const v617 = false;
        const v618 = v351;
        const v619 = v348;
        const v621 = stdlib.le(v313, v309);
        if (v621) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v346,
            tok: v285
            });
          sim_r.txns.push({
            kind: 'from',
            to: v284,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v310,
          tok: undefined /* Nothing */
          });
        const v622 = v346;
        const v623 = false;
        const v624 = v351;
        const v625 = v348;
        const v627 = stdlib.le(v313, v309);
        if (v627) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v346,
            tok: v285
            });
          sim_r.txns.push({
            kind: 'from',
            to: v284,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc2, ctc2, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v347], secs: v349, time: v348, didSend: v165, from: v346 } = txn1;
  undefined /* setApiDetails */;
  const v351 = v347[stdlib.checkedBigNumberify('./index.rsh:42:10:spread', stdlib.UInt_max, '0')];
  const v352 = stdlib.gt(v351, v312);
  stdlib.assert(v352, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:43:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:42:29:application call to [unknown function] (defined at: ./index.rsh:42:29:function exp)', 'at ./index.rsh:42:29:application call to [unknown function] (defined at: ./index.rsh:42:29:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  ;
  const v360 = [v310, v312];
  const v361 = await txn1.getOutput('Bidder_bid', 'v360', ctc5, v360);
  if (v165) {
    stdlib.protect(ctc6, await interact.out(v347, v361), {
      at: './index.rsh:42:11:application',
      fs: ['at ./index.rsh:42:11:application call to [unknown function] (defined at: ./index.rsh:42:11:function exp)', 'at ./index.rsh:47:17:application call to "notify" (defined at: ./index.rsh:46:18:function exp)', 'at ./index.rsh:46:18:application call to [unknown function] (defined at: ./index.rsh:46:18:function exp)'],
      msg: 'out',
      who: 'Bidder_bid'
      });
    }
  else {
    }
  
  if (v311) {
    const v616 = v346;
    const v617 = false;
    const v618 = v351;
    const v619 = v348;
    const v621 = stdlib.le(v313, v309);
    if (v621) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  else {
    ;
    const v622 = v346;
    const v623 = false;
    const v624 = v351;
    const v625 = v348;
    const v627 = stdlib.le(v313, v309);
    if (v627) {
      return;
      }
    else {
      ;
      ;
      return;
      }}
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Object({
    lenInBlocks: ctc0,
    minBid: ctc0,
    nftId: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Tuple([ctc5, ctc0]);
  const ctc7 = stdlib.T_Bool;
  
  
  const v277 = stdlib.protect(ctc2, await interact.getSale(), {
    at: './index.rsh:24:71:application',
    fs: ['at ./index.rsh:23:15:application call to [unknown function] (defined at: ./index.rsh:23:19:function exp)'],
    msg: 'getSale',
    who: 'Creator'
    });
  const v278 = v277.lenInBlocks;
  const v279 = v277.minBid;
  const v280 = v277.nftId;
  
  const txn1 = await (ctc.sendrecv({
    args: [v280, v279, v278],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v285, v286, v287], secs: v289, time: v288, didSend: v35, from: v284 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v285
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v285, v286, v287], secs: v289, time: v288, didSend: v35, from: v284 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v284, v285, v286, v287, v288],
    evt_cnt: 0,
    funcNum: 1,
    lct: v288,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:11:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:27:15:decimal', stdlib.UInt_max, '1'), v285]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v296, time: v295, didSend: v42, from: v294 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:27:15:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v285
        });
      
      const v309 = stdlib.safeAdd(v288, v287);
      const v310 = v284;
      const v311 = true;
      const v312 = v286;
      const v313 = v295;
      const v314 = v288;
      
      if (await (async () => {
        const v328 = stdlib.le(v314, v309);
        
        return v328;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v310,
          tok: v285
          });
        if (v311) {
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v284,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: v285
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v296, time: v295, didSend: v42, from: v294 } = txn2;
  ;
  ;
  const v303 = stdlib.addressEq(v284, v294);
  stdlib.assert(v303, {
    at: './index.rsh:30:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  stdlib.protect(ctc3, await interact.autionReady(), {
    at: './index.rsh:31:31:application',
    fs: ['at ./index.rsh:31:31:application call to [unknown function] (defined at: ./index.rsh:31:31:function exp)', 'at ./index.rsh:31:31:application call to "liftedInteract" (defined at: ./index.rsh:31:31:application)'],
    msg: 'autionReady',
    who: 'Creator'
    });
  
  const v309 = stdlib.safeAdd(v288, v287);
  let v310 = v284;
  let v311 = true;
  let v312 = v286;
  let v313 = v295;
  let v314 = v288;
  
  let txn3 = txn2;
  while (await (async () => {
    const v328 = stdlib.le(v314, v309);
    
    return v328;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: ['time', v309],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v284, v285, v309, v310, v311, v312, v313],
        evt_cnt: 0,
        funcNum: 4,
        lct: v313,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:58:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v380, time: v379, didSend: v221, from: v378 } = txn5;
          
          ;
          const cv310 = v310;
          const cv311 = v311;
          const cv312 = v312;
          const cv313 = v379;
          const cv314 = v313;
          
          await (async () => {
            const v310 = cv310;
            const v311 = cv311;
            const v312 = cv312;
            const v313 = cv313;
            const v314 = cv314;
            
            if (await (async () => {
              const v328 = stdlib.le(v314, v309);
              
              return v328;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.txns.push({
                kind: 'from',
                to: v310,
                tok: v285
                });
              if (v311) {
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v285
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }
              else {
                sim_r.txns.push({
                  kind: 'from',
                  to: v284,
                  tok: undefined /* Nothing */
                  });
                
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v285
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc5, ctc1, ctc0, ctc5, ctc7, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v380, time: v379, didSend: v221, from: v378 } = txn5;
      ;
      const v381 = stdlib.addressEq(v284, v378);
      stdlib.assert(v381, {
        at: './index.rsh:58:15:dot',
        fs: ['at ./index.rsh:57:36:application call to [unknown function] (defined at: ./index.rsh:57:36:function exp)'],
        msg: 'sender correct',
        who: 'Creator'
        });
      const cv310 = v310;
      const cv311 = v311;
      const cv312 = v312;
      const cv313 = v379;
      const cv314 = v313;
      
      v310 = cv310;
      v311 = cv311;
      v312 = cv312;
      v313 = cv313;
      v314 = cv314;
      
      txn3 = txn5;
      continue;
      }
    else {
      const {data: [v347], secs: v349, time: v348, didSend: v165, from: v346 } = txn4;
      undefined /* setApiDetails */;
      const v351 = v347[stdlib.checkedBigNumberify('./index.rsh:42:10:spread', stdlib.UInt_max, '0')];
      const v352 = stdlib.gt(v351, v312);
      stdlib.assert(v352, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:43:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:42:29:application call to [unknown function] (defined at: ./index.rsh:42:29:function exp)', 'at ./index.rsh:42:29:application call to [unknown function] (defined at: ./index.rsh:42:29:function exp)'],
        msg: 'bid is too low',
        who: 'Creator'
        });
      ;
      const v360 = [v310, v312];
      await txn4.getOutput('Bidder_bid', 'v360', ctc6, v360);
      if (v311) {
        stdlib.protect(ctc3, await interact.seeBid(v346, v351), {
          at: './index.rsh:52:34:application',
          fs: ['at ./index.rsh:52:34:application call to [unknown function] (defined at: ./index.rsh:52:34:function exp)', 'at ./index.rsh:52:34:application call to "liftedInteract" (defined at: ./index.rsh:52:34:application)', 'at ./index.rsh:46:18:application call to [unknown function] (defined at: ./index.rsh:46:18:function exp)'],
          msg: 'seeBid',
          who: 'Creator'
          });
        
        const cv310 = v346;
        const cv311 = false;
        const cv312 = v351;
        const cv313 = v348;
        const cv314 = v313;
        
        v310 = cv310;
        v311 = cv311;
        v312 = cv312;
        v313 = cv313;
        v314 = cv314;
        
        txn3 = txn4;
        continue;}
      else {
        ;
        stdlib.protect(ctc3, await interact.seeBid(v346, v351), {
          at: './index.rsh:52:34:application',
          fs: ['at ./index.rsh:52:34:application call to [unknown function] (defined at: ./index.rsh:52:34:function exp)', 'at ./index.rsh:52:34:application call to "liftedInteract" (defined at: ./index.rsh:52:34:application)', 'at ./index.rsh:46:18:application call to [unknown function] (defined at: ./index.rsh:46:18:function exp)'],
          msg: 'seeBid',
          who: 'Creator'
          });
        
        const cv310 = v346;
        const cv311 = false;
        const cv312 = v351;
        const cv313 = v348;
        const cv314 = v313;
        
        v310 = cv310;
        v311 = cv311;
        v312 = cv312;
        v313 = cv313;
        v314 = cv314;
        
        txn3 = txn4;
        continue;}}
    
    }
  ;
  if (v311) {
    stdlib.protect(ctc3, await interact.showOutcome(v310, v312), {
      at: './index.rsh:66:31:application',
      fs: ['at ./index.rsh:66:31:application call to [unknown function] (defined at: ./index.rsh:66:31:function exp)', 'at ./index.rsh:66:31:application call to "liftedInteract" (defined at: ./index.rsh:66:31:application)'],
      msg: 'showOutcome',
      who: 'Creator'
      });
    
    return;
    }
  else {
    ;
    stdlib.protect(ctc3, await interact.showOutcome(v310, v312), {
      at: './index.rsh:66:31:application',
      fs: ['at ./index.rsh:66:31:application call to [unknown function] (defined at: ./index.rsh:66:31:function exp)', 'at ./index.rsh:66:31:application call to "liftedInteract" (defined at: ./index.rsh:66:31:application)'],
      msg: 'showOutcome',
      who: 'Creator'
      });
    
    return;
    }
  
  
  
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Bidder_bid5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)(address,uint64)`],
    pure: [],
    sigs: [`Bidder_bid(uint64)(address,uint64)`]
    },
  appApproval: `ByAKAAEEBSggCFFZoI0GJgIBAAAiNQAxGEEDEylkSSJbNQEhBls1AjYaABdJQQAUIjUEIzUGgaCbvIEBEkQ2GgFCAHQ2GgIXNQQ2GgM2GgEXSYEDDEABEUkkDEAAWSQSRCU0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yEEWzX+gASRJzTzsDIGNP4PRDT/MQASRDT/NAMhBVs0/jQDVzAgNANXUAEXNAMhB1syBjQDIQhbQgGHSCU0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/IQVbNf4hBFs1/VcwIDX8IQdbNfshCFs1+kk1BTX5gATXkLTdNPlQsDIGNP0MRDT5F0k1+DT7DUQ0+IgCO4AIAAAAAAAAAWg0/DT7FlBQsDT8NPsWUDUHNANXUAEXQQASNP80/jT9MQAiNPgyBjT6QgD3sSKyATT7sggjshA0/LIHszT/NP40/TEAIjT4MgY0+kIA1UkjDEAAVyMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBVs1/oE4WzX9gASai5F0sCM0/ogBwDT/MQASRDT/NP40/TQDgTBbCDT/IzQDIQRbMgY0/UIAeEghCYgBgSI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hBls1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsCEJiAFGsSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+FlA0/RZQMgYWUChLAVcAQGdIIzUBMgY1AkIAvTX/Nf41/TX8Nfs1+jX5Nfg0/zT6DkEALjT4NPkWUDT6FlA0+1A0/BZRBwhQNP0WUDT+FlAoSwFXAGFnSCU1ATIGNQJCAHexIrIBI7ISJLIQNPuyFDT5shGzNPxBABqxIrIBIrISJLIQMgmyFTIKshQ0+bIRs0IAKrEisgE0/bIII7IQNPiyB7OxIrIBIrISJLIQMgmyFTIKshQ0+bIRs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 97,
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
                "internalType": "address payable",
                "name": "v285",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v286",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v287",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "internalType": "address payable",
                "name": "v285",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v286",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v287",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T10",
                "name": "v347",
                "type": "tuple"
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
    "name": "_reach_e3",
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
        "internalType": "struct T7",
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
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v360",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bidder_bid",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T9",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T10",
                "name": "v347",
                "type": "tuple"
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
    "name": "_reach_m3",
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
        "internalType": "struct T7",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620016bf380380620016bf83398101604081905262000026916200028b565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e3415600762000184565b620000e36040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b3380825260208381018051516001600160a01b039081168386019081528251840151604080880191825293518401516060808901918252436080808b0182815260016000819055929092558751808a019a909a5294519095168887015291519187019190915251908501525160a0808501919091528151808503909101815260c0909301905281516200017b926002920190620001ae565b50505062000374565b81620001aa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001bc9062000337565b90600052602060002090601f016020900481019282620001e057600085556200022b565b82601f10620001fb57805160ff19168380011785556200022b565b828001600101855582156200022b579182015b828111156200022b5782518255916020019190600101906200020e565b50620002399291506200023d565b5090565b5b808211156200023957600081556001016200023e565b604051606081016001600160401b03811182821017156200028557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200029f57600080fd5b604080519081016001600160401b0381118282101715620002d057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002ea57600080fd5b620002f462000254565b60208501519092506001600160a01b03811681146200031257600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c908216806200034c57607f821691505b602082108114156200036e57634e487b7160e01b600052602260045260246000fd5b50919050565b61133b80620003846000396000f3fe60806040526004361061006e5760003560e01c8063832307571161004b57806383230757146100c1578063a7661d54146100d6578063ab53f2c6146100e9578063b62792241461010c57005b80631e93b0f1146100775780632772eddc1461009b5780632c10a159146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610f7e565b610143565b6100756100bc366004610f7e565b610179565b3480156100cd57600080fd5b50600154610088565b6100756100e4366004610f7e565b6101ab565b3480156100f557600080fd5b506100fe6101dd565b604051610092929190610fc6565b61011f61011a366004611000565b61027a565b6040805182516001600160a01b031681526020928301519281019290925201610092565b604080516060810182526000602082018181529282015290815261017561016f36849003840184611081565b8261029d565b5050565b60408051606081018252600060208201818152928201529081526101756101a5368490038401846110e6565b826105bd565b60408051606081018252600060208201818152928201529081526101756101d7368490038401846110e6565b826107a0565b6000606060005460028080546101f29061111e565b80601f016020809104026020016040519081016040528092919081815260200182805461021e9061111e565b801561026b5780601f106102405761010080835404028352916020019161026b565b820191906000526020600020905b81548152906001019060200180831161024e57829003601f168201915b50505050509050915091509091565b604080518082019091526000808252602082015261029782610968565b92915050565b6102ad600560005414600f6109bf565b81516102c89015806102c157508251600154145b60106109bf565b6000808055600280546102da9061111e565b80601f01602080910402602001604051908101604052809291908181526020018280546103069061111e565b80156103535780601f1061032857610100808354040283529160200191610353565b820191906000526020600020905b81548152906001019060200180831161033657829003601f168201915b505050505080602001905181019061036b919061116f565b905061038d604080516060810182526000602082018181529282015290815290565b61039e8260400151431060116109bf565b60408051338152855160208083019190915286015151518183015290517f7d66d73ff83563156ca4ecd3b15e845da66b8d82f7da365588d378ce806c89ae9181900360600190a160a0820151602085015151516103fd9110600d6109bf565b60208401515151610411903414600e6109bf565b606082015181516001600160a01b03909116905260a082015181516020015280516040517f216835c7eea22b69307d3475736ebcdcdf48107212d1da49fbb21ab3a8f74e449161047b9181516001600160a01b031681526020918201519181019190915260400190565b60405180910390a18051835260808201511561050557610499610e15565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051339052805160009084015291870151515182519091015280514360609091015260c08401519051608001526104ff816109e5565b506105b7565b81606001516001600160a01b03166108fc8360a001519081150290604051600060405180830381858888f19350505050158015610546573d6000803e3d6000fd5b5061054f610e15565b825181516001600160a01b039182169052602080850151835192169181019190915260408085015183518201528183018051339052805160009084015291870151515182519091015280514360609091015260c08401519051608001526105b5816109e5565b505b50505050565b6105cd600160005414600b6109bf565b81516105e89015806105e157508251600154145b600c6109bf565b6000808055600280546105fa9061111e565b80601f01602080910402602001604051908101604052809291908181526020018280546106269061111e565b80156106735780601f1061064857610100808354040283529160200191610673565b820191906000526020600020905b81548152906001019060200180831161065657829003601f168201915b505050505080602001905181019061068b919061121c565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16106e2341560086109bf565b6106fc6106f53383602001516001610bb1565b60096109bf565b8051610714906001600160a01b03163314600a6109bf565b61071c610e15565b815181516001600160a01b039182169052602080840151835192169101526080820151606083015161074e9190610bc9565b81516040908101919091528251602080840180516001600160a01b039093169092528151600191015283820151815190920191909152805143606090910152608080840151915101526105b7816109e5565b6107b060056000541460146109bf565b81516107cb9015806107c457508251600154145b60156109bf565b6000808055600280546107dd9061111e565b80601f01602080910402602001604051908101604052809291908181526020018280546108099061111e565b80156108565780601f1061082b57610100808354040283529160200191610856565b820191906000526020600020905b81548152906001019060200180831161083957829003601f168201915b505050505080602001905181019061086e919061116f565b9050610882816040015143101560166109bf565b60408051338152845160208083019190915285015115158183015290517faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907229181900360600190a16108d5341560126109bf565b80516108ed906001600160a01b0316331460136109bf565b6108f5610e15565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201526060808601518386018051919095169052608080870151855190151594019390935260a086015184519092019190915282514391015260c0840151915101526105b7816109e5565b6040805180820190915260008082526020820152610984610e6a565b6020810151518390526109ad604080516060810182526000602082018181529282015290815290565b6109b7828261029d565b519392505050565b816101755760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b80516040015160208201516080015111610b14576040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528151516001600160a01b0390811680835283516020908101518316818501908152855160409081015181870190815283880180515187166060808a01918252825187015115156080808c01918252845187015160a0808e01918252955184015160c0808f0191825260056000554360015589519b8c019c909c5298518c16978a01979097529451918801919091529051909716918501919091529451151594830194909452925191810191909152905160e08201526101000160405160208183030381529060405260029080519060200190610b0f929190610e97565b505050565b610b308160000151602001518260200151600001516001610c16565b80602001516020015115610b575760008080556001819055610b5490600290610f1b565b50565b805151602082015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b9a573d6000803e3d6000fd5b5060008080556001819055610b5490600290610f1b565b6000610bbf83853085610c2a565b90505b9392505050565b600082610bd683826112a6565b91508110156102975760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016109dc565b610c21838383610d04565b610b0f57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610c91916112cc565b60006040518083038185875af1925050503d8060008114610cce576040519150601f19603f3d011682016040523d82523d6000602084013e610cd3565b606091505b5091509150610ce482826001610dd5565b5080806020019051810190610cf991906112e8565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391610d63916112cc565b60006040518083038185875af1925050503d8060008114610da0576040519150601f19603f3d011682016040523d82523d6000602084013e610da5565b606091505b5091509150610db682826002610dd5565b5080806020019051810190610dcb91906112e8565b9695505050505050565b60608315610de4575081610bc2565b825115610df45782518084602001fd5b60405163100960cb60e01b8152600481018390526024016109dc565b905290565b6040805160a081018252600091810182815260608201839052608082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b604051806040016040528060008152602001610e1060408051808201909152600060208201908152815290565b828054610ea39061111e565b90600052602060002090601f016020900481019282610ec55760008555610f0b565b82601f10610ede57805160ff1916838001178555610f0b565b82800160010185558215610f0b579182015b82811115610f0b578251825591602001919060010190610ef0565b50610f17929150610f51565b5090565b508054610f279061111e565b6000825580601f10610f37575050565b601f016020900490600052602060002090810190610b5491905b5b80821115610f175760008155600101610f52565b600060408284031215610f7857600080fd5b50919050565b600060408284031215610f9057600080fd5b610bc28383610f66565b60005b83811015610fb5578181015183820152602001610f9d565b838111156105b75750506000910152565b8281526040602082015260008251806040840152610feb816060850160208701610f9a565b601f01601f1916919091016060019392505050565b60006020828403121561101257600080fd5b5035919050565b6040805190810167ffffffffffffffff8111828210171561104a57634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561104a57634e487b7160e01b600052604160045260246000fd5b6000818303604081121561109457600080fd5b61109c611019565b833581526020601f19830112156110b257600080fd5b6110ba611050565b91506110c4611050565b602094850135815282529283015250919050565b8015158114610b5457600080fd5b6000604082840312156110f857600080fd5b611100611019565b823581526020830135611112816110d8565b60208201529392505050565b600181811c9082168061113257607f821691505b60208210811415610f7857634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461116a57600080fd5b919050565b600060e0828403121561118157600080fd5b60405160e0810181811067ffffffffffffffff821117156111b257634e487b7160e01b600052604160045260246000fd5b6040526111be83611153565b81526111cc60208401611153565b6020820152604083015160408201526111e760608401611153565b606082015260808301516111fa816110d8565b608082015260a0838101519082015260c0928301519281019290925250919050565b600060a0828403121561122e57600080fd5b60405160a0810181811067ffffffffffffffff8211171561125f57634e487b7160e01b600052604160045260246000fd5b60405261126b83611153565b815261127960208401611153565b60208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b600082198211156112c757634e487b7160e01b600052601160045260246000fd5b500190565b600082516112de818460208701610f9a565b9190910192915050565b6000602082840312156112fa57600080fd5b8151610bc2816110d856fea26469706673582212205bd0b1adcb1c1452b26f05f3b388b1b589eb69fc1b2ac5497b91f45c422de77064736f6c634300080c0033`,
  BytecodeLen: 5823,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:28:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:67:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:67:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:34:64:after expr stmt semicolon',
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
  "Bidder_bid": Bidder_bid,
  "Creator": Creator
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid
    }
  };
