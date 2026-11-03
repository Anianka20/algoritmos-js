let conta = Number(prompt("Digite o numero da conta (3 digitos):", "235")) || 235;

let c = Math.floor(conta / 100);
let d = Math.floor((conta % 100) / 10);
let u = conta % 10;
let inverso = (u * 100) + (d * 10) + c;

let soma = conta + inverso;
let sc = Math.floor(soma / 100);
let sd = Math.floor((soma % 100) / 10);
let su = soma % 10;

let total = (sc * 1) + (sd * 2) + (su * 3);
let digitoVerificador = total % 10;

console.log("Numero da conta: " + conta);
console.log("Digito verificador: " + digitoVerificador);