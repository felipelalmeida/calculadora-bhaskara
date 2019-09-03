let btnLimpar = document.querySelector("#botao-limpar");
let resposta1 = document.querySelector("#x-1")
let resposta2 = document.querySelector("#x-2")

btnLimpar.addEventListener("click", function () {
    let form = document.querySelector("#formulario");
    form.reset();

    resposta1.classList.add("resposta");
    resposta2.classList.add("resposta");
});
