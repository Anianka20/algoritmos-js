let nome = prompt("Digite um nome completo:", "Jose da Silva") || "Jose da Silva";

if (nome.substring(0, 4).toUpperCase() === "JOSE") {
  console.log("Nome comeca com Jose: " + nome);
} else {
  console.log("Nome nao comeca com Jose.");
}