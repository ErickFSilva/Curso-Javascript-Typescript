// Variáveis
const h1 = document.querySelector('.container h1');
const data = new Date();


// Funções
function getNomeDiaSemana(diaSemana) {
    const diasSEmana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

    return diasSEmana[diaSemana];
}

function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return meses[numeroMes];
}

function zeroEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
}

function criaData(data) {
    const nomeDiaSemana = getNomeDiaSemana(data.getDay());
    const diaMes = data.getDate();
    const nomeMes = getNomeMes(data.getMonth());
    const ano = data.getFullYear();
    const horas = data.getHours();
    const minutos = data.getMinutes();

    return `<span>${zeroEsquerda(horas)}:${zeroEsquerda(minutos)}</span> <br> ${nomeDiaSemana}, ${diaMes} de ${nomeMes} de ${ano}`;
}


// Execução
h1.innerHTML = `${criaData(data)}`;