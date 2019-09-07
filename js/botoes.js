let btnCalcular = document.querySelector("#botao-calcular");
let btnLimpar = document.querySelector("#botao-limpar");
let resposta1 = document.querySelector("#x-1")
let resposta2 = document.querySelector("#x-2")


btnCalcular.addEventListener("click", function (event) {
    event.preventDefault();
    let form = document.querySelector("#formulario");
    let dados = dadosFormulario(form);

    if (dados.a == "" || dados.b == "" || dados.c == "") {
        alert("Preencha todos os campos!");
    } else if (dados.a == 0) {
        alert("O valor de A não pode ser 0.");
    } else {
        let calculoDelta = delta(dados);
        let respostas = resultados(dados, calculoDelta);
        exibeResultado(respostas);
    }
});

btnLimpar.addEventListener("click", function () {
    let form = document.querySelector("#formulario");
    form.reset();

    resposta1.classList.add("resposta");
    resposta2.classList.add("resposta");
});


function dadosFormulario(form) {
    let dados = {
        a: form.a.value,
        b: form.b.value,
        c: form.c.value
    }
    return dados
}