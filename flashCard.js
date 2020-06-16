// trả về nguyên mẫu cho str


String.prototype.isEmpty = function () {
    return (this.length === 0 || !this.trim());
};

// tạo thẻ
function Card(kanji, hira, imi) {
    this.kanji = kanji;
    this.hira = hira;
    this.imi = imi;

}

//thêm chữ lên thẻ
let cardsHandle = {
    cards: [],
    cardInd: 0,
    cardText1: document.getElementById("cardText1"),
    cardText2: document.getElementById("cardText2"),
    cardText3: document.getElementById("cardText3"),
    cardPosition: document.getElementById("positionIndex"),
    cardSide: 0,
    cardDel: function () {
        this.cards.splice(this.cardInd, 1);
    },

    //thêm thẻ
    cardAdd: function (kanji, hira, imi) {
        this.cards.push(new Card(kanji, hira, imi));
    },

    //hiển thị thẻ mới

    cardUpdate: function () {
        let card = this.cards[this.cardInd];
        this.cardText1.innerHTML = card.kanji;
        this.cardText2.innerHTML = card.hira;
        this.cardText3.innerHTML = card.imi;
        this.cardPosition.innerHTML = (this.cardInd + 1) + "/" + this.cards.length;

    },


    //chuyển thẻ
    cardMove: function (move) {
        this.cardInd += move;
        if (this.cardInd < 0) {
            this.cardInd += this.cards.length;
        }
        this.cardInd = this.cardInd % this.cards.length;
        this.cardSide = 0;
        this.cardUpdate();
    },


};

//gắn giá trị cho thẻ
let cards = loadData();
for (let i = 0; i < cards.length; i++) {
    cardsHandle.cardAdd(cards[i].kanji, cards[i].hira, cards[i].imi);
}
// cardsHandle.cardAdd("水", "みず","nước");
// cardsHandle.cardAdd("山", "やま","núi");
// cardsHandle.cardAdd("川", "かわ","sông");
// cardsHandle.cardAdd("空", "そら","bầu trời");
// cardsHandle.cardAdd("曇", "くも","mây");
cardsHandle.cardUpdate();

//tạo thẻ mới
let userEnter = function () {
    let enterKanji = document.getElementById("newKanji");
    let enterHira = document.getElementById("newHira");
    let enterImi = document.getElementById("newImi");

    if (enterKanji.value.isEmpty() || enterHira.value.isEmpty() || enterImi.value.isEmpty())
        return;

    cardsHandle.cardAdd(enterKanji.value, enterHira.value, enterImi.value);
    enterKanji.value = " ";
    enterHira.value = " ";
    enterImi.value = " ";
    cardsHandle.cardUpdate();
    saveData();

}

function del() {
    cardsHandle.cardDel();
    if(cardsHandle.cardInd > 0)
        cardsHandle.cardInd--;
    cardsHandle.cardUpdate();
    saveData();
}

