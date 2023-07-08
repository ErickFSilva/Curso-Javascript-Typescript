/**
 * - Operadores aritméticos, por ordem de precedência: 
 * 
 * (): parênteses
 * **: potenciação
 * *: Multiplicação
 * /: Divisão
 * %: Módulo
 * +: Adição
 * -: Subtração
 * 
 * 
 * - Operadores de incremento e decremento:
 * 
 * ++: Incremento
 * --: Decremento
 * 
 * 
 * - Operadores de atribuição:
 * 
 * =
 * *=
 * /=
 * +=
 * -=
 * 
 */


let n1 = 10;
let n2 = 3;

console.log(n1 ** n2); // potenciação
console.log(n1 * n2); // Multiplicação
console.log(n1 / n2); // Divisão
console.log(n1 % n2); // Módulo
console.log(n1 + n2); // Adção
console.log(n1 - n2); // Subtração
console.log();


let contador = 1;

console.log(++contador);
console.log(contador++);
console.log(contador);
console.log();

console.log(--contador);
console.log(contador--);
console.log(contador);
console.log();


const passo = 50;
let cont = 0;
cont += passo;

console.log(cont);
console.log();


// NaN - Not a number
const num1 = 10;
const num2 = 'Erick';
const num3 = '8';

console.log(num1 * num2);
console.log(num1 * num3);
console.log();


// Convertendo string com o parseInt, parseFloat
const num4 = parseInt('5');
const num5 = parseFloat('6.2');
const num6 = Number('5.3');

console.log(typeof num4);
console.log(num1 * num4);
console.log(typeof num5);
console.log(num1 * num5);
console.log(typeof num6);
console.log(num1 + num6);