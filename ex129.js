let salario = Number(prompt("Digite o salario:", "1500")) || 1500;
let desconto = 0;

if (salario <= 600) {
  desconto = 0;
} else if (salario <= 1200) {
  desconto = salario * 0.20;
} else if (salario <= 2000) {
  desconto = salario * 0.25;
} else {
  desconto = salario * 0.30;
}

console.log("Desconto do INSS: R$ " + desconto.toFixed(2));