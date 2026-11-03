 let hora = Number(prompt("Digite as horas:", "3")) || 3;
let minuto = Number(prompt("Digite os minutos:", "25")) || 25;

let totalMinutos = (hora * 60) + minuto;
console.log("Minutos que se passaram desde o inicio do dia: " + totalMinutos + " min");