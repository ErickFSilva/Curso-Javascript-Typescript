/**
 * - Selecionando elementos da página
 * 
 * getElementById()
 * getElementsByTagName()
 * getElementsByClassName()
 * getElementsByName()
*/

let usuario = document.getElementById('nomeUsuario');
console.log(usuario);

usuario = document.getElementsByTagName('input');
console.log(usuario);

usuario = document.getElementsByClassName('campoTexto');
console.log(usuario);

usuario = document.getElementsByName('nome');
console.log(usuario);