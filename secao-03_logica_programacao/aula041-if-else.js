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

function encontrado() {
    return 'Range encontrada';
}

const numero = 10;

if(numero >= 0 && numero <= 5) {
    
    console.log('O número está entre 0 e 5');
    console.log(encontrado());
} else if(numero >= 6 && numero <= 8) {

    console.log('O número está entre 6 e 8');
    console.log(encontrado());
} else if(numero >= 9 && numero <= 11) {

    console.log('O número está entre 9 e 11');
    console.log(encontrado());
} else {

    console.log('O número não está entre 0 e 11');
}