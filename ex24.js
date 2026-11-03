let num = Number(prompt("Digite um numero de 3 algarismos:", "456")) || 456;
let c = Math.floor(num / 100);
let d = Math.floor((num % 100) / 10);
let u = num % 10;

console.log("Numero: " + num);
console.log("Centena: " + c);
console.log("Dezena: " + d);
console.log("Unidade: " + u);