'reach 0.1'

const common = {
    seePrice:Fun([], Int),
    getDescription:Fun([], Bytes(6))
}
export const main = Reach.App(() => {
    const Creator = Participant('Creator', { 
        //Creator's
        ...common,
     })
     const Bidder = Participant('Bidder', { 
        //Bidder's
        ...common,
      })
    const Buyer = Participant('Buyer', { 
        //Buyer's
        ...common,
     })
     init();

     Bidder.only(() => {
        const price = declassify(interact.seePrice());
     });
     Bidder.publish(price);
     commit();

     Buyer.only(() => {
        const description = declassify(interact.getDescription());
     });
     Buyer.publish(description, payment)
     .pay(payment)
     commit();
})