let num = Number(prompt("Digite um numero:", "10")) || 10;

if (num > 0) {
  console.log("Resultado (+8): " + (num + 8));
} else {
  console.log("Resultado (-5): " + (num - 5));
}