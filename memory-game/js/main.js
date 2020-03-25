var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImge: "images/queen-of-hearts.png"
},
{
	rank: 'queen',
	suit: 'dimonds',
	cardImge: "images/queen-of-dimonds.png"
},
{
	rank: 'king',
	suit: 'hearts',
	cardImge: "images/king-of-hearts.png"
},
{
	rank: 'king',
	suit: 'dimonds',
	cardImge: "images/king-of-dimonds.png"
}
];

function createBoard() {
	let cardElement = document.createElement('cardImge')[0];
	let cardElement = document.createElement('cardImge')[1];
	let cardElement = document.createElement('cardImge')[2];
	let cardElement = document.createElement('cardImge')[3];
	// <img src="images/back.png" alt="Queen of Diamonds">
	// <img src="images/back.png" alt="Queen of Hearts">
	// <img src="images/back.png" alt="King of Diamonds">
	// <img src="images/back.png" alt="King of Hearts">

	for (var i = 0; i < cards.length; i++) {
		cards[i]
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', cards[i]);
		elememt.addEventListener('click', 'flipCard');
		document.getElementById('game-board').appendChild('cardElement')
	}

}
var cardsInPlay = [];

function checkForMatch() {

    if (cardsInPlay[0] === cardsInPlay[1]) {
	    alert("You found a match");
        } else {
        alert("Sorry, try again");
        }	
}

function flipCard(cardId) {
    
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImge);
    console.log(cards[cardId].suit);
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();
}

createBoard();