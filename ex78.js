let n = Number(prompt("Digite o numero de lados do poligono:", "6")) || 6;
let diagonais = (n * (n - 3)) / 2;

console.log("Numero de lados: " + n);
console.log("Quantidade de diagonais: " + diagonais);