function Checking(amount)
{
    this.balance = amount; // property
    this.deposit = deposit; // function
    this.withdraw = withdraw; // function
    this.toString = toString; // function
}

function deposit(amount)
{
    this.balance += amount;
}

function withdraw(amount)
{
    if (amount <= this.balance)
    {
        this.balance -= amount;
    }

    if (amount > this.balance)
    {
        console.log("Dana tidak mencukupi");
    }
}

function toString()
{
    return "Dana: " + this.balance;
}

// Implementasi kode
var account = new Checking(500);
account.deposit(1000);
console.log(account.toString()); // dana: 1500

account.withdraw(750);
console.log(account.toString()); // dana: 750

account.withdraw(800); // tampil "Dana tidak mencukupi"
console.log(account.toString()); // dana: 750
