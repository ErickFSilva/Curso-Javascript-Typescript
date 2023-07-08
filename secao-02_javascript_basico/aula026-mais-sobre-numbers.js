// Números
let num1 = 10;
let num2 = 2.5746134; // Number. O JS segue o padrão: IEEE 754-2008;
let num3 = 0.7;
let num4 = 0.1;
let tot = null;

console.log(num1 + num2);

console.log(num1.toString() + num2); // Converte a variável 'num1' para string;

console.log(typeof num1); // Verifica o tipo da variável;

console.log(num1.toString(2)); // Converte a variável 'num1' em binário;

console.log(num2.toFixed(3)); // Arredonda o valor decimal para duas casas decimais;

console.log(Number.isInteger(num1)); // Verifica se o número tem 0 valor é inteiro, retornando 'true' ou 'false';
    // Exemplo
    let temp = num1 * '5';
    console.log(Number.isNaN(temp)); // Retorna 'true' se o valor for 'NaN';
    console.log(temp);

tot = num3 + num4 + num4 + num4 + num4;
console.log(tot);
console.log(parseFloat(tot));
console.log(Number(tot.toFixed(2))); // Corrige o bug em valores exatos em pontos flutuantes
console.log(parseFloat(tot.toFixed(2))); // Corrige o bug em valores exatos em pontos flutuantes