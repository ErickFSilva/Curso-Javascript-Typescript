// Desestruturação em objetos
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: '30',
    endereco: {
        rua: 'Avenida Brasil',
        numero: '320'
    }
}
console.log(pessoa.nome);
console.log();

const nomePessoa = pessoa.nome;
console.log(nomePessoa);
console.log();


// Atribuição via desestruturando
const { nome, sobrenome, idade, endereco } = pessoa;
console.log(nome, sobrenome, idade, endereco);
console.log();

const { nome: nomeValPadrao = '----' } = pessoa;
console.log(nomeValPadrao);
console.log();

const {endereco: {rua, numero}} = pessoa;
console.log(`${rua}, ${numero}`);
console.log();

const {
    endereco: {rua: r = 'Não informado', numero: n = 'Não informado'}
} = pessoa;
console.log(r, n);
console.log();

const {nome: nome2, ...restoValores} = pessoa;
console.log(nome, restoValores);
console.log();