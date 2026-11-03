let a = Number(prompt("Digite o primeiro numero:", "5")) || 5;
let b = Number(prompt("Digite o segundo numero:", "3")) || 3;

let quadradoDiferenca = Math.pow(a - b, 2);
let diferencaQuadrados = Math.pow(a, 2) - Math.pow(b, 2);

console.log("Quadrado da diferenca: " + quadradoDiferenca);
console.log("Diferenca dos quadrados: " + diferencaQuadrados);