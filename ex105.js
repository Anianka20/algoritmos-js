let sigla = (prompt("Digite a sigla do estado (RJ, SP, MG, etc.):", "RJ") || "RJ").toUpperCase();

if (sigla === "RJ") {
  console.log("Carioca");
} else if (sigla === "SP") {
  console.log("Paulista");
} else if (sigla === "MG") {
  console.log("Mineiro");
} else {
  console.log("Outros estados");
}