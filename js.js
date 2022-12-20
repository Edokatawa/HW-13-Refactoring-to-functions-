const products = [
    {name: 'Apple', price: 20},
    {name: 'Cherry', price: 10},
    {name: 'Banana', price: 15},
    {name: 'Orange', price: 25},
    {name: 'Lemon', price: 17},
    {name: 'Pear', price: 30}
];

const GRN_PER_DOLLAR = 41;
const DISCOUNT_START_FROM = 10000;
const DISCOUNT = 20;

const listProducts = function(arr) {
    for (let prodId = 0; prodId < arr.length;prodId++) {
        console.log(`${prodId + 1} ${arr[prodId].name} ${arr[prodId].price}`);
    }
};

const getNumberIndexProducts = function(arrProducts) {
    let numb = prompt('Write product number:');

    if (numb === null) {
        return;
    }
    numb--;
    if ((numb < 0) || (numb > arrProducts.length - 1) || (isNaN(numb))) {
        return getNumberIndexProducts(arrProducts);
    }
    return numb;
};

const getSelectedProduct = function(arrProd, prodIndex) {
    if (typeof prodIndex === 'number') {
        return arrProd[prodIndex];
    }
};

const calculationPriceAndDiscount = function(prodCount, selectProd) {
    if (typeof prodCount === 'number') {
        const totalProdPrice = prodCount * selectProd.price;

        console.log(`Total price: $${totalProdPrice}`);

        if (totalProdPrice * GRN_PER_DOLLAR > DISCOUNT_START_FROM) {
            console.log(`Congrats, you get a discount ${DISCOUNT}%`);
            console.log(`Your total price is: ${totalProdPrice * (100 - DISCOUNT) / 100}`);
        }
    }
};

const totalProductPrice = function(prodIndex, selectProd) {
    if (typeof prodIndex === 'number') {
        let  prodCount = prompt('Write product count:');
    
        if (prodCount === null) {
            return;
        }
        prodCount = +prodCount;
        if (prodCount <= 0 || isNaN(prodCount)) {
            return totalProductPrice(prodIndex);
        }

        return calculationPriceAndDiscount(prodCount, selectProd);
    }
};


listProducts(products);
const prodNum = getNumberIndexProducts(products);
const selectProd = getSelectedProduct(products, prodNum);
console.log(selectProd);
totalProductPrice(prodNum, selectProd);


