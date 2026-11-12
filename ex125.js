let idade = Number(prompt("Digite a idade:", "19")) || 19;

if (idade < 16) {
    console.log("Nao-eleitor.");
} else if (idade >= 18 && idade <= 65) {
    console.log("Eleitor obrigatorio.");
} else {
    console.log("Eleitor facultativo.");
}