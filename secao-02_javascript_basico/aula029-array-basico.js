
// Arrays básicos:
// Os arrays são indexados pelos elementos;
//                 0       1        2;
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);

console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

// Substituindo o valor de uma posição do array:
alunos[0] = 'Eduardo';
console.log(alunos);

// Adicionando elementos no array:
alunos[3] = 'Luiza';

alunos[alunos.length] = 'Fábio';
alunos[alunos.length] = 'Luana';
console.log(alunos);

alunos.push('Otávio'); // Adiciona o valor no final no array;
alunos.unshift('Bruno'); // Adiciona o valor no início do array;
console.log(alunos);

// Ver o tamanho do array
console.log(alunos.length);

// Removendo elementos do array
let removido = alunos.pop(); // Remove o último valor do array com 'pop()';
console.log(`(${removido}) foi removido do array`);
console.log(alunos);

let removido2 = alunos.shift(); // Remove o primeiro valor do array com 'shift()';
console.log(`(${removido2}) foi removido do array`);
console.log(alunos);

// Apagar valores sem alterar os índices do array:
delete alunos[5];
console.log(alunos[5]);
console.log(alunos);

// Fatiando a array:
console.log(alunos.slice(0, 3));
console.log(alunos.slice(0, -1));

// Verificando o tipo do array:
console.log(typeof alunos); // Array é um 'objeto' indexado;
console.log((alunos instanceof Array) ? 'É um array' : 'Não é um array');