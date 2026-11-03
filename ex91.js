let num1 = Number(prompt("Digite o primeiro numero:", "7")) || 7;
let num2 = Number(prompt("Digite o segundo numero:", "5")) || 5;
let soma = num1 + num2;

if (soma > 10) {
  console.log("A soma e maior que 10: " + soma);
}