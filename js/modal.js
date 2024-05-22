const modalProduto = document.querySelector('#modalProduto')
const modalProdutoComprado = document.querySelector('#modalProdutoComprado')
const modalProdutoDevolvido = document.querySelector('#modalProdutoDevolvido')
// Função para exibir o modal
function abrirModal(nomeModal) {
    switch (nomeModal) {
        case "ProdutoComprado":
            modalProdutoComprado.classList.add('active')
            break;
        case "ProdutoDevolvido":
            modalProdutoDevolvido.classList.add('active')
            break;
        case "Produto":
            const vlrunitInput = document.getElementById("vlrunitInput");
            modalProduto.classList.add('active')
            vlrunitInput.focus();
            break;
    }
}
function fecharModal(nomeModal) {
    switch (nomeModal) {
        case "ProdutoComprado":
            modalProdutoComprado.classList.remove('active')
            break;
        case "ProdutoDevolvido":
            modalProdutoDevolvido.classList.remove('active')
            break;
        case "Produto":
            modalProduto.classList.remove('active')
            break;
    }
}