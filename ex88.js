let num = Number(prompt("Digite um numero:", "15")) || 15;

if (num % 3 === 0) {
  console.log("O numero " + num + " e multiplo de 3.");
} else {
  console.log("O numero " + num + " NAO e multiplo de 3.");
}