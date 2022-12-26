const products = [
    {name: "Apple", price: 20},
    {name: "Cherry", price: 10},
    {name: "Banana", price: 15},
    {name: "Orange", price: 25},
    {name: "Lemon", price: 17},
    {name: "Pear", price: 30},
];

const GRN_PER_DOLLAR = 41;
const DISCOUNT_START_FROM = 10000;
const DISCOUNT = 20;

listProducts(products);
const prodNum = getNumberIndexProducts(products.length);
const selectProd = typeof prodNum === "number" ? products[prodNum] : null;
console.log(selectProd);
const prodCount = getCountProducts(selectProd);
totalProductPrice(prodNum, selectProd, prodCount);
