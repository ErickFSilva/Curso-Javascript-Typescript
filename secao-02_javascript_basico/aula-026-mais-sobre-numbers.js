let num_str = 100;
let num_NaN = num_str * 'Ola';
let ieee1 = 0.7;
let ieee2 = 0.1;
let num1 = 10;
let num2 = 2.5;
let num3 = 10.57956

// Ler um número como se fosse um string: .toString()
console.log(`Operação com string: ${num_str.toString() + num2}`); // String em uma operação de adição é realizado uma concatenação

// Converter um número em string
num_str = num_str.toString();
console.log(`String: ${num_str}`);

// Representação binária com .toString()
console.log(`String: ${num1.toString()}`);
console.log(`Binários: ${num1.toString(2)}`);

// Arredondando um valor
console.log(`Valor arredondado: ${num3.toFixed(2)}`);

// Verifica se o número é inteiro ou não
console.log(`Número inteiro: ${Number.isInteger(num1)}`);
console.log(`Número inteiro: ${Number.isInteger(num_str)}`);

// Verificar se o resultado é um NaN
console.log(`NaN: ${Number.isNaN(num_NaN)}`);

// Corrigindo bug do IEEE 754-2008
ieee1 += ieee2;
ieee1 += ieee2;
ieee1 += ieee2;

console.log(`Variável "ieee1": ${ieee1}`);
console.log(`Bug IEEE corrigido: ${ieee1.toFixed(1)}`);