let a = Number(prompt("Digite o primeiro numero:", "14")) || 14;
let b = Number(prompt("Digite o segundo numero:", "49")) || 49;

if (a >= b) {
  console.log("Ordem decrescente: " + a + ", " + b);
} else {
  console.log("Ordem decrescente: " + b + ", " + a);
}