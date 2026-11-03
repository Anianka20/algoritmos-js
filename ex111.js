let n1 = Number(prompt("Digite o primeiro numero:", "12")) || 12;
let n2 = Number(prompt("Digite o segundo numero:", "25")) || 25;

if (n1 > n2) {
  console.log("Maior: " + n1);
} else {
  console.log("Maior: " + n2);
}