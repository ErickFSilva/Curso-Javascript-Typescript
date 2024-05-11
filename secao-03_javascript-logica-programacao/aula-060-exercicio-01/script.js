// Escreva uma função que recebe 2 números e retorna o maior deles

function calcular() {
    const num1 = Number(document.querySelector('#num-1').value);
    const num2 = Number(document.querySelector('#num-2').value);
    let numMaior;

    if (num1 > num2) {
        numMaior = num1
    }
    else if (num2 > num1) {
        numMaior = num2
    }
    else {
        numMaior = 'Valores iguais'
    }

    console.log(numMaior);
}
