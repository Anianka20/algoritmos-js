let deposito = Number(prompt("Digite o valor do deposito:", "1000")) || 1000;
let taxa = Number(prompt("Digite a taxa de juros (%):", "5")) || 5;

let rendimento = deposito * (taxa / 100);
let total = deposito + rendimento;

console.log("Rendimento: R$ " + rendimento.toFixed(2));
console.log("Valor total: R$ " + total.toFixed(2));