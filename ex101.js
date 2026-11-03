let num = Number(prompt("Digite um numero:", "50")) || 50;

if (num > 20 && num < 90) {
  console.log("O numero " + num + " esta na faixa entre 20 e 90.");
} else {
  console.log("O numero " + num + " NAO esta na faixa entre 20 e 90.");
}