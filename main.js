const CARD  = "card";

function saveData() {
    localStorage.setItem(CARD, JSON.stringify(cardsHandle.cards));
}
function loadData() {
    let data = localStorage.hasOwnProperty(CARD) ? JSON.parse(localStorage.getItem(CARD)) : [];
    return data;
}