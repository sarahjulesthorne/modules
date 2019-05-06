/*module created to hold cart functionality
Used getter function for security, setter function to build array,
buy event function to display total price in alert on button click,
And cartToDom function to display contents of cart and offer purchase button with click functionality*/
import util from '../helpers/util.js';

//created to hold info about product in cart
const cart = [];

//created to build cart array with product info on button click
const setCart = (book) => {
  cart.push(book);
};

//created to pass cart info to other functions/modules securely
const getCart = () => {
  return cart;
};

//on click event, used reduce to return total price of all products in cart in order to be able to display alert with total amount in message
const buyEvent = (event) => {
  event.preventDefault();
  const myCart = getCart();
  const total = myCart.reduce((a, b) => {
    return a + b.price;

  }, 0);
  window.alert(`You owe ${total.toFixed(2)}`);
};

//used domString and print functions to create initial cart content, in order to display contents to user.
//Also added click event to purchase button so user can click and see total price of items in cart
const cartToDom = () => {
  const myCart = getCart();
  let domString = '<div class="row">';
  domString += '<h2>Cart:</h2>';
  domString += '<button id="purchase-btn" class="btn btn-secondary">Purchase</button>'
  domString += '</div><div class="row d-flex flex-wrap">';
  myCart.forEach((book) => {
    domString += `<div class="card col-2">`;
    domString += `  <img src=${book.imageUrl} class="card-img-top" title="${book.imageAlt}" alt="${book.imageAlt}">`;
    domString += `  <div class="card-body">`;
    domString += `    <h5 class="card-title">${book.title}</h5>`;
    domString += `    <p class="card-text">${book.price}</p>`;
    domString += `  </div>`;
    domString += `</div>`;
  });
  domString += `</div>`;
  util.printToDom('cart-container', domString);
  document.getElementById('purchase-btn').addEventListener('click', buyEvent);
};

export default {
  setCart,
  cartToDom
};