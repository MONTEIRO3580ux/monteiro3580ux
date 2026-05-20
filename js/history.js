// history.js

let history = JSON.parse(localStorage.getItem('conversionHistory')) || [];

function getHistory() {
    return history;
}

function addToHistory(conversion) {
    history.unshift(conversion);
    if (history.length > 10) {
        history.pop();
    }
}

function saveHistory() {
    localStorage.setItem('conversionHistory', JSON.stringify(history));
}

function clearHistoryData() {
    history = [];
    saveHistory();
}
