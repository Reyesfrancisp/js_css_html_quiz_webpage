function getFromLocalStorage(itemKey) {
    return JSON.parse(localStorage.getItem(itemKey)) || [];
}

function setLocalStorage(itemKey, data) {
    localStorage.setItem(itemKey, JSON.stringify(data))
}

//setLocalStorage('paulTests', [{score: 22, initials: "PC"},{score: 18, initials: "PC"}]);
function addItemToLocalStorage(itemKey, item) {
    var currData = getFromLocalStorage(itemKey); // this is an array datatype
    currData.push(item);
    setLocalStorage(itemKey, currData);
}

function deleteItemFromLocalStorage(){}
function deleteEntireStore(){}
function addMultipleItemsToLocalStorage(){}

var inLocal = getFromLocalStorage('paulTests');

console.log(inLocal)
