"reach 0.1";

const common = {
  timeExpired: Fun([], Null),
};
export const main = Reach.App(() => {
  const Alice = Participant("Alice", {
    ...common,
    deadline: UInt,
  });
  const Eve = Participant("Eve", {
    ...common,
    callLog: UInt,
  });
  init();

  const timeExpiration = () => {
    each([Alice, Eve], () => interact.timeExpired());
  };

  Alice.only(() => {
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(deadline);
  commit();

  Eve.only(() => {
    const callLog = declassify(interact.callLog);
  });
  Eve.publish(callLog).timeout(relativeTime(deadline), () =>
    closeTo(Alice, timeExpiration)
  );
  commit();

  exit();
});
