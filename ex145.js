let percurso = Number(prompt("Digite o percurso em km:", "120")) || 120;
let tipo = (prompt("Digite o tipo de carro (A, B ou C):", "A") || "A").toUpperCase();

let consumo = 0;
if (tipo === "A") {
  consumo = percurso / 12;
} else if (tipo === "B") {
  consumo = percurso / 9;
} else if (tipo === "C") {
  consumo = percurso / 8;
} else {
  console.log("Tipo de carro invalido.");
}

if (consumo > 0) {
  console.log("Consumo estimado: " + consumo.toFixed(2) + " litros.");
}