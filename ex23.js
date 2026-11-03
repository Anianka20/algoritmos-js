let num = Number(prompt("Digite um numero de 3 digitos:", "123")) || 123;
let d = Math.floor((num % 100) / 10);

console.log("Numero digitado: " + num);
console.log("Algarismo da dezena: " + d);