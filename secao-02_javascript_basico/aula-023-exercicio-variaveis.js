let varA = 'A';
let varB = 'B';
let varC = 'C';
let apoio;

// - Método antigo:
// apoio = varA;
// varA = varB;
// varB = varC;
// varC = apoio;

// - Novo método:
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
