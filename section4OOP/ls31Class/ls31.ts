class Account {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    /*This line says we want to assign the id that we received as an argument, 
    to the id property in this class*/
    this.owner = owner;
    this.balance = balance;
  }

  desposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
}
