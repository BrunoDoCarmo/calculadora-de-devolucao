function contarAdicionadosComprado() {
  var numeroProdutosComprado = contarProdutosComprado();
  return numeroProdutosComprado;
}
function contarProdutosComprado() {
  var tabelaProdutosComprado = document.getElementById("tabela-produto-comprado-produtos").getElementsByTagName('tbody')[0];
  var numeroProdutosComprado = tabelaProdutosComprado.rows.length;
  return numeroProdutosComprado;
}