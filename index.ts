#! /usr/bin/env node

import inquirer from "inquirer"; //Import the inquirer (To use it) Just like we order hammer from daraz and use it.
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

// const rainbow = chalkAnimation.rainbow("Hi Welcome to Muzammil Calculator");

// beep([1000, 500, 2000]);
// let myMessage = chalkAnimation.("Welcome to CLI calculator!!");
console.log("");
console.log("\u0007");
let msg =
  "--------------------------------------------Welcome to Muzammil's Calculator----------------------------------------------";

chalkAnimation.radar(msg);
setTimeout(() => {
  console.log(
    chalk.bgBlueBright("Enter your first number and then second number")
  );
}, 9000);

const answer = await inquirer.prompt([
  //here await means to tell the typescript to wait until the user gives input.
  { message: "First Number", type: "number", name: "firstNumber" }, //in simplle words it means the input value.
  { message: "Second Number", type: "number", name: "secondNumber" },
  {
    message: chalk.bgGreen("Select one the operators to perform the operation"),
    type: "list",
    name: "operator",
    choices: [
      //array is made because of different choices
      chalk.green("Addition"),
      chalk.yellow("Subraction"),
      chalk.redBright("Multiplication"),
      chalk.cyan("Division"),
      chalk.blue("Modulus"),
      chalk.grey("Exponent"),
    ], //conatins different operators to perform actions hence array was used.
  },
]); //take input from user (function of await)

// conditions

if (answer.operator == chalk.green("Addition")) {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === chalk.yellow("Subraction")) {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === chalk.redBright("Multiplication")) {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === chalk.cyan("Division")) {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === chalk.blue("Modulus")) {
  console.log(answer.firstNumber % answer.secondNumber);
} else if (answer.operator === chalk.grey("Exponent")) {
  console.log(answer.firstNumber ** answer.secondNumber);
} else {
  console.log("\u0007");
  console.log("Please choose valid operator");
}
