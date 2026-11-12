let nome = prompt("Digite o nome do aluno:", "Isabella") || "Isabella";
let pr1 = Number(prompt("Digite a nota da PR1:", "8.5")) || 8.5;
let pr2 = Number(prompt("Digite a nota da PR2:", "7.5")) || 7.5;

let media = Math.trunc((pr1 + pr2) / 2);

console.log("Aluno: " + nome);
console.log("PR1: " + pr1 + " | PR2: " + pr2 + " | Media: " + media);

if (media >= 7) {
  console.log("Situacao: Aprovado");
} else if (media < 3) {
  console.log("Situacao: Reprovado");
} else {
  console.log("Situacao: Prova Final");
}