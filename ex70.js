let valorGasto = Number(prompt("Digite o valor da conta:", "150")) || 150;
let gorjeta = valorGasto * 0.10;
let total = valorGasto + gorjeta;

console.log("Valor das despesas: R$ " + valorGasto.toFixed(2));
console.log("Gorjeta do garcom (10%): R$ " + gorjeta.toFixed(2));
console.log("Total a ser pago: R$ " + total.toFixed(2));