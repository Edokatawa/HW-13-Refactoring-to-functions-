const listProducts = arrProducts => {
    for (let prodId = 0; prodId < arrProducts.length; prodId++) {
        console.log(
            `${prodId + 1} ${arrProducts[prodId].name} ${
                arrProducts[prodId].price
            }`
        );
    }
};

const getNumberIndexProducts = arrProductsLength => {
    let numb = prompt("Write product number:");

    if (numb === null) {
        return null;
    }
    numb--;
    if (numb < 0 || numb > arrProductsLength - 1 || isNaN(numb)) {
        return getNumberIndexProducts(arrProductsLength);
    }
    return numb;
};

const getCountProducts = selectProducts => {
    if (typeof +selectProducts === "number") {
        let prodCount = prompt("Write product count:");

        if (prodCount === null) {
            return null;
        }
        prodCount = +prodCount;
        if (prodCount <= 0 || isNaN(prodCount)) {
            return getCountProducts();
        }

        return prodCount;
    }
};

const calculationDiscount = totalProductPrice => {
    if (totalProductPrice * GRN_PER_DOLLAR > DISCOUNT_START_FROM) {
        console.log(`Congrats, you get a discount ${DISCOUNT}%`);
        console.log(
            `Your total price is: $${
                (totalProductPrice * (100 - DISCOUNT)) / 100
            }`
        );
    }
};

const totalProductPrice = (prodIndex, selectProd, prodCount) => {
    if (typeof prodIndex === "number" && typeof prodCount === "number") {
        const totalProductPrice = prodCount * selectProd.price;

        console.log(`Total price: $${totalProductPrice}`);

        return calculationDiscount(totalProductPrice);
    }
};
