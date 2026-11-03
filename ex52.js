let lado = Number(prompt("Digite o lado do quadrado:", "4")) || 4;

let perimetro = 4 * lado;
let area = Math.pow(lado, 2);
let diagonal = lado * Math.sqrt(2);

console.log("Perimetro: " + perimetro);
console.log("Area: " + area);
console.log("Diagonal: " + diagonal.toFixed(2));