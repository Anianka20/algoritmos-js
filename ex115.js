let num1 = Number(prompt("Digite o primeiro numero:", "9")) || 9;
let num2 = Number(prompt("Digite o segundo numero:", "16")) || 16;

let menor = num1 < num2 ? num1 : num2;
let maior = num1 > num2 ? num1 : num2;

console.log("Quadrado do menor (" + menor + "): " + Math.pow(menor, 2));
console.log("Raiz quadrada do maior (" + maior + "): " + Math.sqrt(maior));