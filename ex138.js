let mes = Number(prompt("Digite um numero de 1 a 12:", "11")) || 11;

const meses = [
  "Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

if (mes >= 1 && mes <= 12) {
  console.log("Mes: " + meses[mes - 1]);
} else {
  console.log("Nao existe mes com este numero.");
}