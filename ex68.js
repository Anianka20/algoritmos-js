let a = Number(prompt("Digite o valor de A:", "5")) || 5;
let b = Number(prompt("Digite o valor de B:", "10")) || 10;

console.log("Antes da troca: A = " + a + ", B = " + b);

let aux = a;
a = b;
b = aux;

console.log("Apos a troca: A = " + a + ", B = " + b);