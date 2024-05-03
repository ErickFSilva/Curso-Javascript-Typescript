// - While

// Exemplo 1 - While
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}
console.log();

// Exemplo 2 - While
const nome = 'Luiz';
i = 0;

while (i < nome.length) {
    console.log(nome[i]);
    i++;
}
console.log();

// Exemplo 3 - While
function random(min, max) {
    const rand = Math.random() * (max - min) + min;
    return Math.floor(rand);
}

const min = 1;
const max = 50;
let rand = random(min, max);

console.log();
console.log(`##### ${rand} #####`);
console.log();

while (rand !== 10) {

    console.log(rand);
    rand = random(min, max);
    console.log(rand);

}
console.log();


// - Do while

// Exemplo 1 - Do while
console.log();
rand = random(min, max);
console.log(`##### ${rand} #####`);
console.log();

do {

    console.log(rand);
    rand = random(min, max);

    if (rand === 10) { console.log(rand) }

} while (rand !== 10);
console.log();