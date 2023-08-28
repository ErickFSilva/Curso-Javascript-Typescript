console.log('Luiz Otávio' && 0 && 'Maria');
console.log('Luiz Otávio' && true && 'Maria');
console.log('Luiz Otávio' && true && NaN);
console.log();

// 
function falaOi() {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());
console.log();

const vaiExecutar2 = undefined;

console.log(vaiExecutar2 && falaOi());
console.log();

const vaiExecutar3 = 'Joãozinho';

console.log(vaiExecutar3 && falaOi());
console.log();
