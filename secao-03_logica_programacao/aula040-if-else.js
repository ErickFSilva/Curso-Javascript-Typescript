/**
 * Entre 0 e 11: Bom dia;
 * Entre 12 e 17: Boa tarde;
 * Entre 18 e 23: Boa noite;
 */

/**
 * 'if' pode ser usado sozinho;
 * 'else if' só pode ser usado com um 'if' antes dele;
 * 'else' só pode ser usado apenas uma vez;
 * Podemos usar condições sem 'else if', apenas com 'if' e 'else';
 * Também podemos usar apenas o 'if';
 */

const hora = 10;

if(hora < 12) {

    console.log('Bom dia!');
} else if(hora < 18) {

    console.log('Boa tarde!');
} else {

    console.log('Boa noite!');
}


const tenhoGrana = true;

if(tenhoGrana) {

    console.log('vou sair de casa!');
} else {

    console.log('Não vou sair de casa!');
}