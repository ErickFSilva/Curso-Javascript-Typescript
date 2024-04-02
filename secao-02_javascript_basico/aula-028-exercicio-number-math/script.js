function seuNumero() {

    let numero = document.getElementById('campo-num').value;

    document.body.innerHTML += `<li><b>Seu número é ${numero}</b></li>`;
    document.body.innerHTML += `<li>A raiz quadrada é ${Math.sqrt(numero)}</li>`;
    document.body.innerHTML += `<li>${numero} é inteiro? ${numero ? "Sim" : "Não"}</li>`;
    document.body.innerHTML += `<li>É NaN? ${isNaN(numero) ? "Sim" : "Não"}</li>`;
    document.body.innerHTML += `<li>Arredondando para baixo: ${Math.floor(numero)}</li>`;
    document.body.innerHTML += `<li>Arredondando para cima: ${Math.ceil(numero)}</li>`;
    document.body.innerHTML += `<li>Com duas casas decimais: ${Number(numero.toFixed(2))}</li>`;

}