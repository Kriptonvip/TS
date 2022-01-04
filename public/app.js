"use strict";
//classes 
// 1 вариант создания класса
// class Invoice {
//   readonly client:string; // можно вызывать и читать
//   private details:string; // доступно к вызову только через методы внутри класса типа format(), или других типов геттеров, нельзя менять или вызывать извне у экземпляра
//   public amount: number; // доутпно к чтению и изменению
//   constructor(c:string, d: string, a: number){
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes $${this.amount} for ${this.details}`;
//   }
// }
// 2 вариант создания класса
var Invoice = /** @class */ (function () {
    // readonly client:string; // можно вызывать и читать
    // private details:string; // доступно к вызову только через методы внутри класса типа format(), или других типов геттеров, нельзя менять или вызывать извне у экземпляра
    // public amount: number; // доутпно к чтению и изменению
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 340);
var invoices = []; // Заявляем что элементом этого массива может быть только экземпляр класса Invoice. 
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
// const anchor = document.querySelector('a')!; // erfpsdftn typeScipt что эта конcтанта не null, он вернет какуюто информацию
//   console.log(anchor.href);
//const form = document.querySelector('form')!;
var form = document.querySelector('.new-item-form');
//console.log(form.children);
//inputs
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
