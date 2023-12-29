/**
 * - Operadores Aritiméticos, Atribuição e Incremento/Decremento
 * 
 * Adição / Concatenação: +
 * Subtração: -
 * Multiplicação: *
 * Divisão: /
 * Módulo: %
 * Potenciação: **
 * Atribuição: =
 * Incremento: ++
 * Decremento: --
 */

const nome = 'Erick';
const sobrenome = 'Ferreira';
let num1 = 5;
let num2 = 10;
let contador = 2;


// Concatenação:
console.log(nome + ' ' + sobrenome);

// Adição:
console.log(num1 + num2);

// Subtração:
console.log(num1 - num2);

// Multiplicação:
console.log(num1 * num2);

// Divisão:
console.log(num1 / num2);

// Módulo:
console.log(num1 % num2);

// Potenciação:
console.log(num1 ** num2);

// Incremento:
console.log((++num1) + num2);

// Decremento:
console.log((--num1) - num2);

// Atribuição:
console.log(contador);
console.log(contador += 2);
console.log(contador *= 2);
console.log(contador -= 2);
console.log(contador /= 2);
console.log(contador **= 2);


/**
 * NaN: Not a Number
 */

const num3 = 10;
const num4 = 'cinco';
const num5 = '5.2';

console.log(num3 + num4);
console.log(num3 * num4);
console.log(num3 * num5);
console.log(num3 * parseInt(num5));
