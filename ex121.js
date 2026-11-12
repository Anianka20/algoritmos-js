let n1 = Number(prompt("Digite o 1o numero:", "10")) || 10;
let n2 = Number(prompt("Digite o 2o numero:", "45")) || 45;
let n3 = Number(prompt("Digite o 3o numero:", "3")) || 3;
let n4 = Number(prompt("Digite o 4o numero:", "28")) || 28;
let n5 = Number(prompt("Digite o 5o numero:", "19")) || 19;

let maior = Math.max(n1, n2, n3, n4, n5);
let menor = Math.min(n1, n2, n3, n4, n5);

console.log("Maior:" + maior);
console.log("Menor:" + menor);