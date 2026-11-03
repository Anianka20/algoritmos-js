let c = prompt("Digite palavra 1:", "TESTANDO") || "TESTANDO";
let c1 = prompt("Digite palavra 2:", "UAL") || "UAL";

console.log("tamanho da 1 palavra: " + c.length);
console.log("concatenando sem armazenar: " + (c + c1));

let d = c;
console.log("o conteudo de d: " + d);

let d1 = c + c1;
console.log("concatenacao: " + d1);
console.log("primeiro caractere: " + c.charAt(0));
console.log("ultimo caractere: " + c.charAt(c.length - 1));
console.log("todo menos o primeiro: " + c.substring(1));
console.log("o terceiro elemento: " + c.charAt(3));
console.log("os tres primeiros elementos: " + c.substring(0, 3));
console.log("os tres ultimos elementos: " + c.slice(-3));