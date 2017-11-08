var letter = require('./letter.js');

var words = ["reindeer", "thanksgiving", "presents", "holidays"];

var answer = function (guess){
	this.guessedLetters = [];
	this.guess = guess,
	this.mysteryWord = words[Math.floor(Math.random() * words.length)]
	this.wordGenerator = function() {
		for (var i = 0, i < this.mysteryWord.length, i++){
			new Letter("_", this.mysteryWord[i])
				}
	}

};

module.exports = answer;