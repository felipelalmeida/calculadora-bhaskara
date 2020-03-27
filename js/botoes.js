const btnCalcular = document.querySelector("#botao-calcular");
const btnLimpar = document.querySelector("#botao-limpar");
let respostasX = document.getElementsByClassName("resp");

btnCalcular.addEventListener("click", function (event) {
    event.preventDefault();
    let form = document.querySelector("#formulario");
    const dados = dadosFormulario(form);

    if (dados.a == "" || dados.b == "" || dados.c == "") {
        alert("Preencha todos os campos!");
    } else if (dados.a == 0) {
        alert("O valor de A não pode ser 0.");
    } else {
        const calculoDelta = delta(dados);
        if (calculoDelta < 0) {
            alert("Valor de Delta negativo, não existem raízes reais.")
        } else {
            const respostas = resultados(dados, calculoDelta);
            exibeResultado(respostas);
        }
    }
});

btnLimpar.addEventListener("click", function () {
    let form = document.querySelector("#formulario");
    form.reset();

    respostasX[0].classList.add("resposta");
    respostasX[1].classList.add("resposta");
});


function dadosFormulario(form) {
    const dados = {
        a: form.a.value,
        b: form.b.value,
        c: form.c.value
    }
    return dados;
}