let tempo = Number(prompt("Digite o tempo gasto na viagem (horas):", "2")) || 2;
let velocidade = Number(prompt("Digite a velocidade media (km/h):", "80")) || 80;

let distancia = tempo * velocidade;
let litrosUsados = distancia / 12;

console.log("Velocidade media: " + velocidade + " km/h");
console.log("Tempo gasto: " + tempo + " h");
console.log("Distancia percorrida: " + distancia + " km");
console.log("Litros utilizados: " + litrosUsados.toFixed(2) + " L");