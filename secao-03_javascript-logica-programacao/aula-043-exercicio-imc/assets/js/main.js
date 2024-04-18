// Capturar evento de submit do formulário
const form = document.querySelector('#form');
let resultado, imc, peso, altura, msg;


// Captura os dados
form.addEventListener('submit', function (event) {
    event.preventDefault();

    peso = form.querySelector('#peso').value;
    altura = form.querySelector('#altura').value;

    setResultado(precessaDados());
});


// Processa dados
function precessaDados() {

    imc = peso / (altura * altura);

    if (imc < 18.5) {
        msg = `IMC ${imc.toFixed(1)}. Abaixo do peso`;
    }
    else if (imc <= 24.9) {
        msg = `IMC ${imc.toFixed(1)}. Peso normal`;
    }
    else if (imc <= 29.9) {
        msg = `IMC ${imc.toFixed(1)}. Sobrepeso`;
    }
    else if (imc <= 34.9) {
        msg = `IMC ${imc.toFixed(1)}. Obesidade grau 1`;
    }
    else if (imc <= 39.9) {
        msg = `IMC ${imc.toFixed(1)}. Obesidade grau 2`;
    }
    else if (imc >= 40) {
        msg = `IMC ${imc.toFixed(1)}. Obesidade grau 3`;
    }

    return msg;

}

function criaP(msg) {
    const p = document.createElement('p');
    p.classList.add('resultado');
    p.innerHTML = msg;

    return p;
}


// Envia os dados
function setResultado (msg) {
    const resultado = document.querySelector('#resultado-imc');

    resultado.innerHTML = '';
    resultado.appendChild(criaP(msg));
}