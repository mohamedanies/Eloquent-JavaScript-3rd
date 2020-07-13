// javascript strict mode

function canYouSpotTheProblem() {
    "use strict";
    // for (counter = 0; counter < 10; counter++) {
    // console.log("Happy happy");
    // }

    for (let counter = 0; counter < 10; counter++) {
        console.log("Happy happy");
    }
}
canYouSpotTheProblem();
console.log("---------------------------------------");
/*----------------------------------------------------*/

function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
    sign = "-";
    n = -n;
    }
    do {
    result = String(n % base) + result;
    n /= base;
    } while (n > 0);
    return sign + result;
}
console.log(numberToString(13, 10));

console.log("---------------------------------------");
/*----------------------------------------------------*/

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
    }
    function look() {
    if (promptDirection("Which way?") == "L") {
    return "a house";
    } else {
    return "two angry bears";
    }
    }
    try {
    console.log("You see", look());
    } catch (error) {
    console.log("Something went wrong: " + error);
}
    