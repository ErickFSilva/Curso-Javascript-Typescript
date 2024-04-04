// Array com strings:
// Posições:     0       1        2
const alunos = ['Luiz', 'Maria', 'João'];
const casa = true;


// - Imprimindo array
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);
console.log();


// - Alterando o valor de um índice
console.log(alunos);
alunos[0] = 'Eduardo';
console.log(alunos);
console.log();


// - Verificando o tamanho do array
console.log(`Array com ${alunos.length} elementos`);
console.log();


// - Adicionando um novo elemento no final do array
console.log(alunos);
alunos[alunos.length] = 'Luiza';
alunos.push('Fábio');
console.log(alunos);
console.log();


// - Adicionando um novo elemento no início do array
console.log(alunos);
alunos.unshift('Luana');
console.log(alunos);
console.log();


// - Removendo um elemento no final do array e o adicionando em uma variável
console.log(alunos);
let removido = alunos.pop();
console.log(alunos);
console.log(`${removido}, elemento removido do final do array 'alunos'`);
console.log();


// - Removendo um elemento no início do array e o adicionando em uma variável
console.log(alunos);
removido = alunos.shift();
console.log(alunos);
console.log(`${removido}, elemento removido do início do array 'alunos'`);
console.log();


// - Removendo um elemento e seu índice do array
console.log(alunos);
delete alunos[1];
console.log(alunos);
console.log();


// - Acessando índice que não existe no array
console.log(alunos);
console.log(`${alunos[50]} (tentando acessar índice que não existe no array)`);
console.log();


// 
alunos[1] = 'Maria';


// - Listando elementos em ordem crescente
console.log(alunos);
console.log(alunos.slice(0, 3)); // Será impresso as posições de 0 à 2
console.log();


// - Listando elementos em ordem crescente, com parâmetro negativo
console.log(alunos);
console.log(alunos.slice(0, -2)); // Será impresso as posições de 0 à 2
console.log();


// - Lendo o tipo que é um array
console.log(`O array é do tipo: ${typeof alunos}`);
console.log();


// - Verificando se uma variável é uma instância de array
console.log(`'alunos' é um array? ${alunos instanceof Array ? 'Sim' : 'Não'}`);
console.log(`'casa' é um array? ${casa instanceof Array ? 'Sim' : 'Não'}`);
console.log();