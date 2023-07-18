
// Funções: funções executam acões

// - Declarando uma função com retorno
function saudacao(nome) { // A função recebe um parâmetro 'nome'
    
    // Retorno da função
    return `Bom dia ${nome}!`;
}

// Chama a função para executa-la, passando um argumento para executala
saudacao('Luiz');

// 
const variavel = saudacao('Erick');
console.log(variavel);


// - Função que recebe dois parâmetros
function soma(x, y) {

    // Toda variável ou constante fica protegida e isolada dentro da função
    const resultado = x + y;
    
    // A função é encerrada com o 'return' da mesma
    return resultado;

    console.log('Não será executado');
}

// A constante 'resultado' abaixo não é a mesma declarada acima
const resultado = soma(2, 2);
console.log(resultado);


// - Declarando funções com valores padrões
function soma2(x=0, y=0) {

    const resultado = x + y;
    return resultado;
}

console.log(soma2(6));


// - Declarando função anônima simples
const raiz = function (n) {

    return n ** 0.5;
};

console.log(raiz(9));


// - Declarando funções anônimas com 'arrow function'
const raiz2 = (n) => {

    return n ** 0.5;
}

console.log(raiz2(16));

//
const raiz3 = (n) => n ** 0.5;

console.log(raiz2(25));