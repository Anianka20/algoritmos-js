let num = Number(prompt("Digite um numero inteiro:", "4")) || 4;

if (num % 2 === 0) {
  console.log("O numero " + num + " e PAR.");
} else {
  console.log("O numero " + num + " e IMPAR.");
}