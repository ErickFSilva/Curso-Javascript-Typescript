
/**
 * Regras para a criação de variáveis:
 * 
 * Não podemos criar variáveis com palavras reservadas;
 * Variáveis precisam ter nomes significativos;
 * Não podemos começar nomes de variáveis com um número;
 * Variáveis não podem conter espaços ou traços;
 * Em casos de palavras compostas, utilizar camelCase;
 * As variáveis são case sensitive;
 * Não podemos redeclarar variáveis com 'let', apenas modificar o valor;
 */


let nome = 'João'; // Declarou a variável, e a inicializou.
let sobrenome; // Declarou a variável, mas não a inicializou.

console.log(nome, 'nasceu em 1964.');
console.log('Em 2000,', nome, ',conheceu Maria.');
console.log(nome,'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');
console.log();

nome = 'Erick';
console.log('Nome:',nome)
console.log('Sobrenome:', sobrenome);