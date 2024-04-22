// Cria uma data/hora
const data = new Date();

// Extrai o dia da semana do objeto data
let diaSemana = data.getDay();

// Função para obeter o dia da semana
function getDiaSemanaTexto(diaNumero) {

    // Nomeia o dia da semana extraído da data
    switch (diaNumero) {
        case 0:
            return `Domingo`;
            // break;

        case 1:
            return `Segunda-feira`;
            // break;

        case 2:
            return `Terça-feira`;
            // break;

        case 3:
            return `Quarta-feira`;
            // break;

        case 4:
            return `Quinta-feira`;
            // break;

        case 5:
            return `Sexta-feira`;
            // break;

        case 6:
            return `Sábado`;
            // break;

        default:
            return `Dia da semana não existe!`;
            // break;
    }

}

// 
console.log(getDiaSemanaTexto(diaSemana));