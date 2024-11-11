function makeTransaction(quantity, pricePerDroid, customerCredits) {
    quantity = Number(quantity);
    pricePerDroid = Number(pricePerDroid);
    customerCredits = Number(customerCredits);
    const totalPrice = quantity * pricePerDroid;
    const operationResult = totalPrice <= customerCredits ? `You ordered ${quantity} droids worth ${totalPrice} credits!` : `Insufficient funds!`
    return operationResult;
    }


console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(3, 1000, 15000));
console.log(makeTransaction(10, 5000, 8000));
console.log(makeTransaction(8, 2000, 10000));
console.log(makeTransaction(10, 500, 5000));