import book from '../helpers/book.js';
import util from '../helpers/util.js';

const addToCartEvent = (event) => {
event.preventDefault();
const bookInfo = book.getBook();
console.log(bookInfo);
};
const makeStore = () => {
const bookInfo = book.getBook();

let domString = `<h2>Our Only Book</h2>`;
domString += `<h3>${bookInfo.price}</h3>`;
domString += `<img class="book-img" src='${bookInfo.imageUrl}' alt='${bookInfo.imageAlt}'/>`;
domString += `<button id="cartButton" class="danger btn">Add To Cart</button>`;

util.printToDom('store-container', domString);
document.getElementById('cartButton').addEventListener('click', addToCartEvent);
};
export default {makeStore};