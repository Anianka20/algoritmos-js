let raio = Number(prompt("Digite o raio da circunferencia:", "5")) || 5;

let perimetro = 2 * Math.PI * raio;
let area = Math.PI * Math.pow(raio, 2);

console.log("Perimetro: " + perimetro.toFixed(2));
console.log("Area: " + area.toFixed(2));