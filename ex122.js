let a = Number(prompt("Digite o lado A:", "5")) || 5;
let b = Number(prompt("Digite o lado B:", "7")) || 7;
let c = Number(prompt("Digite o lado C:", "10")) || 10;

if (a < b + c && b < a + c && c < a + b) {
    console.log("Os lados PODEM formar un triangulo.");
} else {
    console.log("Os lados NAO podem formar um tiangulo.");
}