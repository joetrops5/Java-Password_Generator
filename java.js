// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () { 
  console.log("sup");

 //1. Prompt the user for the password criteria
 //    A. Password length between 8 < 128 
 //    B. Whether or not to include Lower case, uppsercase, special characters
 //2. Validate the input
 //3. Generate password based on criteria
 
 


 //4. Display generated password on the page
 return "Generated Password Goes Here"; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //Make function for generatePassword
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);