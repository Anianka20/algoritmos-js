let base = Number(prompt("Digite a base:", "4")) || 4;
let altura = Number(prompt("Digite a altura:", "3")) || 3;

let perimetro = 2 * (base + altura);
let area = base * altura;
let diagonal = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));

console.log("Perimetro: " + perimetro);
console.log("Area: " + area);
console.log("Diagonal: " + diagonal);