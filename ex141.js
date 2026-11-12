let p1 = Number(prompt("Digite os pontos do 1o finalista:", "85")) || 85;
let p2 = Number(prompt("Digite os pontos do 2o finalista:", "92")) || 92;
let p3 = Number(prompt("Digite os pontos do 3o finalista:", "78")) || 78;

let podio = [p1, p2, p3].sort((a, b) => b - a);

console.log("1o lugar (Campeao): " + podio[0] + " pontos");
console.log("2o lugar: " + podio[1] + " pontos");
console.log("3o lugar: " + podio[2] + " pontos");