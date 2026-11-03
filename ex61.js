let a1 = Number(prompt("Digite o primeiro termo da PG:", "2")) || 2;
let q = Number(prompt("Digite a razao da PG:", "3")) || 3;

let a5 = a1 * Math.pow(q, 4);
console.log("O 5o termo da PG e: " + a5);