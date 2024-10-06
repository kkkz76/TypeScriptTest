"use strict";
console.log("Hello World");
let num1 = 10;
let text1 = "apple";
if (num1 < 20) {
    num1 += 10;
}
console.log(num1);
let numArray = [1, 2, 3];
let numTuple = [1, true];
let mySize = 2;
console.log(mySize);
function MyFun(mark) {
    if (mark < 100)
        console.log(mark);
    return mark;
}
let employee = {
    id: 1,
    name: "Mario",
    retire: (date) => {
        console.log(date);
    }
};
