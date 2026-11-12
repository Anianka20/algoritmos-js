let verbo = (prompt("Digite um verbo no infinitivo:", "estudar") || "estudar").trim().toLowerCase();
let terminacao = verbo.slice(-2);

if (terminacao === "ar") {
  console.log("Verbo da 1a conjugacao.");
} else if (terminacao === "er") {
  console.log("Verbo da 2a conjugacao.");
} else if (terminacao === "ir") {
  console.log("Verbo da 3a conjugacao.");
} else {
  console.log("Verbo nao esta no infinitivo.");
}