"use strict";

//task1
//////////////

let myNumber = 12345;
let myString = "some string";
let myBool = true;
let myNull = null;
let mySymbol = Symbol();
let myUndef = undefined;

console.log("Переменные:", myNumber, myString, myBool, myNull, mySymbol, myUndef);

//task2
///////////////////////

let number = 4000;
console.log(typeof number);
let newNumber = new Number(4000);
console.log(typeof newNumber);

console.log(newNumber.toFixed(2));
console.log(number.toFixed(2));

//task3
//////////////////////////

let count = 10;
console.log(++count);
console.log(count);
console.log(count++);
console.log(count);

//task4
//////////////////////////

let variable = 100;
variable = variable+20;
console.log(variable);
let anotherVariable = 25;
anotherVariable *= 4;
console.log(anotherVariable);

//task5
////////////////////////

console.log(5<10);
console.log(5>10);
console.log(10>=10);
console.log(8<=10);
console.log(10===10);
console.log(10!==10);

//task6
/////////////////////

console.log("string");
console.log('newString');
console.log(`anotherString`);
console.log("this is my\"string\"");
let myNewString = "new string";
console.log(myNewString[2]);

//task7
/////////////////////

let number = 5;
console.log(number && 10+number);
let prevString = "my String";
let newString = prevString || "default";

//task 8 
///////////////////////

let temp;
console.log(temp);
let obj = {};
console.log(obj.property);
let ar = [1,2,3];
console.log(ar[3]);
const func = () => {return;};
console.log(func());

//task 9
////////////////////////////////

console.log(typeof null);
console.log(typeof undefined);
console.log(null == undefined);
console.log(null === undefined);
