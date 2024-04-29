// Estrutura de repetição: for () {}

// Exemplo 1
// i = index
for (let i = 0; i <= 10; i++) {

    if (i < 10) {
        console.log(`Linha: 00${i}`);
    }
    else if (i < 100) {
        console.log(`Linha: 0${i}`);
    }
    else {
        console.log(`Linha: ${i}`);
    }
}
console.log();


// Exemplo 2
for (let i = 0; i <= 10; i++) {
    const par = (i % 2 === 0) ? 'par' : 'ímpar';
    console.log(`${i} é ${par}`);
}
console.log();


// Exemplo 3
const frutas = ['Maçã', 'Pêra', 'Uva', 'Morango', 'Laranja', 'Banana'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice: ${i}: ${frutas[i]}`);
}
console.log();