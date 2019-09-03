let btnCalcular = document.querySelector("#botao-calcular");


btnCalcular.addEventListener("click", function (event) {
    event.preventDefault();
    let form = document.querySelector("#formulario");
    let dados = dadosFormulario(form);

    if (dados.a == "" || dados.b == "" || dados.c == "") {
        alert("Preencha todos os campos!");
    } else if (dados.a == 0) {
        alert("O valor de A não pode ser 0!");
    } else {
        let calculoDelta = delta(dados);
        exibeResultado(dados, calculoDelta);
    }
});

function dadosFormulario(form) {
    let dados = {
        a: form.a.value,
        b: form.b.value,
        c: form.c.value
    }
    return dados
}

function delta(dados) {
    let b2 = Math.pow(dados.b, 2);
    console.log("b2 " + b2);

    let ac = 4 * dados.a * dados.c;
    console.log("ac " + ac);

    let calculoDelta = (b2 - ac);
    console.log("Delta " + calculoDelta);

    return calculoDelta;
}

function exibeResultado(dados, calculoDelta) {

    if (calculoDelta < 0) {
        console.log("Valor de Delta negativo");
        resposta1.classList.add("resposta");
        resposta2.classList.add("resposta");
        alert("Valor de Delta negativo, não existem raízes reais.");
    } else {
        let resultado = Math.sqrt(calculoDelta);
        let divisor = 2 * dados.a;
        let x1;
        if ((-dados.b + resultado) % divisor == 0){
            x1 = (-dados.b + resultado) / divisor;
        } else {
            x1 = (-dados.b + resultado) + "/" + divisor;
        };
        console.log("X'= " + x1);
        let xLinha = document.querySelector("#x-1");
        xLinha.innerHTML = x1;

        let x2;
        if ((-dados.b - resultado) % divisor == 0){
            x2 = (-dados.b - resultado) / divisor;
        } else {
            x2 = (-dados.b - resultado) + "/" + divisor;
        };
        console.log("X''= " + x2);
        let xDLinha = document.querySelector("#x-2");
        xDLinha.innerHTML = x2;

        resposta1.classList.remove("resposta");
        resposta2.classList.remove("resposta");
    }
}
