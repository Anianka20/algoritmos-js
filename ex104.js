let nome = prompt("Digite o nome:", "Lucas") || "Lucas";
let sexo = (prompt("Digite o sexo (M/F):", "M") || "M").toUpperCase();
let idade = Number(prompt("Digite a idade:", "18")) || 18;

if (sexo === "M" && idade === 18) {
  console.log(nome + ": APTO para o servico militar obrigatorio.");
} else {
  console.log(nome + ": NAO esta no perfil de alistamento obrigatorio.");
}