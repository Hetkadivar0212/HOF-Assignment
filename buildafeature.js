// Exchange rate: 1 USD to 80 INR
const exchangeRate = 80;

// Original object with items and prices in USD
const itemsAndPricesUSD = {
    laptop: 1000,
    phone: 500,
    camera: 800,
    headphones: 100
};

// Function to convert USD to INR
function convertToINR(priceUSD) {
    return priceUSD * exchangeRate;
}

// Use map to create a new object with prices converted to INR
const itemsAndPricesINR = Object.fromEntries(
    Object.entries(itemsAndPricesUSD).map(([item, priceUSD]) => [item, convertToINR(priceUSD)])
);

// Display the original and converted prices
console.log("Original prices in USD:", itemsAndPricesUSD);
console.log("Converted prices in INR:", itemsAndPricesINR);