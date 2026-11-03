let a = Number(prompt("Digite o primeiro numero:", "14")) || 14;
let b = Number(prompt("Digite o segundo numero:", "28")) || 28;

if (a > b) {
  console.log("O maior numero e: " + a);
} else if (b > a) {
  console.log("O maior numero e: " + b);
} else {
  console.log("Os dois numeros sao IGUAIS.");
}