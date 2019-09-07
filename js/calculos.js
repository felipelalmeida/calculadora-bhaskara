function delta(dados) {
    let b2 = Math.pow(dados.b, 2);
    console.log("b2 " + b2);

    let ac = 4 * dados.a * dados.c;
    console.log("ac " + ac);

    let calculoDelta = (b2 - ac);
    console.log("Delta " + calculoDelta);

    return calculoDelta;
}

function resultados(dados, calculoDelta) {
    let raiz = Math.sqrt(calculoDelta);
    console.log(raiz);
    let x1;
    let x2;
    let divisor = 2 * dados.a;
    if (Number.isInteger(raiz)) {
        x1 = (-dados.b + raiz) / divisor;
        x2 = (-dados.b - raiz) / divisor;
    } else {
        x1 = (-dados.b) + " + √" + calculoDelta + "/" + divisor;
        x2 = (-dados.b) + " - √" + calculoDelta + "/" + divisor;
    }
    console.log("kkk" + x1);

    let respostas = {
        xI: x1,
        xII: x2
    }
    return respostas;
}