let municipio = prompt("Digite o nome do municipio:", "Manaus") || "Manaus";
let eleitores = Number(prompt("Digite a quantidade de eleitores aptos:", "50000")) || 50000;
let votosMaisVotado = Number(prompt("Digite os votos do candidato mais votado:", "22000")) || 22000;

if (eleitores > 20000 && votosMaisVotado <= (eleitores / 2)) {
  console.log(municipio + " tera segundo turno.");
} else {
  console.log(municipio + " NAO tera segundo turno.");
}