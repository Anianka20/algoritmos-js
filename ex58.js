let xnum1 = Number(prompt("Digite o valor de xnum1:", "2")) || 2;
let xnum2 = Number(prompt("Digite o valor de xnum2:", "4")) || 4;
let xnum3 = Number(prompt("Digite o valor de xnum3:", "6")) || 6;

let x = xnum1 + (xnum2 / (xnum3 + xnum1)) + 2 * (xnum1 - xnum2) + Math.log(64) / Math.LN2;
console.log("x = " + x.toFixed(2));