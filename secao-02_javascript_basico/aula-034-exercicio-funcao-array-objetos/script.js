// Removendo evento do formulário para não enviar os dados
function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    // };

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        let pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };

        pessoas.push(pessoa);

        console.table(pessoas);
        resultado.innerHTML = `${pessoas[0]}<br>${pessoas[1]}<br>${pessoas[2]}<br>${pessoas[3]}<br><br>`;
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();