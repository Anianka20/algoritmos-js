let prato = Number(prompt("Prato (1-Vegetariano, 2-Peixe, 3-Frango, 4-Carne):", "3")) || 3;
let sobremesa = Number(prompt("Sobremesa (1-Abacaxi, 2-Sorvete diet, 3-Mousse diet, 4-Mousse chocolate):", "1")) || 1;
let bebida = Number(prompt("Bebida (1-Cha, 2-Suco laranja, 3-Suco melao, 4-Refrigerante diet):", "2")) || 2;

const calPratos = [0, 180, 230, 250, 350];
const calSobremesas = [0, 75, 110, 170, 200];
const calBebidas = [0, 20, 70, 100, 65];

let totalCalorias = (calPratos[prato] || 0) + (calSobremesas[sobremesa] || 0) + (calBebidas[bebida] || 0);
console.log("Total de calorias da refeicao: " + totalCalorias + " cal");