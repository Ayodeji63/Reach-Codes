"reach 0.1";

// Deployer
// 1. Start Game
// 2. See balance
// 3. Randomly Select a winner

// Apis
// 1. Pay to the contract
// 2. Give them an id
// 3.see result

export const main = Reach.App(() => {
  const D = Participant("D", {
    ...hasRandom,
    winNum: Fun([], UInt),
    showBalance: Fun([UInt], Null),
    deadline: UInt,
  });
  const P = API("P", {
    joinGame: Fun(
      [UInt, UInt],
      Object({
        addr: Address,
        amt: UInt,
        id: UInt,
        num: UInt,
      })
    ),
  });
  const H = API("H", {
    checkWin: Fun([UInt], Null),
  });
  init();

  D.only(() => {
    const _winNum = interact.winNum();
    const [_commitNum, _saltNum] = makeCommitment(interact, _winNum);
    const commitNum = declassify(_commitNum);
    const saltNum = declassify(_saltNum);
    const deadline = declassify(interact.deadline);
  });
  D.publish(commitNum, saltNum, deadline);
  commit();
  const end = lastConsensusTime() + deadline;
  D.publish();
  const players = new Map(
    Address,
    Object({
      addr: Address,
      amt: UInt,
      id: UInt,
      num: UInt,
    })
  );
  const pNum = new Map(Address, UInt);

  const [count, wagers] = parallelReduce([1, 0])
    .invariant(balance() == wagers)
    .while(lastConsensusTime() <= end)
    .api_(P.joinGame, (num, wager) => {
      return [
        wager,
        (ret) => {
          D.interact.showBalance(balance());
          const who = this;
          players[who] = {
            addr: who,
            amt: wager,
            id: count,
            num: num,
          };
          pNum[who] = num;
          ret(
            fromSome(players[who], {
              addr: who,
              amt: wager,
              id: count,
              num: num,
            })
          );
          return [count + 1, wagers + wager];
        },
      ];
    });

  transfer(balance()).to(D);
  commit();
  exit();
});
