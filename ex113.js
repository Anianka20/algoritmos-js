let a = Number(prompt("Digite o primeiro numero:", "30")) || 30;
let b = Number(prompt("Digite o segundo numero:", "10")) || 10;

if (a <= b) {
  console.log("Ordem crescente: " + a + ", " + b);
} else {
  console.log("Ordem crescente: " + b + ", " + a);
}