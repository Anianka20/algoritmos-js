let n1 = Number(prompt("Digite o primeiro numero:", "40")) || 40;
let n2 = Number(prompt("Digite o segundo numero:", "15")) || 15;

if (n1 < n2) {
  console.log("Menor: " + n1);
} else {
  console.log("Menor: " + n2);
}