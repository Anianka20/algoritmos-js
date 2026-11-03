let data = Number(prompt("Digite a data no formato DDMMAA:", "251224")) || 251224;
let dia = Math.floor(data / 10000);
let mes = Math.floor((data % 10000) / 100);
let ano = data % 100;
let novaData = (mes * 10000) + (dia * 100) + ano;

console.log("Data no formato DDMMAA: " + data);
console.log("Data no formato MMDDAA: " + novaData);