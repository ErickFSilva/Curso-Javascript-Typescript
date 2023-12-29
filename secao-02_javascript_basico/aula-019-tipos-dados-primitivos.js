/**
 * Tipos de dados primitivos: string, number, underfined, null, boolean, (symbol);
 */


// - String:
const nome = 'Erick';
const profissão = "Programador";
const linguagem = `JavaScript`;


// - Number:
const idade = 37;
const salario = 6.439;


// - Undefined e Null:
// O valor indefinido não aponta para local algum na memória. Atribuição automática da linguagem;
let variavelIndefinida;

// O valor nulo não aponta para local algum na memória. Atribuido manualmente pelo programador;
let variavelNula = null;


// - Boolean:
const emPreparacao = true;
const atuante = false;


// - Typeof:
const verTipo1 = typeof(nome);
const verTipo2 = typeof(idade);
const verTipo3 = typeof(variavelIndefinida);
const verTipo4 = typeof(variavelNula);
const verTipo5 = typeof(emPreparacao);

console.log(`${nome}: ${verTipo1}`);
console.log(`${idade}: ${verTipo2}`);
console.log(`${variavelIndefinida}: ${verTipo3}`);
console.log(`${variavelNula}: ${verTipo4}`);
console.log(`${emPreparacao}: ${verTipo5}`);
