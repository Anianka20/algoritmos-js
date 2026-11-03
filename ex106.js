let nome = prompt("Digite um nome:", "Ana") || "Ana";

if (nome.charAt(0).toUpperCase() === "A") {
  console.log("O nome comeca com A: " + nome);
} else {
  console.log("O nome NAO comeca com A.");
}