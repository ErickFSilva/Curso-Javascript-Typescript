
// A string são indexadas. Cada caractere está em um índece, começando do '0' e seguindo as posições:
//               012345678911234567892123...
let umaString = "Um texto...";
let outraString = "O rato roeu a roupa do rei de roma";

// Imprime um string:
console.log(umaString);
console.log();

// Imprime a posição informada:
console.log(umaString[0]);
console.log(umaString.charAt(1));
console.log();

// Concatena strings:
console.log(umaString.concat(' ', 'em', ' ', 'um ', 'lindo dia!'));
console.log(umaString + ' ' + 'em' + ' ' + 'um ' + 'lindo dia!');
console.log(`${umaString} em um lindo dia!`);
console.log();

// Pesquisar na string:
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('t', 3)); // Informe a posição do início para o início da consulta. Retorna '-1' caso não encontre;
console.log(umaString.lastIndexOf('x', 6)); // Restorna um resultado semelhante ao de cima, mas inicia a consulta do final para o começo;
console.log(outraString.slice(2, 11)); // Imprime os caracteres no range das posições informadas;
console.log(outraString.slice(-5)); // Imprime os cinco últimos caracteres da string;
console.log();

// String com expreções regulares:
console.log(umaString.match(/[a-z]/g)); // Retorna todas as letras minúsculas da string;
console.log(umaString.search(/x/)); // Similar ao 'indexOf()'...; 
console.log(umaString.replace(' ', ' outro ')); // Utilizado para substituição de strings;
console.log(outraString.replace(/r/, 'R')); // Com as barras, a substituição é realizada no primeiro string informado;
console.log(outraString.replace(/r/g, 'R')); // Com o 'g', após à última barra, todas as 'strings' equivalentes serão substituídas;
console.log();

// Atributo que conta o total de caracteres de uma string:
console.log('Total de caracteres: ' + umaString.length);
console.log();

// Para 'dividir a string' em posições 'formando um array':
console.log(outraString.split(' ')); // Divide utilizando um 'espaço' como separador;
console.log(outraString.split(' ', 3)); // Divide utilizando um 'espaço' como separador e infomando a quantidade de posições desejdas;
console.log();

// Para manipular a altura dos caracteres, utilizamos:
console.log(umaString);
console.log(umaString.toUpperCase()); // Todos os caracteres ficarão em 'caixa alta';
console.log(umaString.toLowerCase()); // Todos os caracteres ficarão em 'caixa baixa';
console.log();