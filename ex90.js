let num = Number(prompt("Digite um numero:", "25")) || 25;

if (num % 5 === 0) {
  console.log("O numero " + num + " e divisivel por 5.");
} else {
  console.log("O numero " + num + " NAO e divisivel por 5.");
}