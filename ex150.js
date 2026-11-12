let angulo = Number(prompt("Digite um angulo em graus:", "60")) || 60;
let rad = (angulo * Math.PI) / 180;
let reduccion = ((angulo % 360) + 360) % 360;

if ((reduccion > 0 && reduccion < 90) || (reduccion > 180 && reduccion < 270)) {
  console.log("Seno do angulo: " + Math.sin(rad).toFixed(4));
} else {
  console.log("Cosseno do angulo: " + Math.cos(rad).toFixed(4));
}