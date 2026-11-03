let num1 = Number(prompt("Digite o primeiro numero:", "15")) || 15;
let num2 = Number(prompt("Digite o segundo numero:", "30")) || 30;

if (num1 === num2) {
  console.log("Os numeros sao IGUAIS.");
} else if (num1 > num2) {
  console.log("O maior numero e: " + num1);
} else {
  console.log("O maior numero e: " + num2);
}