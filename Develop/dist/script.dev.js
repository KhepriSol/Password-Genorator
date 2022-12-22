"use strict";

// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // Write password to the #password input

function writePassword() {
  // Prompt the user for the password length and character types to include
  var passwordLength = window.prompt("Enter password length (8-128 characters):");
  var includeLowercase = window.confirm("Include lowercase letters?");
  var includeUppercase = window.confirm("Include uppercase letters?");
  var includeNumbers = window.confirm("Include numbers?");
  var includeSpecial = window.confirm("Include special characters?"); // Validate the user's input

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters!");
    return;
  }

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    window.alert("You must select at least one character type to include in the password!");
    return;
  } // Generate the password


  var password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecial); // Display the generated password

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} // Add event listener to generate button


generateBtn.addEventListener("click", writePassword); // Function to generate a password

function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecial) {
  // Create a string of all the possible characters to include in the password
  var characterSet = "";

  if (includeLowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }

  if (includeUppercase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (includeNumbers) {
    characterSet += "0123456789";
  }

  if (includeSpecial) {
    characterSet += "!@#$%^&*()_+-=[]{}|;':,.<>?";
  } // Use the `Math.random()` function to select random characters from the string and append them to the password until the desired password length is reached


  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  } // Return the generated password


  return password;
}
//# sourceMappingURL=script.dev.js.map
