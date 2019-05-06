//module creates print function to act as mechanism for displaying elements created in other modules to the page
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};
export default {
  printToDom
};