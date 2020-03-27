function exibeResultado(respostas) {
    let xLinha = document.querySelector("#x-1");
    let xDLinha = document.querySelector("#x-2");
    xLinha.innerHTML = respostas.xI;
    xDLinha.innerHTML = respostas.xII;
    respostasX[0].classList.remove("resposta");
    respostasX[1].classList.remove("resposta");

}