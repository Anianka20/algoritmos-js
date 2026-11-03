let nome1 = prompt("Digite o primeiro nome:", "Mariana") || "Mariana";
let nome2 = prompt("Digite o segundo nome:", "Beatriz") || "Beatriz";

if (nome1.localeCompare(nome2) <= 0) {
  console.log("Ordem alfabetica: " + nome1 + ", " + nome2);
} else {
  console.log("Ordem alfabetica: " + nome2 + ", " + nome1);
}