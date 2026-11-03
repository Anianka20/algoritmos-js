let salMin = Number(prompt("Digite o valor do salario minimo:", "1412")) || 1412;
let salPessoa = Number(prompt("Digite o salario do funcionario:", "4236")) || 4236;

let qtdSalarios = salPessoa / salMin;
console.log("A pessoa ganha " + qtdSalarios.toFixed(2) + " salarios minimos.");