let depositoMensal = Number(prompt("Digite o valor da aplicacao mensal:", "100")) || 100;
let taxa = Number(prompt("Digite a taxa mensal (ex: 0.01 para 1%):", "0.01")) || 0.01;
let meses = Number(prompt("Digite o numero de meses:", "12")) || 12;

let valorAcumulado = depositoMensal * ((Math.pow(1 + taxa, meses) - 1) / taxa);
console.log("Valor acumulado ao final do periodo: R$ " + valorAcumulado.toFixed(2));