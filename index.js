#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select operator",
        type: "list",
        name: "operators",
        choices: ["Addition", "subtraction", "multiplication", "division", "modulus"],
    },
]);
//conditional statment
if (answer.operators === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operators === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operators === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operators === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else if (answer.operators === "modulus") {
    console.log(answer.firstnumber % answer.secondnumber);
}
else {
    console.log("please select valid operator");
}
