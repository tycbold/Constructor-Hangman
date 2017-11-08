var inquirer = require('inquirer');
var word = require('./word.js');

inquirer.prompt([

  {
    type: "input",
    name: "guess",
    message: "Guess a letter!"
  }

]).then(function(user) {

});