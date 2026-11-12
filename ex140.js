let nome = (prompt("Digite o nome do cliente:", "Sofia") || "Sofia").trim();
let valorConta = Number(prompt("Digite o valor da conta:", "100")) || 100;
let primeiraLetra = nome.charAt(0).toUpperCase();

if (primeiraLetra === "A" || primeiraLetra === "D" || primeiraLetra === "M" || primeiraLetra === "S") {
  let valorComDesconto = valorConta * 0.70;
  console.log("Parabens " + nome + "! Total com 30% de desconto: R$ " + valorComDesconto.toFixed(2));
} else {
  console.log("Que pena. Nesta semana o desconto nao e para seu nome. Total: R$ " + valorConta.toFixed(2));
}