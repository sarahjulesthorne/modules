//is main JS file for project.
//uses init function to trigger all functionality on page on page load
import store from './components/store.js';

const init = () => {
  store.makeStore();
};
init();