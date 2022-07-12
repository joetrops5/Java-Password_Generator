// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate a random integer from min to max, and return it.
function randomInt(min, max) {
  // Allows passing in a single number (the maximum).
  if (!max) {
    max = min;
    min = 0;
  }

  var rand = Math.random();
  return Math.floor(min * (1 - rand) + rand * max);
}

// Returns a random item from the given list.
function getRandomItem(list) {
  return list[randomInt(list.length)];
}

// Prompts the user for password requirements, generates a password that meets those requirements, and returns it.
function generatePassword() {
  //Window represents the top of the page ; prompting the user for password criteria
  var userinput = window.prompt("How long do you want to make your password?");
  //parseInt changes a string into a number.
  var passwordlength = parseInt(userinput);

  if (isNaN(passwordlength)) {
    window.alert("thats not a number");
    return;
  }

  if (passwordlength < 8 || passwordlength > 128) {
    window.alert("Password length must be between 8 and 128 characters");
    return;
  }

  //Set If statement if all of the variables below are false
  var userwantsNumbers = window.confirm(
    "Would you like to include numbers in your password?"
  );
  var userwantsSymbols = window.confirm(
    "Would you like to include symbols in your password?"
  );
  var userwantsLowercase = window.confirm(
    "Would you like to include lower case letters in your password?"
  );
  var userwantsUppercase = window.confirm(
    "Would you like to include upper case letters in your password?"
  );

  //These variables are lists of what to include in the password
  var numberlist = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbollist = ["!", "@", "#", "$", "%"];
  var lowercaselist = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var uppercaselist = [];

  var options = [];

  //This statement below is used to avoid typing out the entire alphabet in the uppercaselist
  for (var i = 0; i < lowercaselist.length; i++) {
    uppercaselist[i] = lowercaselist[i].toUpperCase();
  }

  //If statements used to add each list to the options variable
  if (userwantsNumbers === true) {
    options.push(numberlist);
  }

  if (userwantsSymbols === true) {
    options.push(symbollist);
  }

  if (userwantsLowercase === true) {
    options.push(lowercaselist);
  }

  if (userwantsUppercase === true) {
    options.push(uppercaselist);
  }

  //If the user selects nothing in the user prompt than it is = 0 and lowercase gets selected and pushed into the list container
  if (options.length === 0) {
    options.push(lowercaselist);
  }

  var generatedPassword = "";

  for (var i = 0; i < passwordlength; i++) {
    var randomlist = getRandomItem(options);
    var randomChar = getRandomItem(randomlist);
    generatedPassword += randomChar;
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //Make function for generatePassword
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
