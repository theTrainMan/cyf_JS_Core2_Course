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

//Exercise 2
const assert = require("assert");

const mentorCount = 5 // TODO
const studentCount = 10 // TODO
assert(mentorCount < studentCount);

const capacity = 25
const people = 10 // TODO
assert(capacity > people);

const name1 = 10 // TODO
const name2 = 10 // TODO
assert(name1 === name2);

const number1 = 5 // TODO
const number2 = 7 // TODO
assert(number1 !== number2);

const thisNumber = 12 // TODO
const thatNumber = 12 // TODO
assert(thisNumber === thatNumber);

const thisArray = [1, 2, 3, 4, 5];
const thatArray = [1, 2, 3, 4, 5];
assert(thisArray === thatArray);

console.log(assert);