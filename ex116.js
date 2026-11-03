let a = Number(prompt("Digite o primeiro numero:", "5")) || 5;
let b = Number(prompt("Digite o segundo numero:", "18")) || 18;
let c = Number(prompt("Digite o terceiro numero:", "12")) || 12;

let maior = a;
if (b > maior) { maior = b; }
if (c > maior) { maior = c; }

console.log("O maior numero e: " + maior);