// NodeList - Browser

const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

console.log(paragrafos);
console.log(ps);


// Recupera os estilos do body
const estilosBody = getComputedStyle(document.body);
const bgColorBody = estilosBody.backgroundColor;


// Iterando o elemento 'p'
for (let p of ps) {
    p.style.padding = '5px';
    p.style.borderRadius = '10px';
    p.style.color = '#fafafa';
    p.style.backgroundColor = bgColorBody;
}