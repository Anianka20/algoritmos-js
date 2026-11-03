let a = Number(prompt("Digite o primeiro numero:", "35")) || 35;
let b = Number(prompt("Digite o segundo numero:", "10")) || 10;
let c = Number(prompt("Digite o terceiro numero:", "22")) || 22;

let maior = Math.max(a, b, c);
let menor = Math.min(a, b, c);

console.log("Maior: " + maior);
console.log("Menor: " + menor);