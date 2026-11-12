let palavra = (prompt("Digite uma palavra:", "CASA") || "CASA").trim().toUpperCase();
let tam = palavra.length;
const vogais = ["A", "E", "I", "O", "U"];

if (tam % 2 !== 0) {
  let meio = palavra.charAt(Math.floor(tam / 2));
  console.log("Letra central: " + meio + (vogais.includes(meio) ? " (E vogal)" : " (Nao e vogal)"));
} else {
  let m1 = palavra.charAt((tam / 2) - 1);
  let m2 = palavra.charAt(tam / 2);
  console.log("Letras centrais: " + m1 + m2);
}