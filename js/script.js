function toggleSubTabs() {
  var tabsPrincipal = document.getElementById("tabsPrincipal");
  var subtabsContainer = document.getElementById("subtabsContainer");
  tabsPrincipal.style.display = "none";
  subtabsContainer.style.display = "flex";
  document.getElementsByClassName("tablinksComprado")[0].click();
}
function toggleSubTabsDevolvido() {
  var tabsPrincipalDevolvido = document.getElementById("tabsPrincipalDevolvido");
  var subtabsContainerDevolvido = document.getElementById("subtabsContainerDevolvido");
  tabsPrincipalDevolvido.style.display = "none";
  subtabsContainerDevolvido.style.display = "flex";
  document.getElementsByClassName("tablinksDevolvido")[0].click();
}
function returnToTabsPrincipal() {
  var tabsPrincipal = document.getElementById("tabsPrincipal");
  var subtabsContainer = document.getElementById("subtabsContainer");
  tabsPrincipal.style.display = "flex";
  subtabsContainer.style.display = "none";
  document.getElementsByClassName("tablinkComprado")[0].click();
}
function returnToTabsPrincipalDevolvido() {
  var tabsPrincipalDevolvido = document.getElementById("tabsPrincipalDevolvido");
  var subtabsContainerDevolvido = document.getElementById("subtabsContainerDevolvido");
  tabsPrincipalDevolvido.style.display = "flex";
  subtabsContainerDevolvido.style.display = "none";
  document.getElementsByClassName("tablinkDevolvido")[0].click();
}

// Função para adicionar o produto à tabela de comprado e devolvido
function adicionarProdutoCompradoEDevolvido() {
  // Recuperando os valores dos campos do modal
  var valorUnitario = document.getElementById("vlrunitInput").value;
  var quantidadeComprada = document.getElementById("qtdcompradaInput").value;
  var quantidadeDevolvida = document.getElementById("qtddevolvidaInput").value;
  var frete = document.getElementById("freteInput").value || 0;
  var seguro = document.getElementById("seguroInput").value || 0;
  var outrasDespesas = document.getElementById("despesasInput").value || 0;
  var desconto = document.getElementById("descontoInput").value || 0;
  var aliqICMSInterOP = document.getElementById("icmsInterInput").value || 0;
  var aliqDiferimento = document.getElementById("diferimentoInput").value || 0;
  var aliqIPI = document.getElementById("ipiInput").value || 0;
  var aliqMVA = document.getElementById("mvaInput").value || 0;
  var aliqICMSST = document.getElementById("icmsSTInput").value || 0;
  var reducaoPisCofins = document.getElementById("reducaoPisCofinsInput").checked;
  var aliqPIS = document.getElementById("pisInput").value || 0;
  var aliqCOFINS = document.getElementById("cofinsInput").value || 0;

  // Criando objeto representando o produto
  var produto = {
    valorUnitario: valorUnitario,
    quantidadeComprada: quantidadeComprada,
    quantidadeDevolvida: quantidadeDevolvida,
    frete: frete,
    seguro: seguro,
    outrasDespesas: outrasDespesas,
    desconto: desconto,
    aliqICMSInterOP: aliqICMSInterOP,
    aliqDiferimento: aliqDiferimento,
    aliqIPI: aliqIPI,
    aliqMVA: aliqMVA,
    aliqICMSST: aliqICMSST,
    reducaoPisCofins: reducaoPisCofins,
    aliqPIS: aliqPIS,
    aliqCOFINS: aliqCOFINS
  };
  // Adicionando o produto na tabela de comprado
  adicionarProduto(produto, "comprado");
  // Adicionando o produto na tabela de devolvido
  adicionarProduto(produto, "devolvido");
}

// Função para preencher as células com os valores do produto
function preencherCelulas(novaLinha, valores) {
  for (var i = 0; i < valores.length; i++) {
    var novaCelula = novaLinha.insertCell(i);
    novaCelula.innerHTML = valores[i];
  }
}
// Função para limpar os campos do modal
function limparCamposModal() {
  document.getElementById("vlrunitInput").value="";
  document.getElementById("qtdcompradaInput").value="";
  document.getElementById("qtddevolvidaInput").value = "";
  document.getElementById("freteInput").value="";
  document.getElementById("seguroInput").value="";
  document.getElementById("despesasInput").value="";
  document.getElementById("descontoInput").value="";
  document.getElementById("icmsInterInput").value="";
  document.getElementById("diferimentoInput").value="";
  document.getElementById("ipiInput").value="";
  document.getElementById("mvaInput").value="";
  document.getElementById("icmsSTInput").value="";
  document.getElementById("reducaoPisCofinsInput").checked = false;
  document.getElementById("pisInput").value="";
  document.getElementById("cofinsInput").value="";
}

function relogio() {
  var agora = new Date();

  var data = agora.toLocaleDateString();
  var hora = agora.toLocaleTimeString();

  document.querySelector('.data').textContent = "Data: " + data
  document.querySelector('.hora').textContent = "Hora: " + hora
}

setInterval(relogio, 1000)