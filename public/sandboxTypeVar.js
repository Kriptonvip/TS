"use strict";
// если надо вернуть переменную к типу как в javascript, переопределяй тип сколько хочешь.
let age;
age = true;
console.log(age);
age = 'hello';
console.log(age);
// создаём массив с разными типами данных
let mixed2 = [];
mixed2.push(2);
mixed2.push('mario');
mixed2.push(true);
console.log(mixed2);
//создаем  объект с любым типом
let ninja2;
ninja2 = { name: 'yoshi', age: 23 };
console.log(ninja2);
ninja2 = { name: 23, age: '123123' };
console.log(ninja2);
//arrays
let names = ['luigi', 'mario', 'yoshi']; // массив со строками всегда останется массивом со строками
let eges = [3, 4, 6, 23]; // массив с numbers всегда останется массивом с numbers
//тоже самое касается переменных, единожды получив тип при дикларации, изменить тип данных нельзя. 
// можно явно указывать типе переменной вот так
let book;
//let age:number;
let isLoggined;
// Далее менять тип данных нельзя. 
// обьявление типа переменной как массив строк, c присвоением переменной пустого массива.
let ninjas = [];
// union type создаем массив с разными типами данных
let mixed = [];
mixed.push('hello');
mixed.push(32);
mixed.push(false);
console.log(mixed);
// с помощью объединения типов union мы можем создавать 
//переменные с разным типом данных, и они могут менять свой тип данных после объявления
let uid;
uid = 'string';
uid = 33;
// uid = false не можем так сделать так как boolean не было добавлено в возможные типа данных.
// object
let ninjaObject;
ninjaObject = { name: 'yoshi', age: 20 };
ninjaObject = [];
// если надо задать переменную только объект, то надо задать схему объекта с конкретными ключами и их типами, 
//тогда переменная уже не может стать массивом или получить новую переменную которая не была заложена в схему объекта
let ninjaTwo;
//names.push('toad');
//console.log(names);
// let character = 'luigi';
// let age = 30;
// let ibBlackBelt = false;
// // character = 20;
// character = 'mario'
// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// };
// console.log(circ(33));
