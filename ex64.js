let c = Number(prompt("Digite a temperatura em Celsius:", "25")) || 25;
let f = (9 * c + 160) / 5;

console.log("Temperatura em Fahrenheit: " + f.toFixed(2) + " F");