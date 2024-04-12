// Criando um objeto simples
const objetoPessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(objetoPessoa.nome);
console.log();


// Criando uma função para criar objetos, 'facture function' (fábrica de objetos)
function criaPessoa (nome, sobrenome, idade) {

    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa('Erick', 'Ferreira', 37);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);
console.log();


// Quando uma 'função' esté DENTRO DE UM OBJETO ela é chamada de 'método'
const pessoa2 = {
    nome: 'Erick',
    sobrenome: 'Ferreira',
    idade: 37,

    falar() {
        console.log(`Eu, ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos`);
        console.log();
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa2.falar();
pessoa2.incrementaIdade();
pessoa2.falar();