let a = Number(prompt("Digite o coeficiente A:", "1")) || 1;
let b = Number(prompt("Digite o coeficiente B:", "-5")) || -5;
let c = Number(prompt("Digite o coeficiente C:", "6")) || 6;

if (a === 0) {
  console.log("Nao e uma equacao do 2o grau.");
} else {
  let delta = Math.pow(b, 2) - (4 * a * c);
  if (delta < 0) {
    console.log("Nao existem raizes reais (Delta negativo).");
  } else if (delta === 0) {
    let x = -b / (2 * a);
    console.log("Raiz unica: x = " + x);
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Raizes reais: x1 = " + x1 + " e x2 = " + x2);
  }
}