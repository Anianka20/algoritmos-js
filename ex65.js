let raio = Number(prompt("Digite o raio da lata:", "3")) || 3;
let altura = Number(prompt("Digite a altura da lata:", "10")) || 10;

let volume = Math.PI * Math.pow(raio, 2) * altura;
console.log("Volume da lata: " + volume.toFixed(2));