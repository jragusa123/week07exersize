//var testOne = "What kind of variable is this?";
//console.log(typeof testOne) //string
//var testTwo = 256;
//console.log(typeof testTwo)// number
//var testFive = [1, 2, 5];
//console.log(typeof testFive)//object
//var testSix = 128;
//console.log(typeof testSix)// number
//var testSeven = "What am I?"
//console.log(typeof testSeven)// string
//var testEight = true;
//console.log(typeof testEight)// boolean
var string1 = "Hello ";
var string2 = "my name is ";
var string3 = "your name here";
var combinedStrings = string1 + string2 + string3;
console.log(combinedStrings);//hello my name is your name here
var num1 = 8;
var num2 = 52;
var num3 = 60;
var combinedNumbers = num1 + num2 + num3;
console.log(combinedNumbers);//120
var mixedNum1 = 10;
var mixedString1 = "ten";
var mixedNum2 = "10";
var mixedConcatenation = mixedNum1 + mixedNum2 + mixedString1;
console.log(mixedConcatenation);//1010ten
var num4 = 5;
var num5 = 0;
if (num4 > 1) {
console.log("Num4 is greater than 1");
} else {
console.log("Num4 is NOT greater than 1");
};//Num4 is greater than 1
var num4 = 5;
var num5 = 0;
if (num4 < num5 || num4 === num5 && true) {
console.log("If statement ran!");
} else {
console.log("Else statement ran");
};//Else statement ran
var num4 = 5;
var num5 = 0;
if (num4 < num5 || num4 === num5) {
console.log("If statement ran!");
} else if (num5 === "0" || true) {
console.log("Else if statement ran");
} else {
console.log("Else statement ran");
};// Else if statement ran
var num4 = 5;
var num5 = 0;
if (num4 > num5 && num4 === num5) {
console.log("If statement ran!");
} else if (num5 === "0" || true) {
console.log("Else if statement ran");
} else {
console.log("Else statement ran");
};// Else if statement ran
var array1 = ["this", "is", "an", "array", "of", "strings"];
for (var i = 0; i < array1.length; i = i + 1) {
console.log(i, array1[i]);
};// this is an array of strings
var array2 = [1, 3, 5, 7, 9];
var total = 0;
for (var i = 0; i < array2.length; i = i + 1) {
total = total + array2[i];
};
console.log(total);// 25
var array3 = [11, 33, 55, 77, 99];
for (var i = 0; i < array2.length; i = i + 1) {
if(array3[i] >= 55 || array3[i] <= 100){
console.log(array3, array3[i]);
};
};// Array [ 11, 33, 55, 77, 99
  function testStuff (a, b) {
if(a > 25 && b < 100){
console.log(a + " is greater than 25 and " + b + "is less than 100");
} else {
console.log(a + " is NOT greater than 25 or " + b + "is NOT less than 100");
};
};
testStuff(10, 101);//10 is NOT greater than 25 or 101is NOT less than 100
testStuff(26, 99);//26 is greater than 25 and 99is less than 100/
testStuff(100, 25);// 100 is greater than 25 and 25is less than 100//
function testStuff2(c, d) {
if(c == 25){
console.log(c + " is equal to 25");
} else if(d <= 100){
console.log(d + " is less than or equal to 100");
} else {
console.log("Neither if or else if statement ran");
};
};
testStuff2(26, 101);//Neither if or else if statement ran
testStuff2(25, 99);// 25 is equal to 25
testStuff2(102, 24);// 24 is less than or equal to 100
