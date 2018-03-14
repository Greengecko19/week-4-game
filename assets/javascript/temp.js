
var randomNumber = 0; // system-generated number between 19-120
var wins = 0;
var losses = 0;
var yourSum = 0; // adds up clicks on crystals

var crystalArray = [];
var cr0 = 0;
var cr1 = 0;
var cr2 = 0;
var cr3 = 0;

function generateNumbers() {

    // generate random number between 19 - 120
    function genRandomNum() {
        randomNumber = Math.floor(Math.random() * 111) + 19;
        console.log(randomNumber);
        document.getElementById("random-number").innerHTML = randomNumber;
        // $("random-number").innerHTML = randomNumber;
    }

    // creata an array to hold four "crystal" values between 1 - 12
    // createArray();

    function createArray() {
        // assign a non-duplicate number between 1 and 12 to each crystal
        for (i = 0; i < 4; i++) {
            crystalArray[i] = Math.floor(Math.random() * 12) + 1;
        }
        console.log("crystalArray unsorted: " + crystalArray);
        crystalArray.sort(function(a, b){return a - b});
        console.log("crystalArray sorted: " + crystalArray);
        setUnique();
    }

}


function setUnique() {
// check array for unique values, re-run createArray if values non-unique
    for (j = 0; j < 4; j++) {
        if (crystalArray[j] == crystalArray[j+1]) {
        createArray();
        } else { // assign values to variables from array values
            cr0 = crystalArray[0];
            cr1 = crystalArray[1];
            cr2 = crystalArray[2];
            cr3 = crystalArray[3];
        }
    }
}

// add value of crystal to youNumber
$("#crystal0").on("click", function() {
    console.log("yourSum (initial):  " + yourSum);
    yourSum = yourSum + cr0;
    console.log("yourSum (added):  " + yourSum);
    document.getElementById("your-sum").innerHTML = yourSum;

    if (yourSum == randomNumber) {
        console.log("yourSum:  " + yourSum);
        console.log("randomNumber:  " + randomNumber)
        document.getElementById("status-msg").innerHTML = ":  Good job!"
        wins++;
        document.getElementById("number-wins").innerHTML = wins;
        yourSum = 0;
        createArray();

    } else if (yourSum > randomNumber) {
        console.log("Number Exceeded!!!");
        console.log("yourSum:  " + yourSum);
        console.log("randomNumber:  " + randomNumber)
        document.getElementById("status-msg").innerHTML = ":  You bombed out!"
        losses++;
        document.getElementById("number-losses").innerHTML = losses;
        yourSum = 0;
        createArray();
    }
});


$("#crystal1").on("click", function() {
    console.log("yourSum (initial):  " + yourSum);
    yourSum = yourSum + cr1;
    console.log("yourSum (added):  " + yourSum);
    document.getElementById("your-sum").innerHTML = yourSum;
    if (yourSum == randomNumber) {
        console.log("yourSum:  " + yourSum);
        console.log("randomNumber:  " + randomNumber)
        wins++;
        document.getElementById("status-msg").innerHTML = ":  Good job!"
        createArray();

    } else if (yourSum > randomNumber) {
        console.log("Number Exceeded!!!");
        console.log("yourSum:  " + yourSum);
        console.log("randomNumber:  " + randomNumber)
        losses++;
        document.getElementById("status-msg").innerHTML = ":  You bombed out!"
        createArray();
    }
});
$("#crystal2").on("click", function() {
    console.log("yourSum (initial):  " + yourSum);
    yourSum = yourSum + cr2;
    console.log("yourSum (added):  " + yourSum);
    document.getElementById("your-sum").innerHTML = yourSum;
    if (yourSum == randomNumber) {
        console.log("yourSum:  " + yourSum);
        console.log("randomNumber:  " + randomNumber)
        wins++;
        document.getElementById("status-msg").innerHTML = ":  Good job!"
    } else if (yourSum > randomNumber) {
        console.log("Number Exceeded!!!");
        console.log("yourSum:  " + yourSum);
        console.log("randomNumber:  " + randomNumber)
        losses++;
        document.getElementById("status-msg").innerHTML = ":  You bombed out!"
        createArray();
    }
});
$("#crystal3").on("click", function() {
    console.log("yourSum (initial):  " + yourSum);
    yourSum = yourSum + cr3;
    console.log("yourSum (added):  " + yourSum);
    document.getElementById("your-sum").innerHTML = yourSum;
    if (yourSum == randomNumber) {
        console.log("yourSum:  " + yourSum);
        console.log("randomNumber:  " + randomNumber)
        wins++;
        document.getElementById("status-msg").innerHTML = ":  Good job!"
    } else if (yourSum > randomNumber) {
        console.log("Number Exceeded!!!");
        console.log("yourSum:  " + yourSum);
        console.log("randomNumber:  " + randomNumber)
        losses++;
        document.getElementById("status-msg").innerHTML = ":  You bombed out!"
        createArray();
    }
});









// function addCrystals() {
//     tempVar = Math.floor(Math.random() * 12) + 1; // returns a number between 1 and 12
//     console.log("tempVar:  " + tempVar);
    
//     yourSum = yourSum + tempVar;
//     $("your-sum").innerHTML = yourSum;
//     console.log("yourSum:  " + yourSum);
    
//     if (yourSum == randomNumber) {
//         alert("You won!");
//     } else if (yourSum > randomNumber) {
//         alert("You lost!");
//     }
// }

// $("#crystal2").on("click", addCrystals(cr2));
// $("#crystal3").on("click", addCrystals(cr3));
// $("#crystal4").on("click", addCrystals(cr4));
