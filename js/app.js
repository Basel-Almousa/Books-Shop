'use strict'

// let min = 0;
// let max = 0;
// let max;
// let min;
// let newMax;
// let newMin;
function Shop(max, min) {
    this.max = max;
    this.min = min;
    this.names = [];
    this.pages = [];
    this.price = [];
    Shop.globArr.push(this);
}
Shop.globArr = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max * 1000 - 500);
}

function getRandomPages(min) {
    return Math.floor(Math.random() * min * 1000 - 500);
}
new Shop(newMax, newMin);

console.log(getRandomInt);

let formFi = document.getElementById('finalForm');
formFi.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    let newMax = event.globArr.max.value
    newMax = parseInt(newMax);

    let newMin = event.globArr.min.value
    newMin = parseInt(newMax);
}

const parent = document.getElementById("result");
let tableElem = document.createElement("table");
parent.appendChild(tableElem);

function makeHeader() {
    let rowHeader = document.createElement("tr");
    tableElem.appendChild(rowHeader);

    let tabHeader = document.createElement("th");
    rowHeader.appendChild(tabHeader);
    tabHeader.textContent = ' Book Name ';

    let tabHeader1 = document.createElement("th");
    rowHeader.appendChild(tabHeader1);
    tabHeader1.textContent = ' Book Pages ';

    let tabHeader2 = document.createElement("th");
    rowHeader.appendChild(tabHeader2);
    tabHeader2.textContent = ' Price ';
}
makeHeader();

Shop.prototype.render = function () {

    let newRaw = document.createElement("tr");
    tableElem.appendChild(newRaw);

    let bookName = document.createElement("td");
    newRaw.appendChild(bookName);
    bookName.textContent = this.names;

    let bookPages = document.createElement("td");
    newRaw.appendChild(bookPages);
    bookPages.textContent = this.pages;

    let priceCust = document.createElement("td");
    newRaw.appendChild(priceCust);
    priceCust.textContent = this.price;

}

// for( let i= 0 ; i< Shop.globArr.length; i++ ){
//     Shop.globArr.render();
// }
function saveTool() {

    const convertedArr = JSON.stringify(Shop.globArr);
    localStorage.setItem("result", convertedArr);
}

function getFromLs() {

    let data = localStorage.getItem("result");

    if (data) {
        let parseData = JSON.parse(data);
        Shop.globArr = parseData;
    }


}
getFromLs();