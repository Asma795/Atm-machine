#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green("\n\tWelcome to Asma\'s atm\n"));
let myBalance = Math.floor(Math.random() * 10000 + 3000);
let myPin = 1982;
//! Inserting pin code
let PinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (PinAns.pin === myPin) {
    console.log(chalk.yellow(`Login Successful. Your balance is ${myBalance}`));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please Select an operation",
            choices: ["fast cash", "withdraw", "check balance"],
        },
    ]);
    // ! if user select withdraw
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount you want to withdraw",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            let Balance = myBalance - amountAns.amount;
            console.log(chalk.green(`Remaining Balance: ${Balance}`));
        }
        else {
            console.log(chalk.red("You have insufficient balance to"));
        }
    }
    // !if user select  fast cash
    if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "Enter the amount you want to fast cash",
                choices: ["1000", "2000", "5000", "10000"],
            },
        ]);
        if (fastCashAns.amount <= myBalance) {
            let Balance2 = myBalance - fastCashAns.amount;
            console.log(chalk.green("Transaction Successful. Your balance is ", Balance2));
        }
        else {
            console.log(chalk.red("Sorry to say, You have insufficient balance"));
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(chalk.green(myBalance));
    }
}
else {
    console.log(chalk.red("Your pin is incorrect"));
}
console.log(chalk.cyan(`\n\t----------------------------\n\tThanks for using our system.\n\t----------------------------`));
