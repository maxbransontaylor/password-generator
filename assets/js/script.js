//psuedocode
//make a variable characterPool to add all elligble characters
// make an array for each type of character
//prompt user if they want to include each type of character, on confirm, add to characterPool
//create a for loop that generates a random character from the pool for the desired length

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercasePool = [
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
var uppercasePool = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberPool = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialPool = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
function generatePassword() {
  var characterPool = [];
  var password = "";
  var passwordLength = window.prompt("How long is your password?(8-128)");
  //function to add arrays to character pool
  var addToPool = function (pool) {
    characterPool = characterPool.concat(pool);
  };

  //using "!" to rule out all characters besides numbers
  if (!(passwordLength >= 8) || !(passwordLength <= 128) || !passwordLength) {
    window.alert("Please pick a value between 8 and 128");
    return generatePassword();
  }

  var confirmLowercase = window.confirm("Use lowercase letters?");
  if (confirmLowercase) {
    addToPool(lowercasePool);
  }
  var confirmUppercase = window.confirm("Use uppercase letters?");
  if (confirmUppercase) {
    addToPool(uppercasePool);
  }
  var confirmNumbers = window.confirm("Use numbers?");
  if (confirmNumbers) {
    addToPool(numberPool);
  }
  var confirmSpecial = window.confirm("Use special characters?");
  if (confirmSpecial) {
    addToPool(specialPool);
  }
  if (characterPool.length === 0) {
    window.alert("Please select atleast one criteria!");
    return generatePassword();
  }
  //adds a random character from the character pool to the end of password variable until it reaches the desired length
  for (var i = 0; i < passwordLength; i++) {
    password += characterPool[Math.floor(Math.random() * characterPool.length)];
  }

  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
