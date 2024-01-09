// Objeto Math

// Variáveis
let num1 = 9.49;
let num2;
let aleatorio = Math.random();

// Valor normal
console.log(`Valor normal: ${num1}`);


// - Arredondamentos

// Arredonda para baixo
console.log(`Arredonda para baixo: ${Math.floor(num1)}`);

// Arredonda para cima
console.log(`Arredonda para cima: ${Math.ceil(num1)}`);

// Arredonda para o mais próximo
console.log(`Arredonda para o mais próximo: ${Math.round(num1)}`);
console.log(`Arredonda para o mais próximo: ${Math.round(num1 + 0.1)}`);


// Encontrar um número em uma sequência numérica
console.log(`Maior número: ${Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)}`);
console.log(`Maior número: ${Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)}`);


// Gerar números aleatórios
console.log(`Número aleatório: ${aleatorio}`);

// Número aleatório entre 1 e 10
console.log((aleatorio * (10 - 1) + 1).toFixed(0));