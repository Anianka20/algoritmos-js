let nome = (prompt("Digite o nome do aluno:", "Isabella") || "Isabella").trim();
let inicial = nome.charAt(0).toUpperCase();

if (inicial >= "A" && inicial <= "K") {
  console.log(nome + ": Sala 101");
} else if (inicial >= "L" && inicial <= "N") {
  console.log(nome + ": Sala 102");
} else if (inicial >= "O" && inicial <= "Z") {
  console.log(nome + ": Sala 103");
} else {
  console.log("Inicial invalida.");
}