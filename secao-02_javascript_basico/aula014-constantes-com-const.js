/**
 * Regras para a criação de constantes:
 * 
 * Não podemos criar constantes com palavras reservadas;
 * Constantes precisam ter nomes significativos;
 * Não podemos começar nomes de constantes com um número;
 * Constantes não podem conter espaços ou traços;
 * Em casos de palavras compostas, utilizar camelCase;
 * As constantes são case sensitive;
 * Não podemos alterar o valor de uma constante;
 * Constantes precisam ser declaradas e inicializadas;
 */


const nome = 'Erick';
console.log(nome);

const primeiroNum = 5;
const segundoNum = 10;
const resultado = primeiroNum * segundoNum;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;

let variavel1 = true;
let variavel2 = '';
let variavel3 = 1;
let variavel4 = [];

console.log(resultadoTriplicado);


// Para verificar o tipo da variável ou constante: typeof

console.log(typeof nome);
console.log(typeof resultado);
console.log();
console.log(typeof variavel1);
console.log(typeof variavel2);
console.log(typeof variavel3);
console.log(typeof variavel4);