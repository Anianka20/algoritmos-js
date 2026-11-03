let nome = prompt("Digite o nome:", "Maria") || "Maria";
let sexo = (prompt("Digite o sexo (M/F):", "F") || "F").toUpperCase();
let idade = Number(prompt("Digite a idade:", "21")) || 21;

if (sexo === "F" && idade < 25) {
  console.log(nome + ": ACEITA");
} else {
  console.log(nome + ": NAO ACEITA");
}