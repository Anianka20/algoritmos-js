let anoAtual = Number(prompt("Digite o ano atual:", "2026")) || 2026;
let anoNasc = Number(prompt("Digite o ano de nascimento:", "2005")) || 2005;
let fezAniv = prompt("Ja fez aniversario este ano? (S/N):", "S") || "S";

let idade;
if (fezAniv.trim().toUpperCase() === "S") {
  idade = anoAtual - anoNasc;
} else {
  idade = anoAtual - anoNasc - 1;
}

console.log("A idade da pessoa e: " + idade + " anos.");