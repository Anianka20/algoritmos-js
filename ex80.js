let qtdFitas = Number(prompt("Digite a quantidade de fitas:", "1000")) || 1000;
let valorAluguel = Number(prompt("Digite o valor cobrado por aluguel:", "5")) || 5;

let fitasAlugadasMes = qtdFitas / 3;
let faturamentoAnual = fitasAlugadasMes * valorAluguel * 12;
let multasMes = (fitasAlugadasMes / 10) * (valorAluguel * 0.10);
let fitaFinal = (qtdFitas * 1.08) - (qtdFitas * 0.02);

console.log("Faturamento anual: R$ " + faturamentoAnual.toFixed(2));
console.log("Ganho com multas por mes: R$ " + multasMes.toFixed(2));
console.log("Quantidade de fitas no final do ano: " + Math.round(fitaFinal));