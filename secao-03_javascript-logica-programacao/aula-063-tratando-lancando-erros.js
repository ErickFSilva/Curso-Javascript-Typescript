function soma(x, y) {

    if (typeof x !== 'number' || typeof y !== 'number') {

        throw new Error('x e y precisam ser números');
    }

    return x + y;
}

try {
    
    console.log(soma(1, 2));
    console.log();

    // console.log(soma('1', 2));
    console.log();
}
catch (err) {

    console.log(err);
    console.log();

    console.log('Alguma coisa mais amigável para o usuário!');
    console.log();
}