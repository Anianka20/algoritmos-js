let num = Number(prompt("Digite um numero:", "45")) || 45;

if (num >= 20 && num <= 90) {
  console.log("O numero " + num + " ESTA compreendido entre 20 e 90.");
} else {
  console.log("O numero " + num + " NAO esta compreendido entre 20 e 90.");
}