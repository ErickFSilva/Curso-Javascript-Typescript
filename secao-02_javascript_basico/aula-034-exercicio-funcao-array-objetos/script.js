// Removendo evento do formulário para não enviar os dados
function meuEscopo() {
    const form = document.querySelector('.form');

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    // };

    function recebeEventoForm(evento) {
        evento.preventDefault();
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();