// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Prompt the user for the password length and character types to include
  var passwordLength = window.prompt("Enter password length (8-128 characters):");
  var includeLowercase = window.confirm("Include lowercase letters?");
  var includeUppercase = window.confirm("include uppercase letters?");
  var includeNumbers = window.confirm("Include numbers?");
  var includeSpecial = window.confirm("Include special characters?");
}
  // Write password to the #password input
//function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

//}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
