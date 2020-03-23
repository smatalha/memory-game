var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = []; 

var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("user flipped " + cardOne);
console.log("user flipped " + cardTwo);

if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match");
} else {
	alert("Sorry, try again");
}