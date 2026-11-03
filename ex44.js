let num = Number(prompt("Entre com o logaritmando:", "8")) || 8;
let base = Number(prompt("Entre com a base:", "2")) || 2;

let logaritmo = Math.log(num) / Math.log(base);
console.log("Logaritmo de " + num + " na base " + base + " e: " + logaritmo);