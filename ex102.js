let num = Number(prompt("Digite um numero:", "20")) || 20;

if (num > 20) {
  console.log("O numero e maior do que 20.");
} else if (num < 20) {
  console.log("O numero e menor do que 20.");
} else {
  console.log("O numero e igual a 20.");
}