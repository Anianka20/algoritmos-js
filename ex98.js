let idade = Number(prompt("Digite a idade:", "22")) || 22;

if (idade < 18) {
  console.log("Menor de idade.");
} else if (idade >= 18 && idade < 65) {
  console.log("Maior de idade.");
} else {
  console.log("Pessoa idosa.");
}