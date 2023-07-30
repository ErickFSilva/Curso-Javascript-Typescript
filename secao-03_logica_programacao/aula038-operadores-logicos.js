/**
 * Operadores lógicos
 * 
 * && -> AND -> E
 * || -> OR -> OU
 * ! -> NOT -> NÃO
 * 
 */


// Constantes
const num1 = 10;
const num2 = '11';

// && -> E:
console.log((num1 > num2) && (num2 > num1));

// || -> OU:
console.log((num1 > num2) || (num2 > num1));

// ! -> NÃO:
console.log(!(num1 > num2) && (num2 > num1));
