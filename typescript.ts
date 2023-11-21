
class SonAccount {
   name: string;
   surname: string;
    balance: number;
   constructor (_name:string, _surname:string) {
    this.name = "Luca";
    this.surname = "Lanciano";
    this.balance = 0;
   }

   oneDeposit(amount:number): void {
if (amount>0) {
this.balance += amount;
console.log(`${this.name} ${this.surname} versa importo di ${amount}$. Bilancio ${this.balance}.`)
} else {
    console.log("Deposito Annullato")
}

}
oneWithDraw(amount:number): void {
    if (amount>0 && amount <= this.balance) {
this.balance -= amount;
console.log(`${this.name} ${this.surname} ritira importo di ${amount}$. Bilancio ${this.balance}.`)
} else {
    console.log("Ritiro Annullato");
    
}
}
// twoDeposit(amount:number): void {
// if(amount>0) {
//     this.balance += amount;
//     console.log(`${this.name} ${this.surname} rideposita importo di ${amount}$. Bilancio ${this.balance}.`)
// }  else {
//     console.log("Ritiro Annullato");
    
// }
// }

getBalance():number {
    return this.balance;
}
}
const person1 = document.getElementById("sonAccount")
const person2 = document.getElementById("motherAccount")



const accountSon = new SonAccount ("Luca", "Lanciano");
accountSon.oneDeposit(50)
accountSon.oneWithDraw(10)
// accountSon.twoDeposit(50)

person1!.innerHTML= `
${accountSon.name} ${accountSon.surname}: Bilancio ${accountSon.balance}`;




class MotherAccount extends SonAccount {
constructor(_name:string, _surname:string) {
    super(_name,_surname);
    this.name="Giovanna";
this.surname="Danto";
}
addInterest():void {
const Interest:number = this.getBalance()*0.1
console.log(`L'interesse e' di ${Interest}$. Nuovo Bilancio ${this.getBalance()+Interest}$`);
// this.oneDeposit(Interest)
}
}

const accountMother = new MotherAccount ("Giovanna", "Danto");
accountMother.oneDeposit(80);
accountMother.oneWithDraw(30)
accountMother.addInterest()

person2!.innerHTML= `
 ${accountMother.name} ${accountMother.surname}:  Bilancio ${accountMother.balance}`;

