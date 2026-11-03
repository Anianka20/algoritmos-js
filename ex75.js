let pesoKg = Number(prompt("Digite o peso em quilos:", "65")) || 65;

let pesoGramas = pesoKg * 1000;
let novoPesoGramas = pesoGramas * 1.12;

console.log("Peso em gramas: " + pesoGramas + " g");
console.log("Novo peso se engordar 12%: " + novoPesoGramas.toFixed(2) + " g");