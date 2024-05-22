function atualizarContagemDevolvido() {
  document.querySelector(".circuloDevolvido").style.opacity = '1';
  document.querySelector("#contagemDevolvido").style.marginTop = '0.5rem';
  document.querySelector("#contagemDevolvido").style.marginLeft = '0.25rem';
  var contagemElementoDevolvido = document.getElementById("contagemDevolvido");
  var numeroAdicionadosDevolvido = contarAdicionadosDevolvido();
  contagemElementoDevolvido.textContent = numeroAdicionadosDevolvido.toString();
}