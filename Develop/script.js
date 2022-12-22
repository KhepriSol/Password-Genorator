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
 // Validate the user's input
 if (passwordLength < 8 || passwordLength > 128) { 
  window.alert("Password length must be between 8 and 10 characters!");
  return; 
}
if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
  window.alert("You must select at least one character type to include in the password!");
  return;
}

 //add the event listener
 generateBtn.addEventListener("click", writePassword);

 //Generate Password function
 function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecial) {
  var characterSet = "";
  if (includeLowercase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
   characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {

   characterSet += "0123456789"; }
   if (includeSpecial) {
    characterSet += "!@#$%^&*()_+-=[]{}|;':,.<>?";
   }
 }
  

//Generate password
  var password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeSpecial, includeNumbers);
  
  //Display Genrated password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Return to genorated password
return password;


