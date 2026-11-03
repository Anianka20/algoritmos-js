let num = Number(prompt("Digite um numero entre 0 e 59:", "59")) || 59;
let sucessor = (num + 1) % 60;

console.log("Numero: " + num);
console.log("Sucessor ciclico: " + sucessor);