// for in - Estrutura de repetição

const frutas = ['maçã', 'uva', 'pêra', 'mamão', 'cajú', 'goiaba'];
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: '30'
};

// Iterar o array com o 'for' tradicional
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
console.log();


// Iterar o array e o objeto com o 'for in'
// 'for in' lê os índices do array ou as chaves do objeto
for (let i in frutas) {
    console.log(frutas[i]); // Lêr os índices
}
console.log();


for (let i in pessoa) {
    console.log(`${i}: ${pessoa[i]}`);
}
console.log();