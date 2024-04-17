// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    console.log('Evento prevenido');
    setResultado('Evento prevenido');
});

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<span class="resul-color">${msg}</span>`;
}