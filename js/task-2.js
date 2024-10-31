function getShippingMessage(country, price, deliveryFee) {
    price = Number(price);
    deliveryFee = Number(deliveryFee)
    const totalPrice = `Shipping to ${country} will cost ${price + deliveryFee} credits!`;
    return totalPrice;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));