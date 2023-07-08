/**
 * - Tipos de dados primitivos:
 * String, number, undefined, null, boolean, symbol (será visto depois)
 */


// Strings
const nome = 'Erick'; 
const sobrenome = "Ferreira";
const profissao = `programmer`;

console.log(`${nome} é do tipo ${typeof nome}`);


// Number
const salario = 4500;
const salario2 = 3600.00;

console.log(`${salario} é do tipo ${typeof salario} e ${salario2} é do tipo ${typeof salario2}`);


// Undefine - não aponta para nenhum local da memória
let local; // Inicia uma variável sem valor definido

console.log(`${local} é do tipo ${typeof local}`);


// Null - não aponta para nenhum local da memória
const horario = null; // Utilizado quando queremos anular uma variável intencionalmente

console.log(`${horario} é do tipo ${typeof horario}`);


// Boolean
const fullstack = true;
const backend = false;

console.log(`${fullstack} é do tipo ${typeof fullstack}`);