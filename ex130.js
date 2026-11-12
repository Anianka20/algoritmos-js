let valorCompra = Number(prompt("Digite o valor de compra do produto:", "15")) || 15;
let valorVenda;

if (valorCompra < 20) {
  valorVenda = valorCompra * 1.45;
} else {
  valorVenda = valorCompra * 1.30;
}

console.log("Valor de venda: R$ " + valorVenda.toFixed(2));