let nomeRemedio = prompt("Digite o nome do medicamento:", "Dipirona") || "Dipirona";
let preco = Number(prompt("Digite o preco do medicamento:", "60")) || 60;

let precoFinal = preco > 50 ? preco * 0.88 : preco;
console.log("Medicamento: " + nomeRemedio + " | Preco final: R$ " + precoFinal.toFixed(2));