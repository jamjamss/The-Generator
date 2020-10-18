let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numBers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let symBols = [" ", "!", "#", "$", "%", "&", "'", "(", ",", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\",," ^ ",", "_", "`", "{", "|", "}", "~"];
let masterArry = [];




// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {


    let userInput = prompt("How long would you like your password to contain?")

    if (userInput < 8 || userInput > 128) {
        prompt("Please add a value higher than 8 or lower than 128");

    
    }  else {

        let confirmlowerCase = confirm("do you want lower case letters?"); {
            console.log("confirm lower value: ", confirmlowerCase);
        }
    
        let confirmupperCase = confirm("Do you want upper case letters?"); {
            console.log("confirm upper case value:", confirmupperCase)
        }

        let confirmnumBers = confirm("Do you want to include a number?"); {
            console.log("confirm numbers value:", confirmnumBers);
        }

        let confirmsymBols = confirm("Do you want to include symbols?"); {
            console.log("confirm symbols value:", confirmsymBols)
        }
        if (confirmlowerCase === false && confirmupperCase === false && confirmnumBers === false && confirmsymBols === false) {
            event.preventDefault
            
    } 
    
      if (confirmupperCase) {
        masterArry = masterArry.concat(upperCase);
      }
      if (confirmlowerCase) {
        masterArry = masterArry.concat(lowerCase);
      }
      if (confirmnumBers) {
        masterArry = masterArry.concat(numBers);
      }
      if (confirmsymBols) {
        masterArry = masterArry.concat(symBols);
    }
    }

    let allPasswords = [];

    for (let i = 0; i < userInput; i++) {
        allPasswords = allPasswords + masterArry[Math.floor(Math.random () * masterArry.length)]; 
     } return allPasswords;

}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);