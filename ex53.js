let a = Number(prompt("Digite a dimensao a:", "2")) || 2;
let b = Number(prompt("Digite a dimensao b:", "3")) || 3;
let c = Number(prompt("Digite a dimensao c:", "4")) || 4;

let diagonal = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
console.log("Diagonal do paralelepipedo: " + diagonal.toFixed(2));