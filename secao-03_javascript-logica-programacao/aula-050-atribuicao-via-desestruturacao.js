// Atribuiçao via desestruturação, por array

let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);


// Índice array: 0     1     2     3     4     5     6     7     8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

// Desestruturando as três primeiras posições do array e em seguida os valores finais
// (...) rest: coleta os dados restantes
const [priNumero, segNumero, terNumero, ...resto] = numeros;
console.log(priNumero, segNumero, terNumero);
console.log(resto);

const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete);

// (...) spread: distribui os dados restantes

// 
const numeros2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros2[1][2]);

const [,[, , seis]] = numeros2;
console.log(seis);

const [lista1, lista2, lista3] = numeros2;
console.log(lista3[2]);