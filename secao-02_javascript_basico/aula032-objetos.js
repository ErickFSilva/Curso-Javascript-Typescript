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
function criaFamilia(nome, sobrenome, idade) {

    return {

        nome,
        sobrenome,
        idade
    };
}

const familia1 = criaFamilia('Erick', 'F. da Silva', 36);
const familia2 = criaFamilia('Raquezia', 'de Souza Almeida F.', 36);
const familia3 = criaFamilia('Gabriel', 'de Souza Alemida F.', 12);
const familia4 = criaFamilia('Gabriely', 'de Souza Almeida F.', 8);

console.log(familia1);
console.log(familia2);
console.log(familia3);
console.log(familia4);
console.log();


// Funções dentro de objetos são chamados de métodos
const pessoa3 = {

    nome: 'Erick',
    sobrenome: 'F. da Silva',
    idade: 36,
    fala() { // Função ou método

        // console.log(`${nome} ${sobrenome} está falando oi...!`); // Sem o 'this.' retornaria um erro
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {

        this.idade++;
    }
}

pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();
console.log();