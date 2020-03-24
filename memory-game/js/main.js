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


flipCard(0);
flipCard(2);