//module created to handle initial store functionality and to call cart functions
import book from '../helpers/book.js';
import cart from './cart.js';
import util from '../helpers/util.js';


//created to call book getter function an dpass book array into cart setter function
//Also created to call cartToDom function which creates cart elements/actions
const addToCartEvent = (event) => {
  event.preventDefault();
  const bookInfo = book.getBook();
  cart.setCart(bookInfo);
  cart.cartToDom();
};

//created to pass book array from book getter function into domString and print that to DOM
//Also adds event listener to button to call addToCart function when clicked
const makeStore = () => {
  const bookInfo = book.getBook();

  let domString = `<h2>Our Only Book</h2>`;
  domString += `<h3>${bookInfo.price}</h3>`;
  domString += `<img class="book-img" src='${bookInfo.imageUrl}' title="bookInfo.imageAlt" alt='${bookInfo.imageAlt}'/>`;
  domString += `<button id="cartButton" class="danger btn">Add To Cart</button>`;

  util.printToDom('store-container', domString);
  document.getElementById('cartButton').addEventListener('click', addToCartEvent);
};

export default {
  makeStore
};