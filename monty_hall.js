/* The classic Monty Hall problem. Written by William Starr
Idea came from Robert David Graham's implementation */

class Game {

	// initial door setup with all doors as losing
	doors = ["coal", "coal", "coal"];

	// constructor which will be called whenever we initialize class Game in main.js
	constructor(numberOfTries) {
		this.numberOfTries = numberOfTries;
	}

	// using built in JS rand, picks a random number between 1 and 3.
	// better rand implementations could be used, but this will work especially with a large amount of tries
	pickRandom() {
		return Math.floor(Math.random() * 3)
	}

	
}