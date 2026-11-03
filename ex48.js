let sm = Number(prompt("Digite o valor do salario minimo:", "1412")) || 1412;
let qtdKw = Number(prompt("Digite a quantidade de quilowatts:", "100")) || 100;

let precoKw = sm / 700;
let valorPagar = precoKw * qtdKw;
let valorDesconto = valorPagar * 0.90;

console.log("Preco do quilowatt: R$ " + precoKw.toFixed(2));
console.log("Valor a ser pago: R$ " + valorPagar.toFixed(2));
console.log("Valor com 10% de desconto: R$ " + valorDesconto.toFixed(2));