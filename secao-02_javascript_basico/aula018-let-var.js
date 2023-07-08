/**
 * Com o javascript convencional podemos redeclarar uma variável
 */

var nome = 'Carlos';
var nome = 'Erick';
sobrenome = 'Ferreira'; // Não fazer isso. É criado uma variável global, podendo resultar em erros.

console.log(nome, sobrenome);


/**
 * Com o ecmascript ES6 (2015), não podemos redeclarar variáveis. Retorna um erro.
 */

let profissao = 'Programador fullstack';
// let profissao = 'Programador backend';

console.log(profissao); 