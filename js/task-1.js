function makeTransaction(quantity, pricePerDroid) {
    quantity = Number(quantity);
    pricePerDroid = Number(pricePerDroid)
    const totalPrice = `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
    return totalPrice;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));