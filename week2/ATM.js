let balance = 10000;
let correctPin = "1234";
let loggedIn = false;

function atm(action) {

    let pin = document.getElementById("pin").value;
    let amount = Number(document.getElementById("amount").value);
    let screen = document.getElementById("screen");

    if (action == "login") {

        if (pin == correctPin) {
            loggedIn = true;
            screen.innerHTML = "Login successful. Balance: Rs. " + balance;
        }
        else {
            screen.innerHTML = "Incorrect PIN";
        }

    }

    else if (action == "withdraw") {

    if (amount <= 0) {
        screen.innerHTML = "Enter a valid amount";
    }
    else if (amount % 100 != 0) {
        screen.innerHTML = "Amount must be a multiple of 100";
    }
    else if (amount > balance) {
        screen.innerHTML = "Insufficient balance";
    }
    else {
        balance = balance - amount;
        screen.innerHTML = "Withdraw successful. Remaining balance: Rs. " + balance;
    }

}

else if (action == "deposit") {

    if (amount <= 0) {
        screen.innerHTML = "Enter a valid amount";
    }
    else if (amount % 100 != 0) {
        screen.innerHTML = "Amount must be a multiple of 100";
    }
    else {
        balance = balance + amount;
        screen.innerHTML = "Deposit successful. Remaining balance: Rs. " + balance;
    }

}

    else if (action == "balance") {
        screen.innerHTML = "Your remaining balance is: Rs. " + balance;
    }
}