var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(_name, _surname) {
        this.name = "Luca";
        this.surname = "Lanciano";
        this.balance = 0;
    }
    SonAccount.prototype.oneDeposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("".concat(this.name, " ").concat(this.surname, " versa importo di ").concat(amount, "$. Bilancio ").concat(this.balance, "."));
        }
        else {
            console.log("Deposito Annullato");
        }
    };
    SonAccount.prototype.oneWithDraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("".concat(this.name, " ").concat(this.surname, " ritira importo di ").concat(amount, "$. Bilancio ").concat(this.balance, "."));
        }
        else {
            console.log("Ritiro Annullato");
        }
    };
    // twoDeposit(amount:number): void {
    // if(amount>0) {
    //     this.balance += amount;
    //     console.log(`${this.name} ${this.surname} rideposita importo di ${amount}$. Bilancio ${this.balance}.`)
    // }  else {
    //     console.log("Ritiro Annullato");
    // }
    // }
    SonAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return SonAccount;
}());
var person1 = document.getElementById("sonAccount");
var person2 = document.getElementById("motherAccount");
var accountSon = new SonAccount("Luca", "Lanciano");
accountSon.oneDeposit(50);
accountSon.oneWithDraw(10);
// accountSon.twoDeposit(50)
person1.innerHTML = "\n".concat(accountSon.name, " ").concat(accountSon.surname, ": Bilancio ").concat(accountSon.balance);
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_name, _surname) {
        var _this = _super.call(this, _name, _surname) || this;
        _this.name = "Giovanna";
        _this.surname = "Danto";
        return _this;
    }
    MotherAccount.prototype.addInterest = function () {
        var Interest = this.getBalance() * 0.1;
        console.log("L'interesse e' di ".concat(Interest, "$. Nuovo Bilancio ").concat(this.getBalance() + Interest, "$"));
        // this.oneDeposit(Interest)
    };
    return MotherAccount;
}(SonAccount));
var accountMother = new MotherAccount("Giovanna", "Danto");
accountMother.oneDeposit(80);
accountMother.oneWithDraw(30);
accountMother.addInterest();
person2.innerHTML = "\n ".concat(accountMother.name, " ").concat(accountMother.surname, ":  Bilancio ").concat(accountMother.balance);
