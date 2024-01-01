let nome;
let confirma;
let saudacao;

// - Alert:
alert('Autenticação...');

// - Prompt:
nome = prompt('Digite seu nome:');

// - Confirm:
confirma = confirm('Seu nome é ' + nome + '?');

// 
saudacao = confirma ? `Bem vindo(a), ${nome}!` : `Desconhecido...`;
