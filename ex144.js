let saldoMedio = Number(prompt("Digite o saldo medio do cliente:", "1200")) || 1200;
let credito = 0;

if (saldoMedio > 3000) {
  credito = saldoMedio * 0.50;
} else if (saldoMedio >= 1001) {
  credito = saldoMedio * 0.40;
} else if (saldoMedio >= 501) {
  credito = saldoMedio * 0.30;
} else {
  credito = 0;
}

console.log("Saldo medio: R$ " + saldoMedio.toFixed(2));
console.log("Valor do credito: R$ " + credito.toFixed(2));