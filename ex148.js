let dia = Number(prompt("Digite um numero de 1 a 7:", "5")) || 5;

const dias = [
  "Domingo", "Segunda-feira", "Terca-feira", "Quarta-feira",
  "Quinta-feira", "Sexta-feira", "Sabado"
];

if (dia >= 1 && dia <= 7) {
  console.log("Dia da semana: " + dias[dia - 1]);
} else {
  console.log("Nao existe dia da semana com esse numero.");
}