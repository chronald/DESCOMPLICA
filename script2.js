let rlSync = require("readline-sync");
let nome = rlSync.question("Qual é seu nome?\n ");

let sobrenome = rlSync.question("Qual é seu sobrenome?\n")
console.log(`seu nome e sobrenome é: ${nome} ${sobrenome}`)