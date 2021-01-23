// let codeYourFuture = true;
// console.log(typeof(true));


// // Exercise 1
// function boolChecker(bool) {
//     if (typeof bool === "boolean") {
//         return "You have given me a bool, thanks!"
//     } else {
//         return "No bool, not cool."
//     }
// }

// console.log(boolChecker(true));

//Exercise 2 - Comparisons
// const assert = require("assert");

// const mentorCount = 5 // TODO
// const studentCount = 10 // TODO
// assert(mentorCount < studentCount);

// const capacity = 25
// const people = 10 // TODO
// assert(capacity > people);

// const name1 = 10 // TODO
// const name2 = 10 // TODO
// assert(name1 === name2);

// const number1 = 5 // TODO
// const number2 = 7 // TODO
// assert(number1 !== number2);

// const thisNumber = 12 // TODO
// const thatNumber = 12 // TODO
// assert(thisNumber === thatNumber);

// const thisArray = [1, 2, 3, 4, 5];
// const thatArray = [1, 2, 3, 4, 5];
// assert(thisArray === thatArray);

// console.log(assert)
/************************************************************ */

// Exercise 3 - Conditionals

// const itIsRaining = true;

// if (15) {
//     console.log('grab an umbrella');
// }

// // boolean value
// if (true) {
//     // do something
// }

// // variable assigned to boolean value
// let isHappy = true;
// if (isHappy) {
//     // do something
// }

// // equality operator returns a boolean value
// if (1 + 1 === 2) {
//     // do something
// }

// // comparison operator returns a boolean value
// if (10 > 5) {
//     // do something
// }

// // function call returns boolean value
// function greaterThan10() {
//     if (greaterThan10(5)) {
//         // do something
//     }
// }

function numberChecker(num) {
    if (num > 20) {
        return `${num} is greater than 20`;
    } else if (num === 20) {
        return `${num} is equal to 20`;
    } else if (num < 20) {
        return `${num} is less than 20`;
    } else {
        return `${num} isn't even a number :(`;
    }
}
console.log(numberChecker(50));

function myMood(mood) {
    if (mood === 'happy') {
        return 'Good job, you are doing a great job'
    } else {
        return "I'm sorry, I'm still learning about feelings"
    }
    console.log('What!!!');

}

console.log(myMood('happy'));

let num = 10;

function satisfactionRequirements(num) {
    if (num > 3 && num < 10) {
        return true;
    } else {
        return false
    }
};
console.log(satisfactionRequirements(10));
/*****/

function turnOnLight(stateOFLight) {
    return true;
}


let light = false;
light = turnOnLight(true);

/*********************************************************/