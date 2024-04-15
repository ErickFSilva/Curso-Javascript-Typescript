/**
 * OPERADORES LÓGICOS
 * 
 * && -> AND -> E
 * || -> OR -> OU
 * ! -> NOT -> NÃO
*/


// 
let valor1 = 100;
let valor2 = 200;
let valor3 = '100';

console.log(true && false);
console.log(true || false);
console.log(!true && true);
console.log();


// 
const usuario = 'Luiz';
const senha = '123456';
const vaiLogar = (usuario === 'Luiz') && (senha === '123456');

if (vaiLogar) {
    console.log('Vai logar');
}
else {
    console.log('Não vai logar');
}