'reach 0.1'

const common = {
  getChallenge:Fun([], Int),
  seeResult:Fun([Int], Null)
}

export const main = Reach.App(() => {
    const Pat = Participant('Pat', { 
        // Pat's
        ...common
     })
     const Vanna = Participant('Vanna', { 
        // Vanna's
        ...common
      })
    init();

    Pat.only(() => {
      const challengePat = declassify(interact.getChallenge());
    });
    Pat.publish(challengePat);
    commit();

    Vanna.only(() => {
      const challengeVanna = declassify(interact.getChallenge());

    });
    Vanna.publish(challengeVanna);
    commit();
})