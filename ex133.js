let altura = Number(prompt("Digite a altura em metros (ex: 1.65):", "1.65")) || 1.65;
let sexo = (prompt("Digite o sexo (M/F):", "F") || "F").toUpperCase();

let pesoIdeal;
if (sexo === "M") {
  pesoIdeal = (72.7 * altura) - 58;
  console.log("Peso ideal (Masculino): " + pesoIdeal.toFixed(2) + " kg");
} else if (sexo === "F") {
  pesoIdeal = (62.1 * altura) - 44.7;
  console.log("Peso ideal (Feminino): " + pesoIdeal.toFixed(2) + " kg");
} else {
  console.log("Sexo invalido.");
}