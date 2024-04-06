// Funções executam ações;

// Declaração clássica de funções
function saudacao(nome) {

    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz');
console.log(variavel);
console.log();

// 
function soma(x, y) {

    const resultado = x + y;
    return resultado;
}

let resultado = soma(2, 2);
console.log(resultado);
console.log();


// Função com valor padrão
function soma2(x = 1, y = 1) {

    const resultado = x + y;
    return resultado;
}

resultado = soma2();
console.log(resultado);
console.log();


// Declaração de função anônima
const raiz = function (n) {

    return Math.sqrt(n); // (Raiz quadrada)
};

console.log(raiz(9));
console.log();


// Arrow functions - modelo 1
const arrowFunc1 = (n) => {

    return n ** 0.5; // (Raiz quadrada)
};

console.log(arrowFunc1(16));
console.log();

// Arrow functions - Modelo 2 (Tendo só a linha de retorno)
const arrowFunc2 = (n) => n ** 0.5; // (Raiz quadrada)

console.log(arrowFunc2(25));
console.log();

// Arrow functions - Modelo 3 (Tendo só um parâmetro)
const arrowFunc3 = n => Math.sqrt(n); // (Raiz quadrada)

console.log(arrowFunc3(36));
console.log();