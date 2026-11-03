let nome = prompt("Digite um nome:", "Jose") || "Jose";

if (nome.trim().toUpperCase() === "JOSE") {
  console.log("Nome correto: " + nome);
} else {
  console.log("Nome diferente de Jose.");
}