let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numBers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let symBols = [" ", "!", "#", "$", "%", "&", "'", "(", ",", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\",," ^ ",", "_", "`", "{", "|", "}", "~"];
let masterArry = [];




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {

    while (true) {
        let userInput = prompt("How long would you like your password to contain?")
        if (!userInput) {
            alert("Please choose a character length of 8-128!");
        } else if (userInput < 8 || userInput > 128) {
            prompt("Please add a value higher than 8 or lower than 128");

        } else {
            break;
        }
    }

    } if (lowerCase) {
        confirm("Do you want to include lower case letters?") 

       
    } if (upperCase) {
        confirm("Do you want to include upper case letters") 

       

    } if (numBers) {
        confirm("Do you want include numbers?")

       

    } if (symBols) {
     confirm("DO you want to include symbols?")

       
    } if (masterArry.length == 0) {

        alert("Please choose a new criteria");
    }if (lowerCase) {
        masterArry = masterArry.concat(lowerCase);
    }if (upperCase) {
        masterArry = masterArry.concat(upperCase);
    }if (numBers) {
        masterArry = masterArry.concat(numBers);
    } if (symBols) {
        masterArry = masterArry.concat(symBols);
    }
   

    let allPasswords = [];

    for (let i = 0; i < userInput; i++) {
        allPasswords = masterArry[Math.floor(Math.random() * masterArry)];
        allPasswords.push(masterArry);
    
   }  
   return allPasswords.join("");
}
    





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
