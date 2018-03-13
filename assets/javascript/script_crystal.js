
var randomNumber = 0; // system-generated number between 19-120
var wins = 0;
var losses = 0;
var yourNumber = 0; // adds up clicks on crystals

var crystalArray = [];
var cr1 = 0;
var cr2 = 0;
var cr3 = 0;
var cr4 = 0;

genRandomNum();

// generate random number between 19 - 120
function genRandomNum() {
    randomNumber = Math.floor(Math.random() * 111) + 19;
    console.log(randomNumber);
    // vv WHY DOESN'T THIS WORK???? vv (it works in the Console)
    document.getElementById("random-number").innerHTML = randomNumber;
}

// creata an array to hold four "crystal" values between 1 - 12
createArray();

function createArray() {
    // assign a non-duplicate number between 1 and 12 to each crystal
    for (i = 0; i < 4; i++) {
        crystalArray[i] = Math.floor(Math.random() * 12) + 1;
        console.log(crystalArray);
        
    }
    crystalArray.sort();
}

// check array for unique values, re-run createArray if values non-unique
for (j = 0; j < 4; j++) {
    if (crystalArray[j] == crystalArray[j+1]) {
    console.log(crystalArray);
    createArray();
    } else { // assign values to variables from array values
        cr1 = crystalArray[1];
        cr2 = crystalArray[2];
        cr3 = crystalArray[3];
        cr4 = crystalArray[4];
    }
}

addCrystals();

function addCrystals() {
    tempVar = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
    yourNumber = yourNumber + tempVar;
    if (yourNumber == randomNumber) {
        alert("You won!");
    } else if (yourNumber > randomNumber) {
        alert("You lost!");
    }
}

// add value of crystal to youNumber
document.getElementById("crystal1").onclick = addCrystals(cr1);
$("#crystal2").on("click", addCrystals(cr2));
$("#crystal3").on("click", addCrystals(cr3));
$("#crystal4").on("click", addCrystals(cr4));

