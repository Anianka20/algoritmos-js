let num = Number(prompt("Digite um numero de 4 digitos:", "1642")) || 1642;
let doisPrimeiros = Math.floor(num / 100);

if (doisPrimeiros % 4 === 0) {
  console.log("Os dois primeiros digitos (" + doisPrimeiros + ") formam um multiplo de 4.");
} else {
  console.log("Os dois primeiros digitos (" + doisPrimeiros + ") NAO formam um multiplo de 4.");
}