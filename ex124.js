let a = Number(prompt("Digite o lado A:", "3")) || 3;
let b = Number(prompt("Digite o lado B:", "4")) || 4;
let c = Number(prompt("Digite o lado C:", "5")) || 5;

let lados = [a, b, c].sort((x, y) => y - x);
let maior = lados [0];
let lado1 = lados [1];
let lado2 = lados [2];

if (maior < lado1 + lado2) {
    let maiorQuad = Math.pow(maior, 2);
    let somaQuad = Math.pow(lado1, 2) + Math.pow(lado2, 2);

    if (maiorQuad === somaQuad) {
        console.log("Triangulo Retangulo.");
    } else if (maiorQuad > somaQuad) {
        console.log("Triangulo Obtusangulo.");
    } else {
        console.log("Triangulo Acutangulo.");
    }
} else {
    console.log("Nao formam um triangulo.");
}