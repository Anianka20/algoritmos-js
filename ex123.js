let a = Number(prompt("Digite o lado A:", "6")) || 6;
let b = Number(prompt("Digite o lado B:", "6")) || 6;
let c = Number(prompt("Digite o lado C:", "4")) || 4;

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log("Triangulo Equilatero.");
    } else if (a === b || a === c || b === c) {
        console.log("Triangulo Isosceles.");
    } else {
        console.log("Triangulo Escaleno.");
    }
} else {
    console.log("Nao formam um triangulo.");
}