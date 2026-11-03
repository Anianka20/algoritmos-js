let angulo = Number(prompt("Digite um angulo em graus:", "45")) || 45;
let rad = (angulo * Math.PI) / 180;

console.log("Seno: " + Math.sin(rad).toFixed(4));
console.log("Cosseno: " + Math.cos(rad).toFixed(4));
console.log("Tangente: " + Math.tan(rad).toFixed(4));
console.log("Secante: " + (1 / Math.cos(rad)).toFixed(4));
console.log("Cossecante: " + (1 / Math.sin(rad)).toFixed(4));
console.log("Cotangente: " + (1 / Math.tan(rad)).toFixed(4));