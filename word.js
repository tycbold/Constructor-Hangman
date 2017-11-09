var Letter = require('./letter.js');


var answer = function (chosenWord){
	this.guessedLetters = [];
	this.wordArray = [];
	this.guess = guess,
	this.chosenWord = chosenWord;
	this.wordGenerator = function() {
		for (var i = 0, i < this.mysteryWord.length, i++){
			this.wordArray.push(new Letter(this.chosenWord[i]));
				}
	}
	this.addGuess = function(){
		this.guessedLetters.push(this.guess);
	}

};

// There would be a substr method somewhere in here, but I'm not sure where to be honest

module.exports = answer;