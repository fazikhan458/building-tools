import 'core-js/stable';
import 'core-js/actual';
// import 'core-js/stable/array/find.js';
// import 'core-js/stable/promise';

//plyfilling async functions
import 'regenerator-runtime/runtime.js';
// "core-js":  "3.39.0",
//   "dependencies": {
//   "core-js":  "3.6.5",
//   "leaflet": "^1.9.4",
//   "lodash-es": "^4.17.21",
//   "parcel": "^2.12.0"
// }

//importing module
console.log('Importing modules');
// //lets import the other module
// //named imports:
// import add, { cart } from './shoppingCart.js'; //  import value from module: name of value has to be exactly the same as the one we are importing and put it in curly braces
// addToCart('bread', '5');
// //now it will behave as if "addToCart" was defined here
// import { totalPrice, totalQuantity } from './shoppingCart.js'; //  import mutiple values from module:
// console.log(totalPrice, totalQuantity);
// import { shopNewName as shopName } from './shoppingCart.js'; //  import values from module and giving them new name:
// console.log(shopName);
// import { city } from './shoppingCart.js'; //  import values from module which are being exported with different name:
// console.log(city);
// import * as ShoppingCart from './shoppingCart.js'; //  import all values from module:
// //we can also import all the exports of a module at the same time and then we can give it some name that we want i.e "ShoppingCart" and with capital "S" here, that's kind of the convention when we import everything into an object like this.
// // this here will create an object containing everything that is exported from the module that we will specify here. so this will then  create a namespace for all of the values exported from that module.

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.city);
// console.log(ShoppingCart.shopNewName);

// import cost from './shoppingCart.js'; //importing addToCart and empty cart array:
// add('pizza', 2);
// add('bread', 4);
// add('pasta', 7);

// console.log(cost);
// const ShoppingCart = (function () {
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const cart = [];

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };
//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };
//   return {
//     totalPrice,
//     totalQuantity,
//     cart,
//     addToCart,
//   }; //returning all the stuff that we want inside an object
// })();

// //now just like before we can access all these returned things from ShoppingCart object:

//let's pretend that we want to export something from this module.

//just like ES6 modules, in CommonJS, one file is one module.
//export:
//import
//import in commonJS module:
//to import in commonJS module we  will call a "require" function. "require" is not defined here in our browser environment but it is defined in Node.js because this is part of the CommonJS specification.

//*************************cloneDeep****************:
// "main": "script.js",
import add, { cart } from '/shoppingCart.js';
add('apples', 5);
add('pizza', 2);
console.log(cart);
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

//nested object:
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
    { product: 'pasta', quantity: 2 },
  ],
  user: {
    loggedIn: true,
  },
};
//this is a deep nested object as it has objects inside array inside object. Now let's copy it
const stateClone = Object.assign({}, state); //copying object using Object.assign method
console.log(stateClone);
//it looks exactly the same but now let's change one of the nested objects:

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const jonas = new Person('jonas');
console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));
// "build": "parcel build index.html"
console.log('abc');
// import './node_modules/core-js/stable/self.js';
