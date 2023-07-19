// - Array:
const array = [1, 2, 3];

array.push(4);
array[0] = 'Luiz';
console.log(array);
console.log();

// array = 'Outra'; - Retornaria um erro


// - Objeto literal:
const pessoa1 = {

    // Atributos
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log();


const pessoa2 = {

    // Atributos
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55
};

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log();


// Criando objetos com funções: factory function
function criaPessoa(nome, sobrenome, idade) {

    return {

        nome,
        sobrenome,
        idade
    };
}

const pessoa3 = criaPessoa('Erick', 'F. da Silva', 36);

console.log(pessoa3);
console.log(pessoa3.nome);
console.log(pessoa3.sobrenome);
console.log();