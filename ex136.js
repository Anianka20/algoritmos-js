let nome = prompt("Digite o nome do associado:", "Ana") || "Ana";
let idade = Number(prompt("Digite a idade:", "22")) || 22;
let mensalidade;

if (idade <= 10) {
  mensalidade = 30;
} else if (idade <= 29) {
  mensalidade = 60;
} else if (idade <= 45) {
  mensalidade = 120;
} else if (idade <= 59) {
  mensalidade = 150;
} else if (idade <= 65) {
  mensalidade = 250;
} else {
  mensalidade = 400;
}

console.log("Associado: " + nome + " | Idade: " + idade + " | Valor: R$ " + mensalidade.toFixed(2));