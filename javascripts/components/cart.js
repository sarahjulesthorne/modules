
import util from '../helpers/util.js';
const cart = [];
const setCart = (book) => {
cart.push(book);
};
const getCart = () => {
return cart;
};

const cartToDom = () => {

const myCart = getCart();
console.log(myCart);
  let domString = '<div class="row">';
  domString += '<h2>Cart:</h2>';
  domString += '<button id="purchase-btn" class="btn btn-secondary">Purchase</button>'
  domString += '</div><div class="row d-flex flex-wrap">';
  myCart.forEach((book) => {
    domString += `<div class="card col-2">`;
    domString += `  <img src=${book.image} class="card-img-top" alt="...">`;
    domString += `  <div class="card-body">`;
    domString += `    <h5 class="card-title">${book.title}</h5>`;
    domString += `    <p class="card-text">${book.price}</p>`;
    domString += `  </div>`;
    domString += `</div>`;
  });
  domString += `</div>`;
  util.printToDom('cart-container', domString);
};

export default {setCart, cartToDom};