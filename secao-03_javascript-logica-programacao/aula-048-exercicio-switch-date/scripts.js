// Variáveis
const h1 = document.querySelector('.container h1');
const data = new Date();


// Funções
function getNomeDiaSemana() {
    const dia = data.getDay();

    switch (dia) {
        case 0:
            return 'domingo';

        case 1:
            return 'segunda-feira';

        case 2:
            return 'terça-feira';

        case 3:
            return 'quarta-feira';

        case 4:
            return 'quinta-feira';

        case 5:
            return 'sexta-feira';

        case 6:
            return 'sábado';

        default:
            return '(Dia da semana não existe)';
    }

}

function getNomeMes() {
    const mes = data.getMonth() + 1;

    switch (mes) {
        case 1:
            return 'janeiro';

        case 2:
            return 'fevereiro';

        case 3:
            return 'março';

        case 4:
            return 'abril';

        case 5:
            return 'maio';

        case 6:
            return 'junho';

        case 7:
            return 'julho';

        case 8:
            return 'agosto';

        case 9:
            return 'setembro';

        case 10:
            return 'outubro';

        case 11:
            return 'novembro';

        case 12:
            return 'dezembro';

        default:
            return '(Mês não existe!)';
    }

}

function zeroEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

function criaData(data) {
    const nomeDiaSemana = getNomeDiaSemana();
    const diaMes = data.getDate();
    const nomeMes = getNomeMes();
    const ano = data.getFullYear();
    const horas = data.getHours();
    const minutos = data.getMinutes();

    return `<span>${zeroEsquerda(horas)}:${zeroEsquerda(minutos)}</span> <br> ${nomeDiaSemana}, ${diaMes} de ${nomeMes} de ${ano}`;
}


// Execução
h1.innerHTML = `${criaData(data)}`;