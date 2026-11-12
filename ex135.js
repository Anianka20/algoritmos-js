let nome = prompt("Digite o nome:", "Carlos") || "Carlos";
let idade = Number(prompt("Digite a idade:", "32")) || 32;
let valor = 0;

if (idade <= 10) {
  valor = 30.00;
} else if (idade <= 29) {
  valor = 60.00;
} else if (idade <= 45) {
  valor = 120.00;
} else if (idade <= 59) {
  valor = 150.00;
} else if (idade <= 65) {
  valor = 250.00;
} else {
  valor = 400.00;
}

console.log(nome + " pagara R$ " + valor.toFixed(2));