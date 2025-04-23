"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        /*This line says we want to assign the id that we received as an argument,
        to the id property in this class*/
        this.owner = owner;
        this.balance = balance;
    }
    desposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this.balance += amount;
    }
}
