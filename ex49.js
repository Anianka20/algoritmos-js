let nome = prompt("Entre com um nome:", "ISABELLA") || "ISABELLA";

console.log("Todo o nome: " + nome);
console.log("Primeiro caractere: " + nome.charAt(0));
console.log("Ultimo caractere: " + nome.charAt(nome.length - 1));
console.log("Do primeiro ate o terceiro: " + nome.substring(0, 3));
console.log("Quarto caractere: " + nome.charAt(3));