// Função para adicionar o produto à tabela
function adicionarProdutoComprado() {
  // Recuperando os valores dos campos do modal
  var valorUnitario = document.getElementById("vlrunitInput").value;
  var quantidadeCompra = document.getElementById("qtdcompraInput").value;
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
  var reducaoPisCofinsTexto = reducaoPisCofins ? "Sim" : "Não";
  var aliqPIS = document.getElementById("pisInput").value || 0;
  var aliqCOFINS = document.getElementById("cofinsInput").value || 0;
  var valorUnitarioNumero = parseFloat(valorUnitario);
  var quantidadeCompraNumero = parseFloat(quantidadeCompra);
  var freteNumero = parseFloat(frete);
  var seguroNumero = parseFloat(seguro);
  var outrasDespesasNumero = parseFloat(outrasDespesas);
  var descontoNumero = parseFloat(desconto);
  var valorUnitarioFormatado = valorUnitarioNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  var freteFormatado = freteNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  var seguroFormatado = seguroNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  var outrasDespesasFormatado = outrasDespesasNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  var descontoFormatado = descontoNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  //SUBTOTAL
  var subtotal = valorUnitarioNumero * quantidadeCompraNumero;
  var subtotalFormatado = parseFloat(subtotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  // CALCULO ENCARGOS
  var encargos = freteNumero + seguroNumero + outrasDespesasNumero - descontoNumero;
  // IMPOSTO
  // ICMS INTER
  var bcICMSInterOP = (parseFloat(subtotal) + parseFloat(encargos));
  var bcICMSInterOPFormatado = parseFloat(bcICMSInterOP).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  var vlrICMSInterOP = (parseFloat(bcICMSInterOP) * parseFloat(aliqICMSInterOP) / 100).toFixed(2);
  var vlrICMSInterOPFormatado = parseFloat(vlrICMSInterOP).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  // DIFERIMENTO
  var vlrDiferimento = (parseFloat(vlrICMSInterOP) * parseFloat(aliqDiferimento) / 100).toFixed(2);
  var vlrDiferimentoFormatado = parseFloat(vlrDiferimento).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  // ICMS
  var vlrICMS = (parseFloat(vlrICMSInterOP) - parseFloat(vlrDiferimento)).toFixed(2);
  var vlrICMSFormatado = parseFloat(vlrICMS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  // IPI
  var bcIPI = (parseFloat(subtotal)).toFixed(2);
  var bcIPIFormatado = parseFloat(bcIPI).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  var vlrIPI = (parseFloat(bcIPI) * parseFloat(aliqIPI) / 100).toFixed(2);
  var vlrIPIFormatado = parseFloat(vlrIPI).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  // MVA
  var bcICMSSTFormatado = "0";
  var vlrICMSSTFormatado = "0";
  if (aliqMVA > 0) {
    var calc1 = (parseFloat(subtotal) + parseFloat(encargos) + parseFloat(vlrIPI)).toFixed(2);
    var calc2 = (parseFloat(calc1) * parseFloat(aliqMVA) / 100).toFixed(2);
    var bcICMSST = (parseFloat(calc1) + parseFloat(calc2)).toFixed(2);
    var bcICMSSTFormatado = parseFloat(bcICMSST).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var calc3 = (parseFloat(bcICMSST) * parseFloat(aliqICMSST) / 100).toFixed(2);
    var vlrICMSST = (parseFloat(calc3) - parseFloat(vlrICMSInterOP)).toFixed(2);
    var vlrICMSSTFormatado = parseFloat(vlrICMSST).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  // PIS
  var bcPISFormatado = "0";
  var vlrPISFormatado = "0";
  if (reducaoPisCofins) {
    var bcPIS = (parseFloat(bcICMSInterOP) - (parseFloat(bcICMSInterOP) * parseFloat(aliqICMSInterOP) / 100)).toFixed(2)
    var bcPISFormatado = parseFloat(bcPIS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var vlrPIS = (parseFloat(bcPIS) * parseFloat(aliqPIS) / 100).toFixed(2)
    var vlrPISFormatado = parseFloat(vlrPIS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var bcCOFINS = (parseFloat(bcICMSInterOP) - (parseFloat(bcICMSInterOP) * parseFloat(aliqICMSInterOP) / 100)).toFixed(2)
    var bcCOFINSFormatado = parseFloat(bcCOFINS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var vlrCOFINS = (parseFloat(bcCOFINS) * parseFloat(aliqCOFINS) / 100).toFixed(2)
    var vlrCOFINSFormatado = parseFloat(vlrCOFINS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  } else {
    var bcPIS = (parseFloat(subtotal)).toFixed(2)
    var bcPISFormatado = parseFloat(bcPIS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var vlrPIS = (parseFloat(bcPIS) * parseFloat(aliqPIS) / 100).toFixed(2)
    var vlrPISFormatado = parseFloat(vlrPIS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var bcCOFINS = (parseFloat(subtotal)).toFixed(2)
    var bcCOFINSFormatado = parseFloat(bcCOFINS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var vlrCOFINS = (parseFloat(bcCOFINS) * parseFloat(aliqCOFINS) / 100).toFixed(2)
    var vlrCOFINSFormatado = parseFloat(vlrCOFINS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  // Adicionando os valores à tabela
  // Selecionar as tabelas de produtos, encargos e impostos
  var tabelaProdutoCompradoProdutos = document.getElementById("tabela-produto-comprado-produtos").getElementsByTagName('tbody')[0];
  var tabelaProdutoCompradoEncargos = document.getElementById("tabela-produto-comprado-encargos").getElementsByTagName('tbody')[0];
  var tabelaProdutoCompradoImpostosICMSINTEROP = document.getElementById("tabela-produto-comprado-impostos-icmsinterop").getElementsByTagName('tbody')[0];
  var tabelaProdutoCompradoImpostosDIFERIMENTO = document.getElementById("tabela-produto-comprado-impostos-diferimento").getElementsByTagName('tbody')[0];
  var tabelaProdutoCompradoImpostosICMS = document.getElementById("tabela-produto-comprado-impostos-icms").getElementsByTagName('tbody')[0];
  var tabelaProdutoCompradoImpostosICMSST = document.getElementById("tabela-produto-comprado-impostos-icmsst").getElementsByTagName('tbody')[0];
  var tabelaProdutoCompradoImpostosIPI = document.getElementById("tabela-produto-comprado-impostos-ipi").getElementsByTagName('tbody')[0];
  var tabelaProdutoCompradoImpostosMVA = document.getElementById("tabela-produto-comprado-impostos-mva").getElementsByTagName('tbody')[0];
  var tabelaProdutoCompradoImpostosPIS = document.getElementById("tabela-produto-comprado-impostos-pis").getElementsByTagName('tbody')[0];
  var tabelaProdutoCompradoImpostosCOFINS = document.getElementById("tabela-produto-comprado-impostos-cofins").getElementsByTagName('tbody')[0];
  // Inserir uma nova linha em cada tabela
  var novaLinhaProdutos = tabelaProdutoCompradoProdutos.insertRow();
  var novaLinhaEncargos = tabelaProdutoCompradoEncargos.insertRow();
  var novaLinhaImpostosICMSINTEROP = tabelaProdutoCompradoImpostosICMSINTEROP.insertRow();
  var novaLinhaImpostosDIFERIMENTO = tabelaProdutoCompradoImpostosDIFERIMENTO.insertRow();
  var novaLinhaImpostosICMS = tabelaProdutoCompradoImpostosICMS.insertRow();
  var novaLinhaImpostosICMSST = tabelaProdutoCompradoImpostosICMSST.insertRow();
  var novaLinhaImpostosIPI = tabelaProdutoCompradoImpostosIPI.insertRow();
  var novaLinhaImpostosMVA = tabelaProdutoCompradoImpostosMVA.insertRow();
  var novaLinhaImpostosPIS = tabelaProdutoCompradoImpostosPIS.insertRow();
  var novaLinhaImpostosCOFINS = tabelaProdutoCompradoImpostosCOFINS.insertRow();
  // Array com os valores das células para cada seção (produtos, encargos e impostos)
  var celulasProdutos = [
    valorUnitarioFormatado,
    quantidadeCompra,
    subtotalFormatado
  ];
  var celulasEncargos = [
    freteFormatado,
    seguroFormatado,
    outrasDespesasFormatado,
    descontoFormatado
  ];
  var celulasImpostosICMSINTEROP = [
    bcICMSInterOPFormatado,
    aliqICMSInterOP,
    vlrICMSInterOPFormatado
  ];
  var celulasImpostosDIFERIMENTO = [
    aliqDiferimento,
    vlrDiferimentoFormatado
  ];
  var celulasImpostosICMS = [
    vlrICMSFormatado
  ];
  var celulasImpostosIPI = [
    bcIPIFormatado,
    aliqIPI,
    vlrIPIFormatado
  ];
  var celulasImpostosMVA = [
    aliqMVA
  ];
  var celulasImpostosICMSST = [
    bcICMSSTFormatado,
    aliqICMSST,
    vlrICMSSTFormatado
  ];
  var celulasImpostosPIS = [
    reducaoPisCofinsTexto,
    bcPISFormatado,
    aliqPIS,
    vlrPISFormatado
  ];
  var celulasImpostosCOFINS = [
    reducaoPisCofinsTexto,
    bcCOFINSFormatado,
    aliqCOFINS,
    vlrCOFINSFormatado
  ];
  // Função para inserir as células em uma linha
  function inserirCelulas(novaLinha, celulas) {
    for (var i = 0; i < celulas.length; i++) {
      var novaCelula = novaLinha.insertCell(i);
      novaCelula.innerHTML = celulas[i];
    }
  }
  // Inserir as células nas respectivas linhas e tabelas
  inserirCelulas(novaLinhaProdutos, celulasProdutos);
  inserirCelulas(novaLinhaEncargos, celulasEncargos);
  // inserirCelulas(novaLinhaImpostos, celulasImpostos);
  inserirCelulas(novaLinhaImpostosICMSINTEROP, celulasImpostosICMSINTEROP);
  inserirCelulas(novaLinhaImpostosDIFERIMENTO, celulasImpostosDIFERIMENTO);
  inserirCelulas(novaLinhaImpostosICMS, celulasImpostosICMS);
  inserirCelulas(novaLinhaImpostosICMSST, celulasImpostosICMSST);
  inserirCelulas(novaLinhaImpostosIPI, celulasImpostosIPI);
  inserirCelulas(novaLinhaImpostosMVA, celulasImpostosMVA);
  inserirCelulas(novaLinhaImpostosPIS, celulasImpostosPIS);
  inserirCelulas(novaLinhaImpostosCOFINS, celulasImpostosCOFINS);
  // Exibir a tabela se ela estava oculta
  document.getElementById("tabela-produto-comprado-produtos").style.display = "table";
  document.getElementById("tabela-produto-comprado-encargos").style.display = "table";
  document.getElementById("tabela-produto-comprado-impostos-icmsinterop").style.display = "table";
  document.getElementById("tabela-produto-comprado-impostos-diferimento").style.display = "table";
  document.getElementById("tabela-produto-comprado-impostos-icms").style.display = "table";
  document.getElementById("tabela-produto-comprado-impostos-icmsst").style.display = "table";
  document.getElementById("tabela-produto-comprado-impostos-ipi").style.display = "table";
  document.getElementById("tabela-produto-comprado-impostos-mva").style.display = "table";
  document.getElementById("tabela-produto-comprado-impostos-pis").style.display = "table";
  document.getElementById("tabela-produto-comprado-impostos-cofins").style.display = "table";
  document.querySelector(".tabs").style.display = "flex";
  // Limpando os campos do modal após adicionar o produto à tabela
  function limparCamposModal() {
    document.getElementById("vlrunitInput").value = "";
    document.getElementById("qtdcompraInput").value = "1";
    document.getElementById("freteInput").value = "";
    document.getElementById("seguroInput").value = "";
    document.getElementById("despesasInput").value = "";
    document.getElementById("descontoInput").value = "";
    document.getElementById("icmsInterInput").value = "";
    document.getElementById("diferimentoInput").value = "";
    document.getElementById("ipiInput").value = "";
    document.getElementById("mvaInput").value = "";
    document.getElementById("icmsSTInput").value = "";
    document.getElementById("reducaoPisCofinsInput").checked = false; // Correção aqui
    document.getElementById("pisInput").value = "";
    document.getElementById("cofinsInput").value = "";
}
  // Fechar modal
  fecharModal('Produto');
  atualizarTotaisCompra();
  atualizarContagemComprado();
  returnToTabsPrincipal();
  returnToTabsPrincipalDevolvido();
  adicionarProdutoDevolvido();
}