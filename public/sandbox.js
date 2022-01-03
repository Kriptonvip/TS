"use strict";
// type of functions ________________
let greet = () => {
    console.log('Hello, world');
};
console.log(typeof (greet));
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 6);
const minus = (a, b) => {
    return a - b;
};
let result = minus(19, 8);
// type aliases type of functions ________________
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
const logDetails2 = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greetAgain2 = (user) => {
    console.log(`${user.name} says hello`);
};
console.log(logDetails2(12, 'roman'));
console.log(greetAgain2);
// Functions Signature
//let Hello: Function // Тип у переменной hello функция! 
// example 1
let hello; // задаём шаблон(signature) типизации параметров функции, //void говорит что функция должна возвращать тип данных void.
hello = (name, greeting) => {
    console.log(`${name} say ${greeting}`);
};
// example 2
let calc; // => number говорит что функция должна возвращать тип данных number, в другом случае будет ошибка 
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numTwo - numOne;
    }
};
// example 3
let greetAgainAgain;
greetAgainAgain = (user) => {
    console.log(`${user.name} is ${user.age} years old`);
};
