function contarAdicionadosDevolvido() {
  var numeroProdutosDevolvido = contarProdutosDevolvido();
  return numeroProdutosDevolvido;
}
function contarProdutosDevolvido() {
  var tabelaProdutosDevolvido = document.getElementById("tabela-produto-devolvido-produtos").getElementsByTagName('tbody')[0];
  var numeroProdutosDevolvido = tabelaProdutosDevolvido.rows.length;
  return numeroProdutosDevolvido;
}