// Atenção para a altura: alturaEmM

/**
 * IMC	CLASSIFICAÇÃO	OBESIDADE (GRAU)
 *  MENOR QUE 18,5	MAGREZA	0
 *  ENTRE 18,5 E 24,9	NORMAL	0
 *  ENTRE 25,0 E 29,9	SOBREPESO	I
 *  ENTRE 30,0 E 39,9	OBESIDADE	II
 *  MAIOR QUE 40,0	OBESIDADE GRAVE	III
 */

const nome = 'Erick';
const sobrenome = 'Ferreira';
const idade = '37';
const peso = 80;
const alturaEmM = 1.75;
const anoNascimento = '1986';
let imc = peso / (alturaEmM * alturaEmM);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg.`);
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ` + imc);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);
