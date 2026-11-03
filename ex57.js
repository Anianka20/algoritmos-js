let pr1 = Number(prompt("Digite a nota da prova 1:", "6.8")) || 6.8;
let pr2 = Number(prompt("Digite a nota da prova 2:", "7.4")) || 7.4;

let media = (pr1 + pr2) / 2;

console.log("Media real: " + media.toFixed(2));
console.log("Media truncada: " + Math.trunc(media));
console.log("Media arredondada: " + Math.round(media));