// const nome = prompt('Digite seu nome:');
// Erick Ferreira da Silva

const nome = 'Erick Ferreira da Silva';

document.body.innerHTML += `<li>Seu nome é: ${nome}</li>`;
document.body.innerHTML += `<li>Seu nome tem ${nome.length} letras</li>`;
document.body.innerHTML += `<li>A segunda letra do seu nome é: ${nome.charAt(1)}</li>`;
document.body.innerHTML += `<li>Qual o primeiro índice da letra "F" no seu nome? ${nome.indexOf('F')}</li>`;
document.body.innerHTML += `<li>Qual o último índice da letra "S" no seu nome? ${nome.lastIndexOf('S')}</li>`;
document.body.innerHTML += `<li>As últimas 3 letras do seu nome são: ${nome.slice(-3)}</li>`;
document.body.innerHTML += `<li>As palavras do seu nome são: ${nome.split(' ')}</li>`;
document.body.innerHTML += `<li>Seu nome com letras maiúsculas: ${nome.toUpperCase()}</li>`;
document.body.innerHTML += `<li>Seu nome com letras minúsculas: ${nome.toLowerCase()}</li>`;
