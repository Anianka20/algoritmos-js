let a = Number(prompt("Digite o primeiro numero:", "8")) || 8;
let b = Number(prompt("Digite o segundo numero:", "25")) || 25;
let c = Number(prompt("Digite o terceiro numero:", "17")) || 17;

let nums = [a, b, c].sort((x, y) => x - y);

console.log("Menor: " + nums[0]);
console.log("Intermediario: " + nums[1]);
console.log("Maior: " + nums[2]);