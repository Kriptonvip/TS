// type of functions ________________

let greet = () => {
    console.log('Hello, world')
}
console.log(typeof(greet));

const add = (a:number, b:number, c?: any) => {
    console.log(a+b);
    console.log(c);
}
add(5,6);

const minus = (a:number, b:number):number => {
    return a - b;
}

let result = minus(19, 8);


// type aliases type of functions ________________

const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}
const greetAgain = (user: {name: string, uid: string | number}) => {
    console.log(`${user.name} says hello`);
}
// Алиасы позволяют присвоить типам аргументов имена. например
type StringOrNum = string | number;
// что позволяет сократить и упростить объявление типа параметров.
// также можно задавать шаблоны типов параметров для объектов
type ObjNameString = {name: string, uid: StringOrNum}

const logDetails2 = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}
const greetAgain2 = (user: ObjNameString) => {
    console.log(`${user.name} says hello`);
}

console.log(logDetails2(12, 'roman'));
console.log(greetAgain2);

// Functions Signature

//let Hello: Function // Тип у переменной hello функция! 
// example 1
 let hello: (a: string, b:string) => void; // задаём шаблон(signature) типизации параметров функции, //void говорит что функция должна возвращать тип данных void.
 hello = (name: string, greeting: string) => { // типы параметров должны совпадать с заданными в signature
     console.log(`${name} say ${greeting}`);
 }
 // example 2
 let calc: (a:number, b:number, c:string) => number // => number говорит что функция должна возвращать тип данных number, в другом случае будет ошибка 

 calc = (numOne:number, numTwo:number, action:string) => {
    
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numTwo - numOne;
    }
 }
// example 3


let greetAgainAgain:(obj: {name: string, age: number}) => void;

type person = {name: string, age: number}
greetAgainAgain = (user: person) => {  // after variable has signature you can use type alias
 console.log(`${user.name} is ${user.age} years old`)
}
