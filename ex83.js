let num = Number(prompt("Digite um numero:", "9")) || 9;

if (num >= 0) {
  console.log("Raiz quadrada: " + Math.sqrt(num));
} else {
  console.log("Quadrado do numero: " + Math.pow(num, 2));
}