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
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc1],
      11: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc1, ctc1]
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
export async function Leonard(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Leonard expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Leonard expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v412, v413, v414], secs: v416, time: v415, didSend: v78, from: v411 } = txn1;
  ;
  const v419 = stdlib.safeMod(v414, stdlib.checkedBigNumberify('./index.rsh:63:26:decimal', stdlib.UInt_max, '2'));
  const v420 = stdlib.eq(v419, stdlib.checkedBigNumberify('./index.rsh:63:31:decimal', stdlib.UInt_max, '0'));
  let v421;
  if (v420) {
    const v422 = stdlib.safeSub(v414, stdlib.checkedBigNumberify('./index.rsh:63:44:decimal', stdlib.UInt_max, '1'));
    v421 = v422;
    }
  else {
    v421 = v414;
    }
  const v429 = stdlib.safeAdd(v415, v413);
  stdlib.protect(ctc1, await interact.acceptWager(v412), {
    at: './index.rsh:66:25:application',
    fs: ['at ./index.rsh:65:15:application call to [unknown function] (defined at: ./index.rsh:65:19:function exp)'],
    msg: 'acceptWager',
    who: 'Leonard'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v411, v412, v413, v421, v429],
    evt_cnt: 0,
    funcNum: 1,
    lct: v415,
    onlyIf: true,
    out_tys: [],
    pay: [v412, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v435, time: v434, didSend: v91, from: v433 } = txn2;
      
      const v437 = stdlib.add(v412, v412);
      sim_r.txns.push({
        amt: v412,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v438 = stdlib.checkedBigNumberify('./index.rsh:72:30:decimal', stdlib.UInt_max, '0');
      const v439 = stdlib.checkedBigNumberify('./index.rsh:72:36:decimal', stdlib.UInt_max, '0');
      const v440 = stdlib.checkedBigNumberify('./index.rsh:72:33:decimal', stdlib.UInt_max, '0');
      const v441 = v434;
      const v448 = v437;
      
      if (await (async () => {
        const v452 = stdlib.lt(v438, v421);
        
        return v452;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v610 = stdlib.gt(v440, v439);
        const v611 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v612 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v613 = v610 ? v611 : v612;
        const v614 = v613[stdlib.checkedBigNumberify('./index.rsh:143:9:array', stdlib.UInt_max, '0')];
        const v615 = v613[stdlib.checkedBigNumberify('./index.rsh:143:9:array', stdlib.UInt_max, '1')];
        const v616 = stdlib.safeMul(v614, v412);
        sim_r.txns.push({
          kind: 'from',
          to: v411,
          tok: undefined /* Nothing */
          });
        const v621 = stdlib.safeMul(v615, v412);
        sim_r.txns.push({
          kind: 'from',
          to: v433,
          tok: undefined /* Nothing */
          });
        const v627 = v610 ? stdlib.checkedBigNumberify('./index.rsh:148:32:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:148:36:decimal', stdlib.UInt_max, '2');
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v429],
    tys: [ctc3, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v411, v412, v413, v421, v429],
      evt_cnt: 0,
      funcNum: 2,
      lct: v415,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v636, time: v635, didSend: v332, from: v634 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v411,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v636, time: v635, didSend: v332, from: v634 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:51:29:application',
      fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:69:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Leonard'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v435, time: v434, didSend: v91, from: v433 } = txn2;
    const v437 = stdlib.add(v412, v412);
    ;
    let v438 = stdlib.checkedBigNumberify('./index.rsh:72:30:decimal', stdlib.UInt_max, '0');
    let v439 = stdlib.checkedBigNumberify('./index.rsh:72:36:decimal', stdlib.UInt_max, '0');
    let v440 = stdlib.checkedBigNumberify('./index.rsh:72:33:decimal', stdlib.UInt_max, '0');
    let v441 = v434;
    let v448 = v437;
    
    let txn3 = txn2;
    while (await (async () => {
      const v452 = stdlib.lt(v438, v421);
      
      return v452;})()) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 4,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v455, time: v454, didSend: v105, from: v453 } = txn4;
      ;
      const v456 = stdlib.addressEq(v411, v453);
      stdlib.assert(v456, {
        at: './index.rsh:76:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Leonard'
        });
      let v457 = stdlib.checkedBigNumberify('./index.rsh:77:19:decimal', stdlib.UInt_max, '0');
      let v458 = v454;
      let v465 = v448;
      
      let txn5 = txn4;
      while (await (async () => {
        const v473 = stdlib.eq(v457, stdlib.checkedBigNumberify('./index.rsh:79:23:decimal', stdlib.UInt_max, '0'));
        
        return v473;})()) {
        const v480 = stdlib.safeAdd(v458, v413);
        const txn6 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v480],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v411, v412, v413, v421, v433, v438, v439, v440, v465, v480],
            evt_cnt: 0,
            funcNum: 7,
            lct: v458,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v583, time: v582, didSend: v262, from: v581 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v433,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v583, time: v582, didSend: v262, from: v581 } = txn7;
          ;
          const v584 = stdlib.addressEq(v433, v581);
          const v585 = stdlib.addressEq(v411, v581);
          const v586 = v584 ? true : v585;
          stdlib.assert(v586, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:91:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Leonard'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:51:29:application',
            fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:91:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Leonard'
            });
          
          return;
          
          }
        else {
          const {data: [v489], secs: v491, time: v490, didSend: v131, from: v488 } = txn6;
          ;
          const v492 = stdlib.addressEq(v411, v488);
          stdlib.assert(v492, {
            at: './index.rsh:90:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Leonard'
            });
          const v499 = stdlib.safeAdd(v490, v413);
          const v503 = stdlib.protect(ctc0, await interact.getHand(), {
            at: './index.rsh:98:56:application',
            fs: ['at ./index.rsh:97:19:application call to [unknown function] (defined at: ./index.rsh:97:23:function exp)'],
            msg: 'getHand',
            who: 'Leonard'
            });
          
          const txn7 = await (ctc.sendrecv({
            args: [v411, v412, v413, v421, v433, v438, v439, v440, v465, v489, v499, v503],
            evt_cnt: 1,
            funcNum: 8,
            lct: v490,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:101:15:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v505], secs: v507, time: v506, didSend: v141, from: v504 } = txn7;
              
              ;
              const v515 = stdlib.safeAdd(v506, v413);
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v499],
            tys: [ctc3, ctc0, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn7.didTimeout) {
            const txn8 = await (ctc.sendrecv({
              args: [v411, v412, v413, v421, v433, v438, v439, v440, v465, v489, v499],
              evt_cnt: 0,
              funcNum: 9,
              lct: v490,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v565, time: v564, didSend: v228, from: v563 } = txn8;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v411,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v565, time: v564, didSend: v228, from: v563 } = txn8;
            ;
            const v566 = stdlib.addressEq(v433, v563);
            const v567 = stdlib.addressEq(v411, v563);
            const v568 = v566 ? true : v567;
            stdlib.assert(v568, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:102:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Leonard'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:51:29:application',
              fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:102:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Leonard'
              });
            
            return;
            
            }
          else {
            const {data: [v505], secs: v507, time: v506, didSend: v141, from: v504 } = txn7;
            ;
            const v508 = stdlib.addressEq(v433, v504);
            stdlib.assert(v508, {
              at: './index.rsh:101:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Leonard'
              });
            const v515 = stdlib.safeAdd(v506, v413);
            const txn8 = await (ctc.recv({
              didSend: false,
              evt_cnt: 2,
              funcNum: 10,
              out_tys: [ctc0, ctc0],
              timeoutAt: ['time', v515],
              waitIfNotPresent: false
              }));
            if (txn8.didTimeout) {
              const txn9 = await (ctc.sendrecv({
                args: [v411, v412, v413, v421, v433, v438, v439, v440, v465, v489, v505, v515],
                evt_cnt: 0,
                funcNum: 11,
                lct: v506,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn9) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v547, time: v546, didSend: v194, from: v545 } = txn9;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v433,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v547, time: v546, didSend: v194, from: v545 } = txn9;
              ;
              const v548 = stdlib.addressEq(v433, v545);
              const v549 = stdlib.addressEq(v411, v545);
              const v550 = v548 ? true : v549;
              stdlib.assert(v550, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:113:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Leonard'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:51:29:application',
                fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:113:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Leonard'
                });
              
              return;
              
              }
            else {
              const {data: [v520, v521], secs: v523, time: v522, didSend: v151, from: v519 } = txn8;
              ;
              const v524 = stdlib.addressEq(v411, v519);
              stdlib.assert(v524, {
                at: './index.rsh:111:15:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Leonard'
                });
              const v525 = stdlib.digest([ctc0, ctc0], [v520, v521]);
              const v526 = stdlib.digestEq(v489, v525);
              stdlib.assert(v526, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:115:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Leonard'
                });
              const v527 = stdlib.safeAdd(v521, stdlib.checkedBigNumberify('./index.rsh:117:41:decimal', stdlib.UInt_max, '1'));
              const v528 = stdlib.safeAdd(v505, stdlib.checkedBigNumberify('./index.rsh:117:60:decimal', stdlib.UInt_max, '1'));
              const v529 = stdlib.safeSub(v527, v528);
              const v530 = stdlib.safeAdd(v529, stdlib.checkedBigNumberify('./index.rsh:117:65:decimal', stdlib.UInt_max, '5'));
              const v531 = stdlib.safeMod(v530, stdlib.checkedBigNumberify('./index.rsh:117:70:decimal', stdlib.UInt_max, '5'));
              const v532 = stdlib.eq(v531, stdlib.checkedBigNumberify('./index.rsh:118:25:decimal', stdlib.UInt_max, '0'));
              if (v532) {
                stdlib.protect(ctc1, await interact.seeOutcomeDraw(), {
                  at: './index.rsh:120:34:application',
                  fs: ['at ./index.rsh:119:13:application call to [unknown function] (defined at: ./index.rsh:119:37:function exp)'],
                  msg: 'seeOutcomeDraw',
                  who: 'Leonard'
                  });
                
                }
              else {
                }
              const v537 = stdlib.gt(v531, stdlib.checkedBigNumberify('./index.rsh:124:22:decimal', stdlib.UInt_max, '0'));
              const v538 = stdlib.lt(v531, stdlib.checkedBigNumberify('./index.rsh:124:40:decimal', stdlib.UInt_max, '3'));
              const v539 = v537 ? v538 : false;
              const v541 = stdlib.gt(v531, stdlib.checkedBigNumberify('./index.rsh:126:44:decimal', stdlib.UInt_max, '2'));
              const v542 = v537 ? v541 : false;
              const v543 = v542 ? stdlib.checkedBigNumberify('./index.rsh:127:13:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:128:13:decimal', stdlib.UInt_max, '0');
              const v544 = v539 ? stdlib.checkedBigNumberify('./index.rsh:125:13:decimal', stdlib.UInt_max, '1') : v543;
              const cv457 = v544;
              const cv458 = v522;
              const cv465 = v465;
              
              v457 = cv457;
              v458 = cv458;
              v465 = cv465;
              
              txn5 = txn8;
              continue;}
            
            }
          
          }
        
        }
      stdlib.protect(ctc1, await interact.seeOutcomeRounds(v457, v421), {
        at: './index.rsh:132:32:application',
        fs: ['at ./index.rsh:131:9:application call to [unknown function] (defined at: ./index.rsh:131:33:function exp)'],
        msg: 'seeOutcomeRounds',
        who: 'Leonard'
        });
      
      const v603 = stdlib.safeAdd(v438, stdlib.checkedBigNumberify('./index.rsh:136:15:decimal', stdlib.UInt_max, '1'));
      const v604 = stdlib.eq(v457, stdlib.checkedBigNumberify('./index.rsh:137:18:decimal', stdlib.UInt_max, '1'));
      let v605;
      if (v604) {
        const v606 = stdlib.safeAdd(v440, stdlib.checkedBigNumberify('./index.rsh:137:29:decimal', stdlib.UInt_max, '1'));
        v605 = v606;
        }
      else {
        v605 = v440;
        }
      const v607 = stdlib.eq(v457, stdlib.checkedBigNumberify('./index.rsh:138:18:decimal', stdlib.UInt_max, '2'));
      let v608;
      if (v607) {
        const v609 = stdlib.safeAdd(v439, stdlib.checkedBigNumberify('./index.rsh:138:29:decimal', stdlib.UInt_max, '1'));
        v608 = v609;
        }
      else {
        v608 = v439;
        }
      const cv438 = v603;
      const cv439 = v608;
      const cv440 = v605;
      const cv441 = v458;
      const cv448 = v465;
      
      v438 = cv438;
      v439 = cv439;
      v440 = cv440;
      v441 = cv441;
      v448 = cv448;
      
      txn3 = txn5;
      continue;
      
      }
    const v610 = stdlib.gt(v440, v439);
    const v611 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v612 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v613 = v610 ? v611 : v612;
    const v614 = v613[stdlib.checkedBigNumberify('./index.rsh:143:9:array', stdlib.UInt_max, '0')];
    const v615 = v613[stdlib.checkedBigNumberify('./index.rsh:143:9:array', stdlib.UInt_max, '1')];
    const v616 = stdlib.safeMul(v614, v412);
    ;
    const v621 = stdlib.safeMul(v615, v412);
    ;
    const v627 = v610 ? stdlib.checkedBigNumberify('./index.rsh:148:32:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:148:36:decimal', stdlib.UInt_max, '2');
    stdlib.protect(ctc1, await interact.seeOutcome(v627), {
      at: './index.rsh:151:24:application',
      fs: ['at ./index.rsh:150:7:application call to [unknown function] (defined at: ./index.rsh:150:31:function exp)'],
      msg: 'seeOutcome',
      who: 'Leonard'
      });
    
    return;
    }
  
  
  
  };
