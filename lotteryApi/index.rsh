"reach 0.1";

// Deployer
// 1. Start Game
// 2. See balance
// 3. Randomly Select a winner

// Apis
// 1. Pay to the contract
// 2. Give them an id
// 3.see result

const myFromMaybe = (m) =>
  fromMaybe(
    m,
    () => 0,
    (x) => x
  );

export const main = Reach.App(() => {
  const D = Participant("D", {
    ...hasRandom,
    winNum: Fun([], UInt),
    showBalance: Fun([UInt], Null),
    deadline: UInt,
    seeWinner: Fun([], Null),
    showWinner: Fun([Address, UInt], Null),
  });
  const P = API("P", {
    joinGame: Fun(
      [UInt, UInt],
      Object({
        addr: Address,
        amt: UInt,
        pNum: UInt,
      })
    ),
  });
  const H = API("H", {
    checkWin: Fun([Address], UInt),
  });
  init();

  D.only(() => {
    const _winNum = interact.winNum();
    const [_commitNum, _saltNum] = makeCommitment(interact, _winNum);
    const commitNum = declassify(_commitNum);
    const deadline = declassify(interact.deadline);
  });
  D.publish(commitNum, deadline);
  commit();
  const end = lastConsensusTime() + deadline;
  D.publish();
  const players = new Map(
    Address,
    Object({
      addr: Address,
      amt: UInt,
      pNum: UInt,
    })
  );
  const pNum = new Map(Address, UInt);

  const [howMany, wagers] = parallelReduce([0, 0])
    // .invariant(pNum.size() == howMany, "HowMany accurate")
    .invariant(balance() == wagers, "balance is accurate")
    .while(lastConsensusTime() <= end)
    .api_(P.joinGame, (num, wager) => {
      check(lastConsensusTime() < end, "Lottery Started");
      check(isNone(players[this]), "already registered");
      return [
        wager,
        (ret) => {
          D.interact.showBalance(balance());
          const who = this;
          players[who] = {
            addr: who,
            amt: wager,
            pNum: num,
          };
          pNum[who] = num;
          ret(
            fromSome(players[who], {
              addr: who,
              amt: wager,
              pNum: num,
            })
          );
          return [howMany + 1, wagers + wager];
        },
      ];
    })
    .timeout(absoluteTime(end), () => {
      D.publish();
      return [howMany, wagers];
    });
  commit();
  D.only(() => {
    const saltNum = declassify(_saltNum);
    const winNum = declassify(_winNum);
  });
  D.publish(saltNum, winNum);
  checkCommitment(commitNum, saltNum, winNum);

  D.interact.seeWinner();
  const [count] = parallelReduce([howMany])
    .invariant(balance() == wagers, "balance not accurate")
    .while(count > 0)
    .api_(H.checkWin, (player) => {
      check(isSome(players[player]), "not a player");
      return [
        0,
        (ret) => {
          if (winNum === pNum[this]) {
            transfer(balance()).to(player);
          }
          delete players[player];
          ret(winNum);
          D.interact.showBalance(balance());
          return [count - 1];
        },
      ];
    });
  transfer(balance()).to(D);
  commit();
  exit();
});
