let j1 = Number(prompt("Pontos do jogador 1:", "40")) || 40;
let j2 = Number(prompt("Pontos do jogador 2:", "35")) || 35;
let j3 = Number(prompt("Pontos do jogador 3:", "45")) || 45;

let pontos = [j1, j2, j3].sort((a, b) => b - a);
let soma = j1 + j2 + j3;

console.log("Pontos em ordem decrescente: " + pontos.join(", "));

if (soma > 100) {
  let media = soma / 3;
  console.log("Equipe classificada! Media: " + media.toFixed(2));
} else {
  console.log("Equipe desclassificada.");
}