let num = Number(prompt("Entre com um numero de 3 digitos:", "123")) || 123;
let c = Math.floor(num / 100);
let d = Math.floor((num % 100) / 10);
let u = num % 10;

let invertido = (u * 100) + (d * 10) + c;
console.log("Numero invertido: " + invertido);