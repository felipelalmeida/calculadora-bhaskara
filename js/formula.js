
var btnCalcular = document.querySelector("#botao-calcular");
var btnLimpar = document.querySelector("#botao-limpar");
var resposta1 = document.querySelector("#x-1")
var resposta2 = document.querySelector("#x-2")

btnCalcular.addEventListener("click", function (event) {
    event.preventDefault();     // previne o comportamento padrao do btn de enviar os dados e recarregar a pagina
    var form = document.querySelector("#formulario");
    var dados = dadosFormulario(form);
    var resultado = delta(dados);
    exibeResultado(dados, resultado);

    resposta1.classList.remove("resposta");
    resposta2.classList.remove("resposta");
});


btnLimpar.addEventListener("click", function () {
    var form = document.querySelector("#formulario");
    form.reset();
    
    resposta1.classList.add("resposta");
    resposta2.classList.add("resposta");
});


function dadosFormulario(form) {
    var dados = {
        a: form.a.value,
        b: form.b.value,
        c: form.c.value
    }
    return dados
}

function delta(dados) {
    var b2 = Math.pow(dados.b, 2);
    console.log("b2 " + b2);

    var ac = 4 * dados.a * dados.c;
    console.log("ac " + ac);

    var resultado = Math.sqrt(b2 - ac);

    console.log("resultado " + resultado);

    return resultado;
}

function exibeResultado(dados, resultado) {
    var x1 = ((-dados.b + resultado)) / (2 * dados.a);
    var xLinha = document.querySelector("#x-1");
    xLinha.innerHTML = x1;

    var x2 = ((-dados.b - resultado)) / (2 * dados.a);
    var xDLinha = document.querySelector("#x-2");
    xDLinha.innerHTML = x2;

}
