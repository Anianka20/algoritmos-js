let idade = Number(prompt("Digite a idade do nadador:", "14")) || 14;

if (idade < 5) {
  console.log("Sem categoria (menor de 5 anos).");
} else if (idade <= 7) {
  console.log("Categoria: Infantil A");
} else if (idade <= 10) {
  console.log("Categoria: Infantil B");
} else if (idade <= 13) {
  console.log("Categoria: Juvenil A");
} else if (idade <= 17) {
  console.log("Categoria: Juvenil B");
} else {
  console.log("Categoria: Senior");
}