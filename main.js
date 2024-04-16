#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let answer = await inquirer.prompt([
    {
        message: "Please enter any scentence of which elements you want to count :",
        type: "input",
        name: "scentence",
    }
]);
let count = answer.scentence.trim().split(" ");
console.log(count);
console.log(`The number of elements are :  ${chalk.bgGreen.bold(count.length)}`);
