// Regras de variáveis:

/**
 * Não podemos criar variáveis com palavras reservadas;
 * Variáveis precisam ter nomes significativos;
 * Não pode começar o nome de uma variável com um número;
 * Variáveis não podem conter espaços ou traços;
 * Utilizamos camelCase;
 * Não podemos redeclarar variáveis com 'let';
 * Crie variáveis, preferencialmente, com 'let';
 */

let esposo; // Declarando a variável
esposo = 'João'; // Inicializando a variável
let esposa = 'Maria'; // Declarando e inicializando a variável
let dataCasamento = '2012';
let dataNasciEsposo = '1984';
let dataNasciFilho = '2015';
let filho;

filho = 'Eduardo';

console.log(esposo, `nasceu em ${dataNasciEsposo}.`);
console.log(`Em 2000 ${esposo} conheceu ${esposa}.`);
console.log(`${esposo} casou-se com ${esposa} em ${dataCasamento}.`);
console.log(`${esposa} teve 1 filho com ${esposo} em ${dataNasciFilho}.`);
console.log(`O filho de ${esposa} com ${esposo} se chama ${filho}.`);
