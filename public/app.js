import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
// let docOne: HasFormatter; // заявляем что docOne должен иметь в себе метод  format() возвращающий строку.
// let docTwo: HasFormatter;
// docOne = new Invoice ('yochi', 'web work', 250);
// docTwo = new Payment ('mario', 'plumbing work', 200);
// let docs: HasFormatter[] = []; // задаем тип массива в котором будут объекты, которые должны иметь в себе функцию указаную в HasFormatter
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('mario', 'work on the mario website', 250 );
// const invTwo = new Invoice('luigi', 'work on the luigi website', 340 );
// let invoices:Invoice[] = []; // Заявляем что элементом этого массива может быть только экземпляр класса Invoice. 
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv =>{
//   console.log(inv.client, inv.amount, inv.format());
// })
// const anchor = document.querySelector('a')!; // указывает typeScipt что эта конcтанта не null, он вернет какую-то информацию, и он даже понимает что это ссылка
//   console.log(anchor.href);
//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form'); // указываем что этот элемент является form
//console.log(form.children);
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom'); // указываем что этот элемент является Input 
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
// // Interfaces
// interface IsPerson { // создаем шаблон объекта, и он должен быть именно таким, изменять тип или добавлять ключи нельзя
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: 'Roman',
//   age: 32,
//   speak(text: string ): void {
//     console.log(text);
//   },
//   spend(amount: number): number {
//     console.log('i spent', amount);
//     return amount;
//   }
// };
// console.log(me);
