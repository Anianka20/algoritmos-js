let b = Number(prompt("Digite o cateto 1:", "3")) || 3;
let c = Number(prompt("Digite o cateto 2:", "4")) || 4;

let a = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2));
console.log("A hipotenusa e: " + a);