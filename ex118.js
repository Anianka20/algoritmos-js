let a = Number(prompt("Digite o numero 1:", "20")) || 20;
let b = Number(prompt("Digite o numero 2:", "7")) || 7;
let c = Number(prompt("Digite o numero 3:", "15")) || 15;

let lista = [a, b, c];
lista.sort((x, y) => x - y);

console.log("Ordem crescente: " + lista.join(", "));