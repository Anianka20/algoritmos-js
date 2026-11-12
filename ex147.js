let destino = Number(prompt("Destino (1-Norte, 2-Nordeste, 3-Centro-Oeste, 4-Sul):", "1")) || 1;
let retorno = (prompt("Inclui ida e volta? (S/N):", "S") || "S").toUpperCase();

const ida = [0, 500, 350, 350, 300];
const idaVolta = [0, 900, 650, 600, 550];

let preco = retorno === "S" ? idaVolta[destino] : ida[destino];

if (preco) {
  console.log("Valor da passagem: R$ " + preco.toFixed(2));
} else {
  console.log("Destino invalido.");
}