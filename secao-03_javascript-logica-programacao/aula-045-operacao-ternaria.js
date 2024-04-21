/**
 * Operador ternário:
 * 
 * (condição) ? 'valor para o true : 'valor para o fasle'
 */

const pontuacaoUsuario = 1000;
let nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário normal';

console.log(nivelUsuario);


const corUsuario = null;
corPadrao = corUsuario || 'Preto'; // Valor de fallback

console.log(corPadrao);