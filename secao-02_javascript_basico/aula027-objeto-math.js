// 
let arrayNum = [1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6];
console.log(arrayNum);

let num1 = 9.45578;
let num2 = 100;
console.log(num1);

// Arredonda o valor para baixo:
let num3 = Math.floor(num1);
console.log(num3);

// Arredonda o valor para cima:
let num4 = Math.ceil(num1);
console.log(num4);

// Arredonda para o valor mais próximo:
let num5 = Math.round(num1);
console.log(num4);

// Para achar o maior número de uma sequência numérica
console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

// Para achar o menor número de uma sequência numérica
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

// Para gerar números aleatórios entre 0 e 1, cendo que o 1 não é incluído
const numAleatorio1 = Math.round(Math.random() * 10);
console.log(numAleatorio1);

const numAleatorio2 = Math.random();
console.log(numAleatorio2);

// Raiz quadrada:
console.log(Math.sqrt(num2));

// Potenciação
console.log(Math.pow(2, 10));
console.log(2 ** 10);