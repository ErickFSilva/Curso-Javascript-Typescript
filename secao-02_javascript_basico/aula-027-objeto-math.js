// OBJETO MATH

// - Variáveis
let num1 = 9.49;
let num2;
let aleatorio = Math.random();

// - Valor normal
console.log(`Valor normal: ${num1}`);

// - Arredondamento: para baixo
console.log(`Arredonda para baixo: ${Math.floor(num1)}`);

// - Arredondamento: para cima
console.log(`Arredonda para cima: ${Math.ceil(num1)}`);

// - Arredondamento: para o mais próximo
console.log(`Arredonda para o mais próximo: ${Math.round(num1)}`);
console.log(`Arredonda para o mais próximo: ${Math.round(num1 + 0.1)}`);

// - Encontrar um número em uma sequência numérica
console.log(`Maior número: ${Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)}`);
console.log(`Maior número: ${Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)}`);

// - Gerar número aleatório entre 0 e 1
console.log(`Número aleatório: ${aleatorio}`);

// - Número aleatório entre 1 e 10 (Math.random())
console.log((aleatorio * (10 - 1) + 1).toFixed(0));

// - Valor de PI
console.log(Math.PI);

// - Potenciação
console.log(Math.pow(2, 10));
console.log(2 ** 10);

// - Raiz quadrada
console.log(`Raiz de 9 = ${Math.sqrt(9)}`);
console.log(`Raiz de 9 = ${9 ** 0.5}`);

// - Dividir um número por zero
console.log(100 / 0);