export async function Sheldon(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Sheldon expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Sheldon expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v406 = stdlib.protect(ctc0, interact.deadline, 'for Sheldon\'s interact field deadline');
  const v407 = stdlib.protect(ctc0, interact.rounds, 'for Sheldon\'s interact field rounds');
  const v408 = stdlib.protect(ctc0, interact.wager, 'for Sheldon\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v408, v406, v407],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:60:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [v408, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v412, v413, v414], secs: v416, time: v415, didSend: v78, from: v411 } = txn1;
      
      sim_r.txns.push({
        amt: v412,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v419 = stdlib.safeMod(v414, stdlib.checkedBigNumberify('./index.rsh:63:26:decimal', stdlib.UInt_max, '2'));
      const v420 = stdlib.eq(v419, stdlib.checkedBigNumberify('./index.rsh:63:31:decimal', stdlib.UInt_max, '0'));
      let v421;
      if (v420) {
        const v422 = stdlib.safeSub(v414, stdlib.checkedBigNumberify('./index.rsh:63:44:decimal', stdlib.UInt_max, '1'));
        v421 = v422;
        }
      else {
        v421 = v414;
        }
      const v429 = stdlib.safeAdd(v415, v413);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v412, v413, v414], secs: v416, time: v415, didSend: v78, from: v411 } = txn1;
  ;
  const v419 = stdlib.safeMod(v414, stdlib.checkedBigNumberify('./index.rsh:63:26:decimal', stdlib.UInt_max, '2'));
  const v420 = stdlib.eq(v419, stdlib.checkedBigNumberify('./index.rsh:63:31:decimal', stdlib.UInt_max, '0'));
  let v421;
  if (v420) {
    const v422 = stdlib.safeSub(v414, stdlib.checkedBigNumberify('./index.rsh:63:44:decimal', stdlib.UInt_max, '1'));
    v421 = v422;
    }
  else {
    v421 = v414;
    }
  const v429 = stdlib.safeAdd(v415, v413);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v429],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v411, v412, v413, v421, v429],
      evt_cnt: 0,
      funcNum: 2,
      lct: v415,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v636, time: v635, didSend: v332, from: v634 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v411,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v636, time: v635, didSend: v332, from: v634 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:51:29:application',
      fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:69:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Sheldon'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v435, time: v434, didSend: v91, from: v433 } = txn2;
    const v437 = stdlib.add(v412, v412);
    ;
    let v438 = stdlib.checkedBigNumberify('./index.rsh:72:30:decimal', stdlib.UInt_max, '0');
    let v439 = stdlib.checkedBigNumberify('./index.rsh:72:36:decimal', stdlib.UInt_max, '0');
    let v440 = stdlib.checkedBigNumberify('./index.rsh:72:33:decimal', stdlib.UInt_max, '0');
    let v441 = v434;
    let v448 = v437;
    
    let txn3 = txn2;
    while (await (async () => {
      const v452 = stdlib.lt(v438, v421);
      
      return v452;})()) {
      const txn4 = await (ctc.sendrecv({
        args: [v411, v412, v413, v421, v433, v438, v439, v440, v448],
        evt_cnt: 0,
        funcNum: 4,
        lct: v441,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:76:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v455, time: v454, didSend: v105, from: v453 } = txn4;
          
          ;
          const v457 = stdlib.checkedBigNumberify('./index.rsh:77:19:decimal', stdlib.UInt_max, '0');
          const v458 = v454;
          const v465 = v448;
          
          if (await (async () => {
            const v473 = stdlib.eq(v457, stdlib.checkedBigNumberify('./index.rsh:79:23:decimal', stdlib.UInt_max, '0'));
            
            return v473;})()) {
            const v480 = stdlib.safeAdd(v458, v413);
            sim_r.isHalt = false;
            }
          else {
            
            const v603 = stdlib.safeAdd(v438, stdlib.checkedBigNumberify('./index.rsh:136:15:decimal', stdlib.UInt_max, '1'));
            const v604 = stdlib.eq(v457, stdlib.checkedBigNumberify('./index.rsh:137:18:decimal', stdlib.UInt_max, '1'));
            let v605;
            if (v604) {
              const v606 = stdlib.safeAdd(v440, stdlib.checkedBigNumberify('./index.rsh:137:29:decimal', stdlib.UInt_max, '1'));
              v605 = v606;
              }
            else {
              v605 = v440;
              }
            const v607 = stdlib.eq(v457, stdlib.checkedBigNumberify('./index.rsh:138:18:decimal', stdlib.UInt_max, '2'));
            let v608;
            if (v607) {
              const v609 = stdlib.safeAdd(v439, stdlib.checkedBigNumberify('./index.rsh:138:29:decimal', stdlib.UInt_max, '1'));
              v608 = v609;
              }
            else {
              v608 = v439;
              }
            const cv438 = v603;
            const cv439 = v608;
            const cv440 = v605;
            const cv441 = v458;
            const cv448 = v465;
            
            await (async () => {
              const v438 = cv438;
              const v439 = cv439;
              const v440 = cv440;
              const v441 = cv441;
              const v448 = cv448;
              
              if (await (async () => {
                const v452 = stdlib.lt(v438, v421);
                
                return v452;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v610 = stdlib.gt(v440, v439);
                const v611 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                const v612 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                const v613 = v610 ? v611 : v612;
                const v614 = v613[stdlib.checkedBigNumberify('./index.rsh:143:9:array', stdlib.UInt_max, '0')];
                const v615 = v613[stdlib.checkedBigNumberify('./index.rsh:143:9:array', stdlib.UInt_max, '1')];
                const v616 = stdlib.safeMul(v614, v412);
                sim_r.txns.push({
                  kind: 'from',
                  to: v411,
                  tok: undefined /* Nothing */
                  });
                const v621 = stdlib.safeMul(v615, v412);
                sim_r.txns.push({
                  kind: 'from',
                  to: v433,
                  tok: undefined /* Nothing */
                  });
                const v627 = v610 ? stdlib.checkedBigNumberify('./index.rsh:148:32:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:148:36:decimal', stdlib.UInt_max, '2');
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();}
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v455, time: v454, didSend: v105, from: v453 } = txn4;
      ;
      const v456 = stdlib.addressEq(v411, v453);
      stdlib.assert(v456, {
        at: './index.rsh:76:13:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Sheldon'
        });
      let v457 = stdlib.checkedBigNumberify('./index.rsh:77:19:decimal', stdlib.UInt_max, '0');
      let v458 = v454;
      let v465 = v448;
      
      let txn5 = txn4;
      while (await (async () => {
        const v473 = stdlib.eq(v457, stdlib.checkedBigNumberify('./index.rsh:79:23:decimal', stdlib.UInt_max, '0'));
        
        return v473;})()) {
        const v480 = stdlib.safeAdd(v458, v413);
        const v484 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:83:46:application',
          fs: ['at ./index.rsh:82:19:application call to [unknown function] (defined at: ./index.rsh:82:23:function exp)'],
          msg: 'getHand',
          who: 'Sheldon'
          });
        const v485 = stdlib.protect(ctc0, await interact.random(), {
          at: 'reach standard library:64:31:application',
          fs: ['at ./index.rsh:84:62:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:82:19:application call to [unknown function] (defined at: ./index.rsh:82:23:function exp)'],
          msg: 'random',
          who: 'Sheldon'
          });
        const v486 = stdlib.digest([ctc0, ctc0], [v485, v484]);
        
        const txn6 = await (ctc.sendrecv({
          args: [v411, v412, v413, v421, v433, v438, v439, v440, v465, v480, v486],
          evt_cnt: 1,
          funcNum: 6,
          lct: v458,
          onlyIf: true,
          out_tys: [ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:90:15:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn6) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v489], secs: v491, time: v490, didSend: v131, from: v488 } = txn6;
            
            ;
            const v499 = stdlib.safeAdd(v490, v413);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v480],
          tys: [ctc3, ctc0, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        if (txn6.didTimeout) {
          const txn7 = await (ctc.sendrecv({
            args: [v411, v412, v413, v421, v433, v438, v439, v440, v465, v480],
            evt_cnt: 0,
            funcNum: 7,
            lct: v458,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn7) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v583, time: v582, didSend: v262, from: v581 } = txn7;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v433,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v583, time: v582, didSend: v262, from: v581 } = txn7;
          ;
          const v584 = stdlib.addressEq(v433, v581);
          const v585 = stdlib.addressEq(v411, v581);
          const v586 = v584 ? true : v585;
          stdlib.assert(v586, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:91:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Sheldon'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:51:29:application',
            fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:91:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Sheldon'
            });
          
          return;
          
          }
        else {
          const {data: [v489], secs: v491, time: v490, didSend: v131, from: v488 } = txn6;
          ;
          const v492 = stdlib.addressEq(v411, v488);
          stdlib.assert(v492, {
            at: './index.rsh:90:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Sheldon'
            });
          const v499 = stdlib.safeAdd(v490, v413);
          const txn7 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc0],
            timeoutAt: ['time', v499],
            waitIfNotPresent: false
            }));
          if (txn7.didTimeout) {
            const txn8 = await (ctc.sendrecv({
              args: [v411, v412, v413, v421, v433, v438, v439, v440, v465, v489, v499],
              evt_cnt: 0,
              funcNum: 9,
              lct: v490,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v565, time: v564, didSend: v228, from: v563 } = txn8;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v411,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc1, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v565, time: v564, didSend: v228, from: v563 } = txn8;
            ;
            const v566 = stdlib.addressEq(v433, v563);
            const v567 = stdlib.addressEq(v411, v563);
            const v568 = v566 ? true : v567;
            stdlib.assert(v568, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:102:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Sheldon'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:51:29:application',
              fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:102:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Sheldon'
              });
            
            return;
            
            }
          else {
            const {data: [v505], secs: v507, time: v506, didSend: v141, from: v504 } = txn7;
            ;
            const v508 = stdlib.addressEq(v433, v504);
            stdlib.assert(v508, {
              at: './index.rsh:101:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Sheldon'
              });
            const v515 = stdlib.safeAdd(v506, v413);
            const txn8 = await (ctc.sendrecv({
              args: [v411, v412, v413, v421, v433, v438, v439, v440, v465, v489, v505, v515, v485, v484],
              evt_cnt: 2,
              funcNum: 10,
              lct: v506,
              onlyIf: true,
              out_tys: [ctc0, ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:111:15:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn8) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v520, v521], secs: v523, time: v522, didSend: v151, from: v519 } = txn8;
                
                ;
                const v527 = stdlib.safeAdd(v521, stdlib.checkedBigNumberify('./index.rsh:117:41:decimal', stdlib.UInt_max, '1'));
                const v528 = stdlib.safeAdd(v505, stdlib.checkedBigNumberify('./index.rsh:117:60:decimal', stdlib.UInt_max, '1'));
                const v529 = stdlib.safeSub(v527, v528);
                const v530 = stdlib.safeAdd(v529, stdlib.checkedBigNumberify('./index.rsh:117:65:decimal', stdlib.UInt_max, '5'));
                const v531 = stdlib.safeMod(v530, stdlib.checkedBigNumberify('./index.rsh:117:70:decimal', stdlib.UInt_max, '5'));
                const v532 = stdlib.eq(v531, stdlib.checkedBigNumberify('./index.rsh:118:25:decimal', stdlib.UInt_max, '0'));
                if (v532) {
                  
                  }
                else {
                  }
                const v537 = stdlib.gt(v531, stdlib.checkedBigNumberify('./index.rsh:124:22:decimal', stdlib.UInt_max, '0'));
                const v538 = stdlib.lt(v531, stdlib.checkedBigNumberify('./index.rsh:124:40:decimal', stdlib.UInt_max, '3'));
                const v539 = v537 ? v538 : false;
                const v541 = stdlib.gt(v531, stdlib.checkedBigNumberify('./index.rsh:126:44:decimal', stdlib.UInt_max, '2'));
                const v542 = v537 ? v541 : false;
                const v543 = v542 ? stdlib.checkedBigNumberify('./index.rsh:127:13:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:128:13:decimal', stdlib.UInt_max, '0');
                const v544 = v539 ? stdlib.checkedBigNumberify('./index.rsh:125:13:decimal', stdlib.UInt_max, '1') : v543;
                const cv457 = v544;
                const cv458 = v522;
                const cv465 = v465;
                
                await (async () => {
                  const v457 = cv457;
                  const v458 = cv458;
                  const v465 = cv465;
                  
                  if (await (async () => {
                    const v473 = stdlib.eq(v457, stdlib.checkedBigNumberify('./index.rsh:79:23:decimal', stdlib.UInt_max, '0'));
                    
                    return v473;})()) {
                    const v480 = stdlib.safeAdd(v458, v413);
                    sim_r.isHalt = false;
                    }
                  else {
                    
                    const v603 = stdlib.safeAdd(v438, stdlib.checkedBigNumberify('./index.rsh:136:15:decimal', stdlib.UInt_max, '1'));
                    const v604 = stdlib.eq(v457, stdlib.checkedBigNumberify('./index.rsh:137:18:decimal', stdlib.UInt_max, '1'));
                    let v605;
                    if (v604) {
                      const v606 = stdlib.safeAdd(v440, stdlib.checkedBigNumberify('./index.rsh:137:29:decimal', stdlib.UInt_max, '1'));
                      v605 = v606;
                      }
                    else {
                      v605 = v440;
                      }
                    const v607 = stdlib.eq(v457, stdlib.checkedBigNumberify('./index.rsh:138:18:decimal', stdlib.UInt_max, '2'));
                    let v608;
                    if (v607) {
                      const v609 = stdlib.safeAdd(v439, stdlib.checkedBigNumberify('./index.rsh:138:29:decimal', stdlib.UInt_max, '1'));
                      v608 = v609;
                      }
                    else {
                      v608 = v439;
                      }
                    const cv438 = v603;
                    const cv439 = v608;
                    const cv440 = v605;
                    const cv441 = v458;
                    const cv448 = v465;
                    
                    await (async () => {
                      const v438 = cv438;
                      const v439 = cv439;
                      const v440 = cv440;
                      const v441 = cv441;
                      const v448 = cv448;
                      
                      if (await (async () => {
                        const v452 = stdlib.lt(v438, v421);
                        
                        return v452;})()) {
                        sim_r.isHalt = false;
                        }
                      else {
                        const v610 = stdlib.gt(v440, v439);
                        const v611 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                        const v612 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                        const v613 = v610 ? v611 : v612;
                        const v614 = v613[stdlib.checkedBigNumberify('./index.rsh:143:9:array', stdlib.UInt_max, '0')];
                        const v615 = v613[stdlib.checkedBigNumberify('./index.rsh:143:9:array', stdlib.UInt_max, '1')];
                        const v616 = stdlib.safeMul(v614, v412);
                        sim_r.txns.push({
                          kind: 'from',
                          to: v411,
                          tok: undefined /* Nothing */
                          });
                        const v621 = stdlib.safeMul(v615, v412);
                        sim_r.txns.push({
                          kind: 'from',
                          to: v433,
                          tok: undefined /* Nothing */
                          });
                        const v627 = v610 ? stdlib.checkedBigNumberify('./index.rsh:148:32:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:148:36:decimal', stdlib.UInt_max, '2');
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        }})();}})();
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v515],
              tys: [ctc3, ctc0, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn8.didTimeout) {
              const txn9 = await (ctc.sendrecv({
                args: [v411, v412, v413, v421, v433, v438, v439, v440, v465, v489, v505, v515],
                evt_cnt: 0,
                funcNum: 11,
                lct: v506,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn9) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v547, time: v546, didSend: v194, from: v545 } = txn9;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v433,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc3, ctc0, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0, ctc0, ctc1, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v547, time: v546, didSend: v194, from: v545 } = txn9;
              ;
              const v548 = stdlib.addressEq(v433, v545);
              const v549 = stdlib.addressEq(v411, v545);
              const v550 = v548 ? true : v549;
              stdlib.assert(v550, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:113:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Sheldon'
                });
              ;
              stdlib.protect(ctc2, await interact.informTimeout(), {
                at: './index.rsh:51:29:application',
                fs: ['at ./index.rsh:50:9:application call to [unknown function] (defined at: ./index.rsh:50:33:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:49:28:function exp)', 'at ./index.rsh:113:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Sheldon'
                });
              
              return;
              
              }
            else {
              const {data: [v520, v521], secs: v523, time: v522, didSend: v151, from: v519 } = txn8;
              ;
              const v524 = stdlib.addressEq(v411, v519);
              stdlib.assert(v524, {
                at: './index.rsh:111:15:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Sheldon'
                });
              const v525 = stdlib.digest([ctc0, ctc0], [v520, v521]);
              const v526 = stdlib.digestEq(v489, v525);
              stdlib.assert(v526, {
                at: 'reach standard library:69:17:application',
                fs: ['at ./index.rsh:115:22:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                msg: null,
                who: 'Sheldon'
                });
              const v527 = stdlib.safeAdd(v521, stdlib.checkedBigNumberify('./index.rsh:117:41:decimal', stdlib.UInt_max, '1'));
              const v528 = stdlib.safeAdd(v505, stdlib.checkedBigNumberify('./index.rsh:117:60:decimal', stdlib.UInt_max, '1'));
              const v529 = stdlib.safeSub(v527, v528);
              const v530 = stdlib.safeAdd(v529, stdlib.checkedBigNumberify('./index.rsh:117:65:decimal', stdlib.UInt_max, '5'));
              const v531 = stdlib.safeMod(v530, stdlib.checkedBigNumberify('./index.rsh:117:70:decimal', stdlib.UInt_max, '5'));
              const v532 = stdlib.eq(v531, stdlib.checkedBigNumberify('./index.rsh:118:25:decimal', stdlib.UInt_max, '0'));
              if (v532) {
                stdlib.protect(ctc2, await interact.seeOutcomeDraw(), {
                  at: './index.rsh:120:34:application',
                  fs: ['at ./index.rsh:119:13:application call to [unknown function] (defined at: ./index.rsh:119:37:function exp)'],
                  msg: 'seeOutcomeDraw',
                  who: 'Sheldon'
                  });
                
                }
              else {
                }
              const v537 = stdlib.gt(v531, stdlib.checkedBigNumberify('./index.rsh:124:22:decimal', stdlib.UInt_max, '0'));
              const v538 = stdlib.lt(v531, stdlib.checkedBigNumberify('./index.rsh:124:40:decimal', stdlib.UInt_max, '3'));
              const v539 = v537 ? v538 : false;
              const v541 = stdlib.gt(v531, stdlib.checkedBigNumberify('./index.rsh:126:44:decimal', stdlib.UInt_max, '2'));
              const v542 = v537 ? v541 : false;
              const v543 = v542 ? stdlib.checkedBigNumberify('./index.rsh:127:13:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:128:13:decimal', stdlib.UInt_max, '0');
              const v544 = v539 ? stdlib.checkedBigNumberify('./index.rsh:125:13:decimal', stdlib.UInt_max, '1') : v543;
              const cv457 = v544;
              const cv458 = v522;
              const cv465 = v465;
              
              v457 = cv457;
              v458 = cv458;
              v465 = cv465;
              
              txn5 = txn8;
              continue;}
            
            }
          
          }
        
        }
      stdlib.protect(ctc2, await interact.seeOutcomeRounds(v457, v421), {
        at: './index.rsh:132:32:application',
        fs: ['at ./index.rsh:131:9:application call to [unknown function] (defined at: ./index.rsh:131:33:function exp)'],
        msg: 'seeOutcomeRounds',
        who: 'Sheldon'
        });
      
      const v603 = stdlib.safeAdd(v438, stdlib.checkedBigNumberify('./index.rsh:136:15:decimal', stdlib.UInt_max, '1'));
      const v604 = stdlib.eq(v457, stdlib.checkedBigNumberify('./index.rsh:137:18:decimal', stdlib.UInt_max, '1'));
      let v605;
      if (v604) {
        const v606 = stdlib.safeAdd(v440, stdlib.checkedBigNumberify('./index.rsh:137:29:decimal', stdlib.UInt_max, '1'));
        v605 = v606;
        }
      else {
        v605 = v440;
        }
      const v607 = stdlib.eq(v457, stdlib.checkedBigNumberify('./index.rsh:138:18:decimal', stdlib.UInt_max, '2'));
      let v608;
      if (v607) {
        const v609 = stdlib.safeAdd(v439, stdlib.checkedBigNumberify('./index.rsh:138:29:decimal', stdlib.UInt_max, '1'));
        v608 = v609;
        }
      else {
        v608 = v439;
        }
      const cv438 = v603;
      const cv439 = v608;
      const cv440 = v605;
      const cv441 = v458;
      const cv448 = v465;
      
      v438 = cv438;
      v439 = cv439;
      v440 = cv440;
      v441 = cv441;
      v448 = cv448;
      
      txn3 = txn5;
      continue;
      
      }
    const v610 = stdlib.gt(v440, v439);
    const v611 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v612 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v613 = v610 ? v611 : v612;
    const v614 = v613[stdlib.checkedBigNumberify('./index.rsh:143:9:array', stdlib.UInt_max, '0')];
    const v615 = v613[stdlib.checkedBigNumberify('./index.rsh:143:9:array', stdlib.UInt_max, '1')];
    const v616 = stdlib.safeMul(v614, v412);
    ;
    const v621 = stdlib.safeMul(v615, v412);
    ;
    const v627 = v610 ? stdlib.checkedBigNumberify('./index.rsh:148:32:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:148:36:decimal', stdlib.UInt_max, '2');
    stdlib.protect(ctc2, await interact.seeOutcome(v627), {
      at: './index.rsh:151:24:application',
      fs: ['at ./index.rsh:150:7:application call to [unknown function] (defined at: ./index.rsh:150:31:function exp)'],
      msg: 'seeOutcome',
      who: 'Sheldon'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAVAAFwIAIICwUoMAcJWGBomAGgAQN4BDgmAwEAAQEAIjUAMRhBBpAqZEkiWzUBIQVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEKDEACiUkhCwxAAWxJgQoMQAESSSEGDEAAViEGEkQhBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzggNf+ABOPZNjWwMgY0AyEQWw9ENP8xABI0A1cAIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgWmSCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNXACA1/0k1BUkiWzX+IQVbNf2ABJOl9jw0/hZQNP0WULAyBjQDIRBbDEQ0/zEAEkQ0A1d4IDT+FjT9FlABEkQ0/SMINAMhD1sjCAkhBwghBxhJNfwiDTX7NP80AyVbNAMhCFs0AyEJWzQDVzggNAMhDFs0AyENWzQDIQ5bIiEENPs0/CEEDRBNIzT7NPwhEQwQTTIGNAMkW0IETEghCzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABKIFZo6wMgY0AyEPWw9ENANXOCAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgSeSSEFDEAAvEghCzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSkpXACA1/yVbNf4hCFs1/SEJWzX8VzggNfshDFs1+iENWzX5IQ5bNfgkWzX3V3ggNfZJNQUXNfWABC/a6R009RZQsDIGNAMhD1sMRDT7MQASRDIGNP0INfQ0/zT+FlA0/RZQNPwWUDT7UDT6FlA0+RZQNPgWUDT3FlA09lA09RZQNPQWUChLAVcAf2cpSwFXfylnSCEGNQEyBjUCQgP3SCEKNAESRDQESSISTDQCEhFEKGQpZFBJNQNXOCA1/4AE4huzqbAyBjQDIRJbD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMkW7III7IQNP+yB7NCA4hJIQQMQAFZSSETDEABEkmBBgxAALFIIQo0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpJVwAgNf8lWzX+IQhbNf0hCVs1/Fc4IDX7IQxbNfohDVs1+SEOWzX4JFs190k1BTX2gARp7js+NPZQsDIGNAMhElsMRDT/MQASRDIGNP0INfU0/zT+FlA0/RZQNPwWUDT7UDT6FlA0+RZQNPgWUDT3FlA09lA09RZQKEsBVwB/ZylLAVd/IWdIIQs1ATIGNQJCAt4hExJEIQc0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gASRJzTzsDT/MQASRDT/NAMlWzQDIQhbNAMhCVs0A1c4IDQDIQxbNAMhDVs0AyEOWyIyBjQDJFtCAcMhBBJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEUWw9EsSKyATQDJVuyCCOyEDQDVwAgsgezQgIoSSMMQABOSCM0ARJENARJIhJMNAISEUQoZEk1AyVbNf+ABJqLkXSwMgY0AyEUWwxENP+IAmE0A1cAIDT/NAMhCFs0AyEJWzEAIiIiMgY0/0kIQgCFSIGgjQaIAjoiNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQVbNf6BEFs1/YAE93ETTTT/FlA0/hZQNP0WULA0/4gB/zT9IQQYIhJBAAk0/SMJNfxCAAQ0/TX8MgY0/gg1+zEANP8WUDT+FlA0/BZQNPsWUChLAVcAQGdIIzUBMgY1AkIBazX/Nf41/TX8Nfs1+jX5Nfg19zX2NPs0+QxBADQ09jT3FlA0+BZQNPkWUDT6UDT7FlA0/BZQNP0WUDT/FlAoSwFXAHhnSCEHNQEyBjUCQgEbgBAAAAAAAAAAAAAAAAAAAAACgBAAAAAAAAAAAgAAAAAAAAAANP00/A1NNfWxIrIBNPUiWzT3C7III7IQNPayB7OxIrIBNPUhBVs09wuyCCOyEDT6sgezQgClNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT9IhJBAEY0/jT3CDX0NPU09hZQNPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/xZQNPQWUChLAVcAf2cpSwFXfwFnSCEKNQEyBjUCQgBeNP0jEkEACTT8Iwg19EIABDT8NfQ0/SEEEkEACTT7Iwg180IABDT7NfM09TT2NPc0+DT5NPojCDTzNPQ0/jT/Qv6xMRkhBxJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCERMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
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
                "name": "v412",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v413",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v414",
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
                "internalType": "uint256",
                "name": "v412",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v413",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v414",
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
                "internalType": "uint256",
                "name": "v520",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v521",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
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
    "name": "_reach_e11",
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
                "name": "v489",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
    "name": "_reach_e7",
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
                "name": "v505",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
    "name": "_reach_e9",
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
                "internalType": "uint256",
                "name": "v520",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v521",
                "type": "uint256"
              }
            ],
            "internalType": "struct T20",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T21",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
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
    "name": "_reach_m11",
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
                "name": "v489",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
    "name": "_reach_m7",
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
                "name": "v505",
                "type": "uint256"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
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
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620028f9380380620028f98339810160408190526200002691620003f3565b60008080554360035560408051808201825282815260208082019390935281513381528451818501528484015180518285015293840151606082015292909101516080830152907fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69060a00160405180910390a1602082015151620000af9034146007620001ef565b6000620000cc83602001516040015160026200021a60201b60201c565b1415620000f157602082015160400151620000e99060016200026c565b8152620000fd565b60208201516040015181525b6200011743836020015160200151620002c560201b60201c565b8160200181815250506200015c6040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b3380825260208481018051518285019081529051820151604080860191825286516060808801918252888601516080808a019182526001600081905543905584518089019990995295518885015293519087015251928501929092525160a0808501919091528151808503909101815260c090930190528151620001e592600292019062000316565b5050505062000535565b81620002165760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b600081620002595760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b60448201526064016200020d565b6200026582846200048a565b9392505050565b6000826200027b8382620004c3565b9150811115620002bf5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016200020d565b92915050565b600082620002d48382620004dd565b9150811015620002bf5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016200020d565b8280546200032490620004f8565b90600052602060002090601f01602090048101928262000348576000855562000393565b82601f106200036357805160ff191683800117855562000393565b8280016001018555821562000393579182015b828111156200039357825182559160200191906001019062000376565b50620003a1929150620003a5565b5090565b5b80821115620003a15760008155600101620003a6565b604051606081016001600160401b0381118282101715620003ed57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200040757600080fd5b604080519081016001600160401b03811182821017156200043857634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200045257600080fd5b6200045c620003bc565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600082620004a857634e487b7160e01b600052601260045260246000fd5b500690565b634e487b7160e01b600052601160045260246000fd5b600082821015620004d857620004d8620004ad565b500390565b60008219821115620004f357620004f3620004ad565b500190565b600181811c908216806200050d57607f821691505b602082108114156200052f57634e487b7160e01b600052602260045260246000fd5b50919050565b6123b480620005456000396000f3fe6080604052600436106100a55760003560e01c80638b9fadc8116100615780638b9fadc814610133578063980b6eac14610146578063a7661d5414610159578063ab53f2c61461016c578063bf2c5b241461018f578063de736998146101a257005b80631e93b0f1146100ae57806328adf537146100d257806329bdceb9146100e55780632c10a159146100f85780637eea518c1461010b578063832307571461011e57005b366100ac57005b005b3480156100ba57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100e0366004611c17565b6101b5565b6100ac6100f3366004611c41565b61048f565b6100ac610106366004611c41565b610738565b6100ac610119366004611c41565b6108e0565b34801561012a57600080fd5b506001546100bf565b6100ac610141366004611c41565b610a5e565b6100ac610154366004611c41565b610bfb565b6100ac610167366004611c41565b610e64565b34801561017857600080fd5b50610181611026565b6040516100c9929190611c5d565b6100ac61019d366004611c41565b6110c3565b6100ac6101b0366004611c41565b61121e565b6101c5600b60005414602b6113b7565b6101df813515806101d857506001548235145b602c6113b7565b6000808055600280546101f190611cba565b80601f016020809104026020016040519081016040528092919081815260200182805461021d90611cba565b801561026a5780601f1061023f5761010080835404028352916020019161026a565b820191906000526020600020905b81548152906001019060200180831161024d57829003601f168201915b50505050508060200190518101906102829190611dd9565b60408051808201909152600080825260208201529091506102ab8261016001514310602d6113b7565b604080513381528435602080830191909152850135818301529084013560608201527f3355ea27a9de0a9476dc454c9992d9c8728dffbd2709023aabe4dab2336b9a6a9060800160405180910390a1610306341560286113b7565b815161031e906001600160a01b0316331460296113b7565b6040805161036b9161034491602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c83610120015114602a6113b7565b6103a661039f610398610383604087013560016113dd565b61039386610140015160016113dd565b611430565b60056113dd565b600561147f565b808252151560208201526103b86119e3565b825181516001600160a01b03918216905260208085015183518201526040808601518451909101526060808601518451909101526080808601518451931692019190915260a08085015183519091015260c08085015183519091015260e08085015183519091015282015161042e576000610434565b81516003115b61046057816020015161044857600061044e565b81516002105b610459576000610463565b6002610463565b60015b6020808301805192909252815143910152610100840151905160400152610489816114cd565b50505050565b61049f60096000541460206113b7565b6104b9813515806104b257506001548235145b60216113b7565b6000808055600280546104cb90611cba565b80601f01602080910402602001604051908101604052809291908181526020018280546104f790611cba565b80156105445780601f1061051957610100808354040283529160200191610544565b820191906000526020600020905b81548152906001019060200180831161052757829003601f168201915b505050505080602001905181019061055c9190611e81565b90506105746040518060200160405280600081525090565b610586826101400151431060226113b7565b7f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de896833846040516105b7929190611f1e565b60405180910390a16105cb3415601e6113b7565b60808201516105e6906001600160a01b03163314601f6113b7565b6105f44383604001516113dd565b81600001818152505061067360405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151908501526080808701519093169284019290925260a0808601519084015260c0808601519084015260e0808601519084015261010080860151908401526101208086015190840152858101356101408401528351610160840152600b60005543600155905161070d91839101611f45565b60405160208183030381529060405260029080519060200190610731929190611a76565b5050505050565b61074860016000541460096113b7565b6107628135158061075b57506001548235145b600a6113b7565b60008080556002805461077490611cba565b80601f01602080910402602001604051908101604052809291908181526020018280546107a090611cba565b80156107ed5780601f106107c2576101008083540402835291602001916107ed565b820191906000526020600020905b8154815290600101906020018083116107d057829003601f168201915b50505050508060200190518101906108059190611fe4565b905061081881608001514310600b6113b7565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13383604051610849929190612067565b60405180910390a16108628160200151341460086113b7565b61086a611afa565b815181516001600160a01b0390911690526020808301805183518301526040808501518451820152606080860151855182015284513360809182015284860180516000908190528151909601869052805190930194909452815143910152905190519080019101526108db8161172d565b505050565b6108f0600160005414600d6113b7565b61090a8135158061090357506001548235145b600e6113b7565b60008080556002805461091c90611cba565b80601f016020809104026020016040519081016040528092919081815260200182805461094890611cba565b80156109955780601f1061096a57610100808354040283529160200191610995565b820191906000526020600020905b81548152906001019060200180831161097857829003601f168201915b50505050508060200190518101906109ad9190611fe4565b90506109c18160800151431015600f6113b7565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516109f2929190612067565b60405180910390a1610a063415600c6113b7565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610a43573d6000803e3d6000fd5b5060008080556001819055610a5a90600290611b63565b5050565b610a6e600b6000541460306113b7565b610a8881351580610a8157506001548235145b60316113b7565b600080805560028054610a9a90611cba565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac690611cba565b8015610b135780601f10610ae857610100808354040283529160200191610b13565b820191906000526020600020905b815481529060010190602001808311610af657829003601f168201915b5050505050806020019051810190610b2b9190611dd9565b9050610b4081610160015143101560326113b7565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a5503383604051610b71929190612067565b60405180910390a1610b853415602e6113b7565b6080810151610bb9906001600160a01b03163314610baf5781516001600160a01b03163314610bb2565b60015b602f6113b7565b80608001516001600160a01b03166108fc8261010001519081150290604051600060405180830381858888f19350505050158015610a43573d6000803e3d6000fd5b610c0b60076000541460166113b7565b610c2581351580610c1e57506001548235145b60176113b7565b600080805560028054610c3790611cba565b80601f0160208091040260200160405190810160405280929190818152602001828054610c6390611cba565b8015610cb05780601f10610c8557610100808354040283529160200191610cb0565b820191906000526020600020905b815481529060010190602001808311610c9357829003601f168201915b5050505050806020019051810190610cc891906120a4565b9050610ce06040518060200160405280600081525090565b610cf2826101200151431060186113b7565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c3384604051610d23929190611f1e565b60405180910390a1610d37341560146113b7565b8151610d4f906001600160a01b0316331460156113b7565b610d5d4383604001516113dd565b816000018181525050610dd560405180610160016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b0390811682526020808501518184015260408086015181850152606080870151908501526080808701519093169284019290925260a0808601519084015260c0808601519084015260e080860151908401526101008086015190840152858101356101208401528351610140840152600960005543600155905161070d91839101612139565b610e7460056000541460126113b7565b610e8e81351580610e8757506001548235145b60136113b7565b600080805560028054610ea090611cba565b80601f0160208091040260200160405190810160405280929190818152602001828054610ecc90611cba565b8015610f195780601f10610eee57610100808354040283529160200191610f19565b820191906000526020600020905b815481529060010190602001808311610efc57829003601f168201915b5050505050806020019051810190610f3191906121cc565b90507faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610f64929190612067565b60405180910390a1610f78341560106113b7565b8051610f90906001600160a01b0316331460116113b7565b610f986119e3565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551909101526080808601518551941693019290925260a08085015184519091015260c08085015184519091015260e0808501518451909101528083018051600090528051439201919091526101008401519051909101526108db816114cd565b60006060600054600280805461103b90611cba565b80601f016020809104026020016040519081016040528092919081815260200182805461106790611cba565b80156110b45780601f10611089576101008083540402835291602001916110b4565b820191906000526020600020905b81548152906001019060200180831161109757829003601f168201915b50505050509050915091509091565b6110d3600760005414601b6113b7565b6110ed813515806110e657506001548235145b601c6113b7565b6000808055600280546110ff90611cba565b80601f016020809104026020016040519081016040528092919081815260200182805461112b90611cba565b80156111785780601f1061114d57610100808354040283529160200191611178565b820191906000526020600020905b81548152906001019060200180831161115b57829003601f168201915b505050505080602001905181019061119091906120a4565b90506111a5816101200151431015601d6113b7565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb33836040516111d6929190612067565b60405180910390a16111ea341560196113b7565b6080810151610bb9906001600160a01b031633146112145781516001600160a01b03163314611217565b60015b601a6113b7565b61122e60096000541460256113b7565b6112488135158061124157506001548235145b60266113b7565b60008080556002805461125a90611cba565b80601f016020809104026020016040519081016040528092919081815260200182805461128690611cba565b80156112d35780601f106112a8576101008083540402835291602001916112d3565b820191906000526020600020905b8154815290600101906020018083116112b657829003601f168201915b50505050508060200190518101906112eb9190611e81565b905061130081610140015143101560276113b7565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051611331929190612067565b60405180910390a1611345341560236113b7565b6080810151611379906001600160a01b0316331461136f5781516001600160a01b03163314611372565b60015b60246113b7565b80516101008201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610a43573d6000803e3d6000fd5b81610a5a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826113ea838261226b565b915081101561142a5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b60448201526064016113d4565b92915050565b60008261143d8382612283565b915081111561142a5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b60448201526064016113d4565b6000816114bc5760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b60448201526064016113d4565b6114c682846122b0565b9392505050565b6114f160405180606001604052806000815260200160008152602001600081525090565b602082015151611622576115158260200151602001518360000151604001516113dd565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091528251516001600160a01b039081168252835160209081015181840152845160409081015181850152855160609081015190850152855160809081015190931692840192909252845160a09081015190840152845160c09081015190840152845160e0908101519084015280850151820151610100840152835161012084015260076000554360015590516115fe918391016122c4565b60405160208183030381529060405260029080519060200190610489929190611a76565b6020820151516001141561164b57815160e001516116419060016113dd565b6020820152611657565b815160e0015160208201525b6020820151516002141561168057815160c001516116769060016113dd565b604082015261168c565b815160c0015160408201525b611694611afa565b82515181516001600160a01b039182169052835160209081015183519091015283516040908101518351909101528351606090810151835190910152835160809081015183519216910152825160a001516116f09060016113dd565b60208083018051929092526040808501518351830152848201518351820152858201805190920151835160600152905101519051608001526108db815b611735611ba0565b8151606001516020830151511015611894576117a860405180610120016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519085015285516080908101519093168385015281860180515160a0860152805183015160c0860152805182015160e0860152519092015161010084015260056000554360015590516115fe9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151908301526080808401519091169082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b8051600290819052815160006020918201819052818401805191909152518101919091528281015190810151604090910151116118d55780602001516118d8565b80515b604082018190528251805191516020909101516001600160a01b03909216916108fc9161190491611984565b6040518115909202916000818181858888f1935050505015801561192c573d6000803e3d6000fd5b508160000151608001516001600160a01b03166108fc61195c836040015160200151856000015160200151611984565b6040518115909202916000818181858888f19350505050158015610a43573d6000803e3d6000fd5b60008115806119a85750828261199a818361234b565b92506119a6908361236a565b145b61142a5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b60448201526064016113d4565b6040518060400160405280611a4860405180610100016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b8152602001611a7160405180606001604052806000815260200160008152602001600081525090565b905290565b828054611a8290611cba565b90600052602060002090601f016020900481019282611aa45760008555611aea565b82601f10611abd57805160ff1916838001178555611aea565b82800160010185558215611aea579182015b82811115611aea578251825591602001919060010190611acf565b50611af6929150611c02565b5090565b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c08201929092529081908152602001611a716040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b508054611b6f90611cba565b6000825580601f10611b7f575050565b601f016020900490600052602060002090810190611b9d9190611c02565b50565b6040805160a08101909152600060608201818152608083019190915281908152602001611be0604051806040016040528060008152602001600081525090565b8152602001611a71604051806040016040528060008152602001600081525090565b5b80821115611af65760008155600101611c03565b600060608284031215611c2957600080fd5b50919050565b600060408284031215611c2957600080fd5b600060408284031215611c5357600080fd5b6114c68383611c2f565b82815260006020604081840152835180604085015260005b81811015611c9157858101830151858201606001528201611c75565b81811115611ca3576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680611cce57607f821691505b60208210811415611c2957634e487b7160e01b600052602260045260246000fd5b604051610180810167ffffffffffffffff81118282101715611d2157634e487b7160e01b600052604160045260246000fd5b60405290565b604051610160810167ffffffffffffffff81118282101715611d2157634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611d2157634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff81118282101715611d2157634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114611dd457600080fd5b919050565b60006101808284031215611dec57600080fd5b611df4611cef565b611dfd83611dbd565b8152602083015160208201526040830151604082015260608301516060820152611e2960808401611dbd565b608082015260a0838101519082015260c0808401519082015260e08084015190820152610100808401519082015261012080840151908201526101408084015190820152610160928301519281019290925250919050565b60006101608284031215611e9457600080fd5b611e9c611d27565b611ea583611dbd565b8152602083015160208201526040830151604082015260608301516060820152611ed160808401611dbd565b608082015260a0838101519082015260c0808401519082015260e0808401519082015261010080840151908201526101208084015190820152610140928301519281019290925250919050565b6001600160a01b0383168152606081016114c6602083018480358252602090810135910152565b81516001600160a01b0316815261018081016020830151602083015260408301516040830152606083015160608301526080830151611f8f60808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525061016080840151818401525092915050565b600060a08284031215611ff657600080fd5b60405160a0810181811067ffffffffffffffff8211171561202757634e487b7160e01b600052604160045260246000fd5b60405261203383611dbd565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461209557600080fd5b80604085015250509392505050565b600061014082840312156120b757600080fd5b6120bf611d59565b6120c883611dbd565b81526020830151602082015260408301516040820152606083015160608201526120f460808401611dbd565b608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b81516001600160a01b031681526101608101602083015160208301526040830151604083015260608301516060830152608083015161218360808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525061014080840151818401525092915050565b600061012082840312156121df57600080fd5b6121e7611d8b565b6121f083611dbd565b815260208301516020820152604083015160408201526060830151606082015261221c60808401611dbd565b608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561227e5761227e612255565b500190565b60008282101561229557612295612255565b500390565b634e487b7160e01b600052601260045260246000fd5b6000826122bf576122bf61229a565b500690565b81516001600160a01b031681526101408101602083015160208301526040830151604083015260608301516060830152608083015161230e60808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b600081600019048311821515161561236557612365612255565b500290565b6000826123795761237961229a565b50049056fea26469706673582212207c148b62b1c9c13fdac17b2a98834c5b32a963612de67cd3600db045c618aa7264736f6c634300080c0033`,
  BytecodeLen: 10489,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:61:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:69:12:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:146:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:75:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:80:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:91:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:93:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:102:16:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:104:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:113:22:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Leonard": Leonard,
  "Sheldon": Sheldon
  };
export const _APIs = {
  };
