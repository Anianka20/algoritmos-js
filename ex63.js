let valorHora = Number(prompt("Digite o valor da hora-aula:", "25")) || 25;
let numAulas = Number(prompt("Digite o numero de aulas dadas:", "40")) || 40;
let percInss = Number(prompt("Digite o percentual de desconto do INSS (%):", "11")) || 11;

let salarioBruto = valorHora * numAulas;
let totalDesconto = (percInss / 100) * salarioBruto;
let salarioLiquido = salarioBruto - totalDesconto;

console.log("Salario liquido: R$ " + salarioLiquido.toFixed(2));