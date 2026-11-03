let dividendo = Number(prompt("Entre com o dividendo:", "17")) || 17;
let divisor = Number(prompt("Entre com o divisor:", "5")) || 5;

let quociente = Math.floor(dividendo / divisor);
let resto = dividendo % divisor;

console.log("Dividendo: " + dividendo);
console.log("Divisor: " + divisor);
console.log("Quociente: " + quociente);
console.log("Resto: " + resto);