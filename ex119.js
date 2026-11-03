let a = Number(prompt("Digite o numero 1:", "14")) || 14;
let b = Number(prompt("Digite o numero 2:", "50")) || 50;
let c = Number(prompt("Digite o numero 3:", "32")) || 32;

let lista = [a, b, c];
lista.sort((x, y) => y - x);

console.log("Ordem decrescente: " + lista.join(", "));