/**
 * Entre 0 e 11: Bom dia;
 * Entre 12 e 17: Boa tarde;
 * Entre 18 e 23: Boa noite;
 */

const hora = 15;

if (hora >= 0 && hora < 12) {
    console.log('Bom dia!');
}
else if (hora < 18) {
    console.log('Boa tarde!');
}
else if (hora <= 23) {
    console.log('Boa noite!');
}
else {
    console.log('Hora não existe');
}

console.log();


/**
 * Sair de casa
 */

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa.');
}
else {
    console.log('Não vou sair de casa.');
}

console.log();


// 
const numero = 4;

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5');
}
else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8');
}
else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11');
}
else {
    console.log('O número não está entre 0 e 11');
}