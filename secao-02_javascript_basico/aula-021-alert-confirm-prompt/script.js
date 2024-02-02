let confirma = confirm('Estudando programação?');
let motivo;

if (confirma) {

    console.log('Parabéns, bons estudos!');
}
else {

    motivo = prompt('Qual o motivo?');
    console.log(`Não estudo programação porque: ${motivo}`);
}
