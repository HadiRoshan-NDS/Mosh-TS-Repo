"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        // this.id = id;
        /*This line says we want to assign the id that we received as an argument,
        to the id property in this class*/
        // this.owner = owner;
        // this._balance = balance;
    }
    desposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    calculateTax() { }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, "Mosh", 0);
console.log(account.balance);
