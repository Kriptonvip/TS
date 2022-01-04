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

class Invoice {
  // readonly client:string; // можно вызывать и читать
  // private details:string; // доступно к вызову только через методы внутри класса типа format(), или других типов геттеров, нельзя менять или вызывать извне у экземпляра
  // public amount: number; // доутпно к чтению и изменению

  constructor(
    readonly client: string,
    private details: string,
    public amount:number
  ){  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('mario', 'work on the mario website', 250 );
const invTwo = new Invoice('luigi', 'work on the luigi website', 340 );

let invoices:Invoice[] = []; // Заявляем что элементом этого массива может быть только экземпляр класса Invoice. 


invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv =>{
  console.log(inv.client, inv.amount, inv.format());
})


// const anchor = document.querySelector('a')!; // erfpsdftn typeScipt что эта конcтанта не null, он вернет какуюто информацию

//   console.log(anchor.href);

//const form = document.querySelector('form')!;

const form = document.querySelector('.new-item-form') as HTMLFormElement;

//console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e:Event) => {
  e.preventDefault();
  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber);
})