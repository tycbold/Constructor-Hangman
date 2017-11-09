var inquirer = require('inquirer');
var Word = require('./word.js');
var remainingGuesses = 10;
var possibleWords = ["reindeer", "thanksgiving", "presents", "holidays"];
var chosenWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];

console.log(chosenWord);

var Answer = new answer(chosenWord);

inquirer.prompt([

  {
    type: "input",
    name: "guess",
    message: "Guess a letter!"
  }

]).then(function(user) {

	Answer.(user.guess);

	// Here is where the guess would be fed into a constructor for the goal word
	// and substrated through all of the letters

});