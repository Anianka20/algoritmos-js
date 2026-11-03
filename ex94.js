let salario = Number(prompt("Digite o salario bruto:", "3000")) || 3000;
let prestacao = Number(prompt("Digite o valor da prestacao:", "800")) || 800;

let limite = salario * 0.30;

if (prestacao <= limite) {
  console.log("Emprestimo pode ser concedido.");
} else {
  console.log("Emprestimo NAO pode ser concedido. Limite maximo: R$ " + limite.toFixed(2));
}