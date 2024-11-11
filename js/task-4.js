function getShippingCost(country) {
    switch(country){ 
    case `Australia`:
        const deliveryAustralia = `Shipping to ${country} will cost 170 credits`;
        return deliveryAustralia;
        break;
    
    case `China`:
        const deliveryChina = `Shipping to ${country} will cost 100 credits`;
        return deliveryChina;
        break;

    case `Chile`:
        const deliveryChile = `Shipping to ${country} will cost 250 credits`;
        return deliveryChile;
        break;

    case `Jamaica`:
        const deliveryJamaica = `Shipping to ${country} will cost 120 credits`;
        return deliveryJamaica;
        break;
    
    default:
        const noDelivery = `Sorry, there is no delivery to your country`;
        return noDelivery
   }
   }


console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"