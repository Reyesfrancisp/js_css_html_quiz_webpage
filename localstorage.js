function getFromLocalStorage(itemKey) {
    return JSON.parse(localStorage.getItem(itemKey))
}

function setLocalStorage(itemKey, data) {
    localStorage.setItem(itemKey, JSON.stringify(data))
}

// setLocalStorage('paulTests', [{score: 22, initials: "PC"},{score: 18, initials: "PC"}]);


var inLocal = getFromLocalStorage('paulTests');

console.log(inLocal)