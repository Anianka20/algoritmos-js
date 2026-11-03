let num = Number(prompt("Digite um numero:", "21")) || 21;

if (num % 3 === 0 && num % 7 === 0) {
  console.log(num + " e divisivel por 3 e por 7 simultaneamente.");
} else {
  console.log(num + " NAO e divisivel por 3 e por 7 simultaneamente.");
}