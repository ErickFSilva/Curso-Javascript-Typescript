/**
 * Continue: continua a iteração reiniciando o laço
 * Break: finaliza o laço
 */

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue
for (let numero of numeros) {
    
    if (numero % 2 === 0) {
        continue;
    }

    console.log(numero);
}
console.log();


// Break
for (let numero of numeros) {

    if (numero === 6) {
        console.log(numero);
        break;
    }

    console.log(numero);
}
console.log();