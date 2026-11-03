let data = Number(prompt("Digite a data no formato DDMMAA:", "251224")) || 251224;
let dia = Math.floor(data / 10000);
let mes = Math.floor((data % 10000) / 100);
let ano = data % 100;

console.log("Data completa: " + data);
console.log("Dia: " + dia);
console.log("Mes: " + mes);
console.log("Ano: " + ano);