let num1 = Number(prompt("Digite o primeiro numero:", "12")) || 12;
let num2 = Number(prompt("Digite o segundo numero:", "15")) || 15;
let soma = num1 + num2;

if (soma > 20) {
  console.log("Resultado (+8): " + (soma + 8));
} else {
  console.log("Resultado (-5): " + (soma - 5));
}