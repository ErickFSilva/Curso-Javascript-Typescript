/**
 * Falsy: valores avaliados como falsos em JS
 * 
 * 0,
 * '', "", ``,
 * null, undefined,
 * NaN
*/


// AND
console.log('Luiz Otávio' && 0 && 'Maria');
console.log('Luiz Otávio' && '' && 'Maria');
console.log('Luiz Otávio' && true && NaN);
console.log('Luiz Otávio' && null && 'Maria');
console.log();

function falaOi() {
    return 'Oi';
}

const vaiExecutar = true;
const vaiExecutar2 = false;

console.log(vaiExecutar2 && falaOi());
console.log();


// OR
console.log('Luiz Otávio' || 0 || 'Maria');
console.log('Luiz Otávio' || '' || 'Maria');
console.log('Luiz Otávio' || true || NaN);
console.log('Luiz Otávio' || null || 'Maria');
console.log();

function falaOi() {
    return 'Oi';
}

const vaiExecutar3 = true;
const vaiExecutar4 = false;

console.log(vaiExecutar2 || falaOi());
console.log();

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
const f = true;

console.log(a || b || c || d || e || f);