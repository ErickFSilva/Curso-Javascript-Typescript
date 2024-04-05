// Funções executam ações;
// 
function saudacao(nome) {

    // console.log(`Bom dia ${nome}!`);
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz');
console.log(variavel);


// 
function soma(x, y) {

    const resultado = x + y;
    return resultado;
}

let resultado = soma(2, 2);
console.log(resultado);


// Função com valor padrão
function soma2(x = 1, y = 1) {

    const resultado = x + y;
    return resultado;
}

resultado = soma2();
console.log(resultado);