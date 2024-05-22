function atualizarContagemComprado() {
    document.querySelector(".circulo").style.opacity = '1';
    document.querySelector("#contagemComprado").style.marginTop = '0.5rem';
    document.querySelector("#contagemComprado").style.marginLeft = '0.25rem';
    var contagemElemento = document.getElementById("contagemComprado");
    var numeroAdicionados = contarAdicionadosComprado();
    contagemElemento.textContent = numeroAdicionados.toString();
}