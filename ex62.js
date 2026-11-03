let preco = Number(prompt("Digite o valor do produto:", "100")) || 100;
let novoPreco = preco * 0.91;

console.log("Preco com 9% de desconto: R$ " + novoPreco.toFixed(2));