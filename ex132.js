let reais = Number(prompt("Digite o valor em Reais:", "100")) || 100;
let moeda = (prompt("Escolha a moeda (F - Franco, L - Libra, D - Dolar, M - Marco):", "D") || "D").toUpperCase();

let convertido = 0;

if (moeda === "F") {
  convertido = reais / 5.50;
  console.log("Valor em Francos Suicos: " + convertido.toFixed(2));
} else if (moeda === "L") {
  convertido = reais / 6.80;
  console.log("Valor em Libras Esterlinas: " + convertido.toFixed(2));
} else if (moeda === "D") {
  convertido = reais / 5.20;
  console.log("Valor em Dolares: " + convertido.toFixed(2));
} else if (moeda === "M") {
  convertido = reais / 2.90;
  console.log("Valor em Marcos Alemaes: " + convertido.toFixed(2));
} else {
  console.log("Opcao de moeda invalida.");
}