type bankAccount = {money:number, deposit:(value:number) => void};
let bankAccount:bankAccount = {
    money: 2000,
    deposit(value:number):void {
        this.money += value;
    }
};

let myself : {name:string, bankAccount:bankAccount, hobbies:string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

