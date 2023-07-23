
// - Valores primitivos são imutáveis - string, number, boolean, undefined, null (bigint, symbol):
let nome = 'Luiz';
console.log(nome);

nome = 'Otávio';
console.log(nome);

console.log(nome[5]);
nome[5] = 'a';
console.log(nome[5]);

let a = 'A';
let b = a; // 'b' recebe uma cópia de 'a'
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);


// - Valores por referência são mutáveis - array[], object{}, function():

// Arrays
let a2 = [1, 2, 3];

// Para copiar o valor de 'a2' e não apenas refecencia-lo em 'b2'
let b2 = [...a2]; // Utilizamos o operador 'spread'
let c2 = b2;
console.log(a2, b2);

a2.push(4); // Adiciona o número '4' no final do array
console.log(a2, b2);

b2.pop(); // Remove o último valor do array 'b2'
console.log(a2, b2, c2);

a2.push('Luiz');
console.log(a2, b2, c2);


// Objetos
let pessoa1 = {
    nome: 'Erick',
    idade: 36
};

let pessoa2 = pessoa1;
console.log(pessoa2);

pessoa1.idade = 37;
console.log(pessoa2);

// Para copiar o valor de 'pessoa1' e não apenas refecencia-lo em 'pessoa2'
pessoa2 = {...pessoa1};
console.log(pessoa2);

pessoa1.idade = 36;

console.log(pessoa1, pessoa2);
