let num = Number(prompt("Digite um numero real:", "15.75")) || 15.75;

let parteInteira = Math.trunc(num);
let parteFracionaria = num - parteInteira;

console.log("Numero: " + num);
console.log("Parte inteira: " + parteInteira);
console.log("Parte fracionaria: " + parteFracionaria.toFixed(4));