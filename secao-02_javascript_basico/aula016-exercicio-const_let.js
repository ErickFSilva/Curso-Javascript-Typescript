/**
 * Erick Ferreira tem 35 anos, pesa 82 kg.
 * Tem 1.75 de altura e seu IMC é de xx.xxxxxxx.
 * Erick nasceu em 1986.
 */


const nome = 'Erick';
const sobrenome = 'Ferreira';
const idade = 36;
const peso = 81;
const alturaM = 1.75;

let imc; // peso / (altura * altura)
imc = peso / (alturaM * alturaM);

let anoNascimento;
anoNascimento = 2022 - idade;


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`Tem ${alturaM} de altura e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);

// ************************************

const funcionario = 'Erick Ferreira';
const cargo = 'Programador';
let salario = 4598.56;

console.log(`Funcionário: ${funcionario}`);
console.log(`Profissão: ${cargo}`);
console.log(`Salário: ${salario}`);

salario += (salario * 0.25);

console.log(`Salário atualizado: ${salario}`);