let valor = Number(prompt("Digite o valor da prestacao:", "200")) || 200;
let taxa = Number(prompt("Digite a taxa de juros (%):", "2")) || 2;
let tempo = Number(prompt("Digite o tempo de atraso em meses:", "3")) || 3;

let prestacao = valor + (valor * (taxa / 100) * tempo);
console.log("Valor da prestacao em atraso: R$ " + prestacao.toFixed(2));