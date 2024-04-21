// A função date é uma função construtora
const data = new Date();

console.log(`- Formas de imprimir data:`);
console.log(``);

console.log(`Dia mês: ${data.getDate()}`);
console.log(`Mês: ${data.getMonth() + 1}`); // Mês começa co zero (0)
console.log(`Ano: ${data.getFullYear()}`);
console.log(`---`);

// 0 -> Domingo; 6 -> Sábado
console.log(`Dia da semana: ${data.getDay()}`);
console.log(`---`);

console.log(`Hora: ${data.getHours()}`);
console.log(`Minutos: ${data.getMinutes()}`);
console.log(`Segundos: ${data.getSeconds()}`);
console.log(`Milisegundos: ${data.getMilliseconds()}`);
console.log(`---`);

// Conta do marco zero a té agora, em milisegundos
console.log(`${Date.now()}`);
console.log(`---`);

console.log(data.toString());
console.log(`---`);


// Função para formatar uma data
function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

// Função que coloca zero a esquerda
function zeroEsquerda(num) {
    return num <= 9 ? `0${num}` : num;
}

const dataBrasil = formataData(data);
console.log(`${dataBrasil}`);
console.log(``);