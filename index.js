import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "UserId",
        message: "Kindly Enter Your UserId:"
    },
    {
        type: "number",
        name: "UserPin",
        message: "Kindly Enter Your UserPin:"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "savings"],
        message: "select your account type:",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "withdraw"],
        message: "select your transaction:",
    },
    {
        type: "list",
        name: "amount",
        choices: [500, 1000, 2000, 5000, 10000],
        message: "select your amount:"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
    },
]);
if (answers.UserId && answers.UserPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance > EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("Your remaining balance is ", remaining);
    }
    else {
        console.log("Insufficient Balance! Please Try Again!");
    }
}
//console.log(answer);
