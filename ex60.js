let a1 = Number(prompt("Digite o primeiro termo da PA:", "2")) || 2;
let r = Number(prompt("Digite a razao da PA:", "3")) || 3;

let a10 = a1 + (10 - 1) * r;
console.log("O 10o termo da PA e: " + a10);