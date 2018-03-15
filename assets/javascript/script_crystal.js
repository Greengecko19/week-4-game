
var randomNumber = 0; // system-generated number between 19-120
var wins = 0;
var losses = 0;
var yourSum = 0; // adds up clicks on crystals

var crystalArray = [];
var cr0 = 0;
var cr1 = 0;
var cr2 = 0;
var cr3 = 0;

var freezeFlag = false;

function generateNumbers() {

    // reset freeze flag for crystal buttons (disables buttons)
    freezeFlag = false;
    document.getElementById("status-msg").innerHTML = "";
    yourSum = 0; // reset values from previous game


    // generate random number between 19 - 120
    randomNumber = Math.floor(Math.random() * 112) + 19;
    console.log("randomNumber:  " + randomNumber);
    
    document.getElementById("random-number").innerHTML = randomNumber;
    document.getElementById("your-sum").innerHTML = yourSum;


    // creat an array to hold four "crystal" values between 1 - 12
    // assign a non-duplicate number between 1 and 12 to each crystal
    for (i = 0; i < 4; i++) {
        crystalArray[i] = Math.floor(Math.random() * 12) + 1;
    }
    console.log("crystalArray unsorted: " + crystalArray);
    crystalArray.sort(function(a, b){return a - b});
    console.log("crystalArray sorted: " + crystalArray);
    console.log("freezeFlag:  " + freezeFlag);
    console.log("yourSum:  " + yourSum);


    // check array for unique values, re-run generateNumbers if values non-unique
    for (j = 0; j < 3; j++) {
        if (crystalArray[j] == crystalArray[j+1]) {
        generateNumbers();
        } else { // assign values to variables from array values
            cr0 = crystalArray[0];
            cr1 = crystalArray[1];
            cr2 = crystalArray[2];
            cr3 = crystalArray[3];
        }
    }
}

// if it adds up right, do this
function goodJob() {
    console.log("yourSum:  " + yourSum);
    console.log("randomNumber:  " + randomNumber)
    document.getElementById("status-msg").innerHTML = ":  Good job!";
    wins++;
    freezeFlag = true;
    document.getElementById("number-wins").innerHTML = wins;

    // vv jquery won't work! vv
    // $("#number-wins").innerHTML = wins;
}

// if the amount goes over, do this
function bombOut() {
    console.log("yourSum:  " + yourSum);
    console.log("randomNumber:  " + randomNumber)
    console.log("Number Exceeded!!!");
    document.getElementById("status-msg").innerHTML = ":  You bombed out!";
    losses++;
    freezeFlag = true;
    console.log("losses:  " + losses);
    document.getElementById("number-losses").innerHTML = losses;
    // unable to get the jquery call to work below vvv
    // $("#number-losses").innerHTML = losses;
}


// add value of crystal to yourSum
$("#crystal0").on("click", function() {
    if (freezeFlag == true) { return; }
    tempSum = yourSum;
    console.log("yourSum (initial):  " + yourSum);
    yourSum = tempSum + cr0;
    console.log("yourSum (added):  " + yourSum);
    document.getElementById("your-sum").innerHTML = yourSum;

    if (yourSum == randomNumber) {
        goodJob();
    } else if (yourSum > randomNumber) {
        bombOut();
    }
});


$("#crystal1").on("click", function() {
    if (freezeFlag == true) { return; }
    tempSum = yourSum;
    console.log("yourSum (initial):  " + yourSum);
    yourSum = tempSum + cr1;
    console.log("yourSum (added):  " + yourSum);
    document.getElementById("your-sum").innerHTML = yourSum;

    if (yourSum == randomNumber) {
        goodJob();
    } else if (yourSum > randomNumber) {
        bombOut();
    }
});


$("#crystal2").on("click", function() {
    if (freezeFlag == true) { return; }
    tempSum = yourSum;
    console.log("yourSum (initial):  " + yourSum);
    yourSum = tempSum + cr2;
    console.log("yourSum (added):  " + yourSum);
    document.getElementById("your-sum").innerHTML = yourSum;

    if (yourSum == randomNumber) {
        goodJob();
    } else if (yourSum > randomNumber) {
        bombOut();
    }
});


$("#crystal3").on("click", function() {
    if (freezeFlag == true) { return; }
    tempSum = yourSum;
    console.log("yourSum (initial):  " + yourSum);
    yourSum = tempSum + cr3;
    cr3Test = true;
    console.log("yourSum (added):  " + yourSum);
    document.getElementById("your-sum").innerHTML = yourSum;

    if (yourSum == randomNumber) {
        goodJob();
    } else if (yourSum > randomNumber) {
        bombOut();
    }
});

