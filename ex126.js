let num = Number(prompt("Digite um numero:", "750")) || 750;

if (num === 5 || num === 200 || num === 400) {
    console.log("O numero e igual a " + num + ".");
} else if (num >= 500 && num <= 1000) {
    console.log("O numero esta no intervalo entre 500 a 1000.");
} else {
    console.log("O numero esta fora dos escopos anteriores.");
}