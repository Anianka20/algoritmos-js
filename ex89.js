let num = Number(prompt("Digite um numero:", "20")) || 20;

let divisivel = false;

if (num % 10 === 0) {
  console.log(num + " e divisivel por 10.");
  divisivel = true;
}
if (num % 5 === 0) {
  console.log(num + " e divisivel por 5.");
  divisivel = true;
}
if (num % 2 === 0) {
  console.log(num + " e divisivel por 2.");
  divisivel = true;
}

if (!divisivel) {
  console.log(num + " nao e divisivel nem por 10, nem por 5, nem por 2.");
}