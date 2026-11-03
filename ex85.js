let num = Number(prompt("Digite um numero:", "-7")) || -7;

if (num > 0) {
  console.log("O numero e POSITIVO.");
} else if (num < 0) {
  console.log("O numero e NEGATIVO.");
} else {
  console.log("O numero e NULO (zero).");
}