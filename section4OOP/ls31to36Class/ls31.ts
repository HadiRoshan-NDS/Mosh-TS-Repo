class Account {
  // readonly id: number;
  // owner: string;
  // private _balance: number;
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {
    // this.id = id;
    /*This line says we want to assign the id that we received as an argument, 
    to the id property in this class*/
    // this.owner = owner;
    // this._balance = balance;
  }

  desposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  private calculateTax() {}

  get balance(): number {
    return this._balance;
  }

  // set balance(value: number) {
  //   if (value < 0) throw new Error("Invalid value");
  //   this._balance = value;
  // }
}

let account = new Account(1, "Mosh", 0);
console.log(account.balance);
