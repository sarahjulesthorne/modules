//module created to contain and securely transfer information about example product to other modules.
//object holds info about example product
const bookInfo = {
    price: 24.99,
    title: '50 Shades of Chicken',
    imageUrl: '../../assets/images/crockpot-chicken.jpg',
    imageAlt: 'image of crockpot of roast chicken',
}

//getter function created to act as secure means of passing data to other modules
const getBook = () => {
return bookInfo;
};

export default {getBook};