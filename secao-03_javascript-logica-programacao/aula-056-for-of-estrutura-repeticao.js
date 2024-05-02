/**
 * 'for' clássico - Geralmente é iterável com: Array ou String
 * 'for in' - Retorna o índice ou chave e é iterável com: Array, String ou Objetos
 * 'for of' - Retorna o valor em si e é iterável com: Array ou String
 */



// - Strings
const nome = 'Luiz Otávio';

// Iterando o 'for' clássico
console.log('- Strings');
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}
console.log();

// Iterando com o 'for in'
for (let indice in nome) { // Retorna os índices
    console.log(indice);
}
console.log();

// Iterando com o 'for of'
for (let valor of nome) { // Retorna os valores
    console.log(valor);
}
console.log();


// - Objetos
console.log('- Objetos');
const pessoa = { nome: 'Luiz', sobrenome: 'Otávio' };

// Ite com 'for in'
for (let indice in pessoa) {
    console.log(indice);
}
console.log();


// - Arrays
console.log('- Arrays');
const nomes = ['Luiz', 'Otávio', 'Henrique'];

// Iterando com o 'for' clássico
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
console.log();

// Iterando com o 'for in'
for (let indice in nomes) {
    console.log(indice);
}
console.log();

// Iterando com o 'for of'
for (let valor of nomes) {
    console.log(valor);
}
console.log();

// Iterando com 'forEach'
nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});
console.log();