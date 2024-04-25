/**
 * Let tem escopo de bloco { ... bloco}
 * Var só tem escopo de função
 */

const verdadeira = true;

let nome = 'Luiz';
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = "Otávio";
    console.log('1. ' + nome, nome2);

    if (verdadeira) {
        let nome = 'João';
        var nome2 = 'Ronaldo';
        console.log('2. ' + nome, nome2);
    }
}

console.log('3. ' + nome, nome2);

function nomes() {
    var nome = 'Pedro';
    var nome2 = 'Bruno';
    return nome, nome2;
}

console.log('4. ' + nomes(), nome, nome2);