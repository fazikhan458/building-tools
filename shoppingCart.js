// Exporting module
console.log('Exporting module');

const shippingCost = 10;

export const cart = []; //exporting empty cart array to check live connection of import and export

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

// export const addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`${quantity} ${product} added to cart`);
// };

// const totalPrice = 237,
//   totalQuantity = 23;
// export { totalPrice, totalQuantity }; //exporting multiple values:

// const shopNewName = 'Imtiaz';
// export { shopNewName };

// const newCity = 'karachi';
// export { newCity as city }; //exporting values with different name:
