let num = Number(prompt("Digite um numero de 3 algarismos:", "456")) || 456;
let centena = Math.floor(num / 100);

if (centena % 2 === 0) {
  console.log("O algarismo da centena (" + centena + ") e PAR.");
} else {
  console.log("O algarismo da centena (" + centena + ") e IMPAR.");
}