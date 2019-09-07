function exibeResultado(respostas) {
    let xLinha = document.querySelector("#x-1");
    let xDLinha = document.querySelector("#x-2");
    xLinha.innerHTML = respostas.xI;
    xDLinha.innerHTML = respostas.xII;
    resposta1.classList.remove("resposta");
    resposta2.classList.remove("resposta");

}