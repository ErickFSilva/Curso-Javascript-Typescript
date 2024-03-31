// - Strings:      01234567
let umaString = 'Um texto';
let outraString = 'O rato roeu a roupa do Rei de Roma.';


// - Contatenação:
console.log(umaString.concat(' em um lindo dia!'));
console.log(`${umaString} em um lindo dia!`);


// - Busca em strings:

// charAt(): retornará a string na posição informada
console.log(umaString.charAt(3));

// indexOf(): realiza a busca do dado informado
console.log(umaString.indexOf('texto')); // Inicia a busca do início do texto para o fim
console.log(umaString.indexOf('o', 3)); // Inicia a busca apartir da posição informada
console.log(umaString.lastIndexOf('o', 3)); //Inicia a busca do fim do texto para o início

// match(): com expressões regulares
console.log(umaString.match(/[a-z]/g)); // Retorna todas as letras minúsculas em formato de array
console.log(umaString.match(/[A-Z]/g)); // Retorna todas as letras maiúsculas em formato de array
console.log(umaString.match(/[a-z,A-Z]/g)); // Retorna todas as letras minúsculas e maiúsculas em formato de array
console.log(umaString.match(/[a-z]/)); // Retorna apenas a primeira letra minúscula em formato de array
console.log(umaString.match(/[A-Z]/)); // Retorna apenas a primeira letra maiúscula em formato de array
console.log(umaString.match(/[a-z,A-Z]/)); // Retorna apenas a primeira letra, minúscula ou maiúscula, em formato de array

// search(): com expressões regulares
console.log(umaString.search(/[a-z]/g)); // Retornará o primeiro índice no resultado encontrado
console.log(umaString.search(/x/)); // Retornará o índice no resultado encontrado

// replace(): sem expressão regular
console.log(umaString.replace('Um', 'Outro')); // Substitue um resultado por outro
console.log(umaString.replace(/Um/, 'Outro')); // Substitue um resultado por outro
console.log(outraString.replace(/r/, '#')); // Substitue apenas o primeiro resultado encontrado
console.log(outraString.replace(/r/g, '#')); // Substitue todos os resultados encontrados

// slice(): realisa buscas pela posição dos caracteres
console.log(outraString.slice(2));
console.log(outraString.slice(2, 6)); // Posiçao inicial e a posiçao final (com uma posiçao a mais)
console.log(outraString.slice(-5, outraString.length)); // Realiza a busca de trás para a frente
console.log(outraString.substring(outraString.length - 5, outraString.length - 1)); // Realiza a mesma função do 'slice'


// - length: conta a quantidade de caracteres do string
console.log(outraString.length);


// - split(): divide a string através do separador informado
console.log(outraString.split(' '));
console.log(outraString.split('r'));
console.log(outraString.split(' ', 3)); // Além de dividir, também retorna apenas as posições informadas


// - toUpperCase: Converte os caracteres do string em letras maiúsculas
console.log(outraString.toUpperCase());

// - toLowerCase: Converte os caracteres do string em letras minúsculas
console.log(outraString.toLowerCase());