let textBox = document.getElementById("textBox");
let submitButton = document.getElementById("submitButton");
let displayStocks = document.getElementById("displayStocks");

submitButton.addEventListener("click", () => {

    window.setInterval(() => {
    let symbol = textBox.value;
    let value = getStockQuote(symbol);
    let name = value.name;
    let price = value.price;

    displayStocks.innerHTML = `${name}: $${price}`;}, 2000);
});