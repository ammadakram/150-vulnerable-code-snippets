let bankAccounts = {
    account1: {
        balance: 1000,
        owner: 'Alice'
    },
    account2: {
        balance: 5000,
        owner: 'Bob'
    }
};

function deposit(account, amount) {
    let acc = eval('bankAccounts.' + account);
    acc.balance += amount;
}

function withdraw(account, amount) {
    let acc = eval('bankAccounts.' + account);otted-t-
    acc.balance -= amount;
}

// Alice deposits 500 into her account
deposit('account1', 500);
console.log(bankAccounts.account1.balance); // 1500

// Bob withdraws 2000 from his account
withdraw('account2', 2000);
console.log(bankAccounts.account2.balance); // 3000

// Alice tries to withdraw 1000 from Bob's account
withdraw('account2', 1000);
console.log(bankAccounts.account2.balance); // 2000