
// Função para adicionar o produto à tabela especificada
function adicionarProduto(produto, tabela, quantidadeDevolvida) {
  quantidadeDevolvida = produto.quantidadeCompra || 0
  // Selecionar a tabela correspondente
  var tabelaProdutos = document.getElementById("tabela-produto-" + tabela + "-produtos").getElementsByTagName('tbody')[0];
  var tabelaEncargos = document.getElementById("tabela-produto-" + tabela + "-encargos").getElementsByTagName('tbody')[0];
  var tabelaImpostosICMSINTEROP = document.getElementById("tabela-produto-" + tabela + "-impostos-icmsinterop").getElementsByTagName('tbody')[0];
  var tabelaImpostosDIFERIMENTO = document.getElementById("tabela-produto-" + tabela + "-impostos-diferimento").getElementsByTagName('tbody')[0];
  var tabelaImpostosICMS = document.getElementById("tabela-produto-" + tabela + "-impostos-icms").getElementsByTagName('tbody')[0];
  var tabelaImpostosICMSST = document.getElementById("tabela-produto-" + tabela + "-impostos-icmsst").getElementsByTagName('tbody')[0];
  var tabelaImpostosIPI = document.getElementById("tabela-produto-" + tabela + "-impostos-ipi").getElementsByTagName('tbody')[0];
  var tabelaImpostosMVA = document.getElementById("tabela-produto-" + tabela + "-impostos-mva").getElementsByTagName('tbody')[0];
  var tabelaImpostosPIS = document.getElementById("tabela-produto-" + tabela + "-impostos-pis").getElementsByTagName('tbody')[0];
  var tabelaImpostosCOFINS = document.getElementById("tabela-produto-" + tabela + "-impostos-cofins").getElementsByTagName('tbody')[0];
  // Inserir uma nova linha em cada tabela
  var novaLinhaProdutos = tabelaProdutos.insertRow();
  var novaLinhaEncargos = tabelaEncargos.insertRow();
  var novaLinhaImpostosICMSINTEROP = tabelaImpostosICMSINTEROP.insertRow();
  var novaLinhaImpostosDIFERIMENTO = tabelaImpostosDIFERIMENTO.insertRow();
  var novaLinhaImpostosICMS = tabelaImpostosICMS.insertRow();
  var novaLinhaImpostosICMSST = tabelaImpostosICMSST.insertRow();
  var novaLinhaImpostosIPI = tabelaImpostosIPI.insertRow();
  var novaLinhaImpostosMVA = tabelaImpostosMVA.insertRow();
  var novaLinhaImpostosPIS = tabelaImpostosPIS.insertRow();
  var novaLinhaImpostosCOFINS = tabelaImpostosCOFINS.insertRow();
  var valorUnitarioNumero = parseFloat(produto.valorUnitario);
  var quantidadeCompradaNumero = parseFloat(produto.quantidadeComprada);
  var quantidadeDevolvidaNumero = parseFloat(produto.quantidadeDevolvida);
  var freteNumero = parseFloat(produto.frete);
  var seguroNumero = parseFloat(produto.seguro);
  var outrasDespesasNumero = parseFloat(produto.outrasDespesas);
  var descontoNumero = parseFloat(produto.desconto);
  var valorUnitarioFormatado = valorUnitarioNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  var freteFormatado = freteNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  var seguroFormatado = seguroNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  var outrasDespesasFormatado = outrasDespesasNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  var descontoFormatado = descontoNumero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  //SUBTOTAL
  var subtotalComprada = valorUnitarioNumero * quantidadeCompradaNumero;
  var subtotalDevolvida = valorUnitarioNumero * quantidadeDevolvidaNumero;
  var subtotalCompradaFormatado = parseFloat(subtotalComprada).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  var subtotalDevolvidaFormatado = parseFloat(subtotalDevolvida).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  if (tabela === 'devolvido') {
    var freteRateioDivisao = freteNumero / quantidadeCompradaNumero
    var freteRateioMultiplicacao = freteRateioDivisao * quantidadeDevolvidaNumero
    var freteRateioFormatado = freteRateioMultiplicacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var seguroRateioDivisao = seguroNumero / quantidadeCompradaNumero
    var seguroRateioMultiplicacao = seguroRateioDivisao * quantidadeDevolvidaNumero
    var seguroRateioFormatado = seguroRateioMultiplicacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var outrasDespesasRateioDivisao = outrasDespesasNumero / quantidadeCompradaNumero
    var outrasDespesasRateioMultiplicacao = outrasDespesasRateioDivisao * quantidadeDevolvidaNumero
    var outrasDespesasRateioFormatado = outrasDespesasRateioMultiplicacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var descontoRateioDivisao = descontoNumero / quantidadeCompradaNumero
    var descontoRateioMultiplicacao = descontoRateioDivisao * quantidadeDevolvidaNumero
    var descontoRateioFormatado = descontoRateioMultiplicacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    var encargosDevolvido = freteRateioMultiplicacao + seguroRateioMultiplicacao + outrasDespesasRateioMultiplicacao - descontoRateioMultiplicacao
  }
  // Chamando a função preencherCelulas com a nova linha e os valores obtidos  
  preencherCelulas(novaLinhaProdutos, [
    valorUnitarioFormatado,
    tabela === 'devolvido' ? produto.quantidadeDevolvida : produto.quantidadeComprada,
    tabela === 'devolvido' ? subtotalDevolvidaFormatado : subtotalCompradaFormatado,
  ]);
  // CALCULO ENCARGOS
  var encargos = freteNumero + seguroNumero + outrasDespesasNumero - descontoNumero;
  preencherCelulas(novaLinhaEncargos, [
    tabela === 'devolvido' ? freteRateioFormatado : freteFormatado,
    tabela === 'devolvido' ? seguroRateioFormatado : seguroFormatado,
    tabela === 'devolvido' ? outrasDespesasRateioFormatado : outrasDespesasFormatado,
    tabela === 'devolvido' ? descontoRateioFormatado : descontoFormatado,
  ]);
  // IMPOSTO
  // ICMS INTER
  if (tabela === 'devolvido') {
    var bcICMSInterOP = (parseFloat(subtotalDevolvida) + parseFloat(encargosDevolvido));
    var bcICMSInterOPFormatado = parseFloat(bcICMSInterOP).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var vlrICMSInterOP = (parseFloat(bcICMSInterOP) * parseFloat(produto.aliqICMSInterOP) / 100).toFixed(2);
    var vlrICMSInterOPFormatado = parseFloat(vlrICMSInterOP).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  } else {
    var bcICMSInterOP = (parseFloat(subtotalComprada) + parseFloat(encargos));
    var bcICMSInterOPFormatado = parseFloat(bcICMSInterOP).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var vlrICMSInterOP = (parseFloat(bcICMSInterOP) * parseFloat(produto.aliqICMSInterOP) / 100).toFixed(2);
    var vlrICMSInterOPFormatado = parseFloat(vlrICMSInterOP).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  preencherCelulas(novaLinhaImpostosICMSINTEROP, [
    bcICMSInterOPFormatado,
    produto.aliqICMSInterOP,
    vlrICMSInterOPFormatado
  ]);
  // DIFERIMENTO
  var vlrDiferimento = (parseFloat(vlrICMSInterOP) * parseFloat(produto.aliqDiferimento) / 100).toFixed(2);
  var vlrDiferimentoFormatado = parseFloat(vlrDiferimento).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  preencherCelulas(novaLinhaImpostosDIFERIMENTO, [
    produto.aliqDiferimento,
    vlrDiferimentoFormatado,
  ]);
  // ICMS
  var vlrICMS = (parseFloat(vlrICMSInterOP) - parseFloat(vlrDiferimento)).toFixed(2);
  var vlrICMSFormatado = parseFloat(vlrICMS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  preencherCelulas(novaLinhaImpostosICMS, [
    vlrICMSFormatado,
  ]);
  // IPI
  if (tabela === 'devolvido') {
    var bcIPI = (parseFloat(subtotalDevolvida)).toFixed(2);
    var bcIPIFormatado = parseFloat(bcIPI).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var vlrIPI = (parseFloat(bcIPI) * parseFloat(produto.aliqIPI) / 100).toFixed(2);
    var vlrIPIFormatado = parseFloat(vlrIPI).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  } else {
    var bcIPI = (parseFloat(subtotalComprada)).toFixed(2);
    var bcIPIFormatado = parseFloat(bcIPI).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var vlrIPI = (parseFloat(bcIPI) * parseFloat(produto.aliqIPI) / 100).toFixed(2);
    var vlrIPIFormatado = parseFloat(vlrIPI).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  preencherCelulas(novaLinhaImpostosIPI, [
    bcIPIFormatado,
    produto.aliqIPI,
    vlrIPIFormatado
  ]);
  // ICMSST
  var bcICMSSTFormatado = "0";
  var vlrICMSSTFormatado = "0";
  if (tabela === 'devolvido') {
    if (produto.aliqMVA > 0) {
      var calc1 = (parseFloat(subtotalDevolvida) + parseFloat(encargosDevolvido) + parseFloat(vlrIPI)).toFixed(2);
      var calc2 = (parseFloat(calc1) * parseFloat(produto.aliqMVA) / 100).toFixed(2);
      var bcICMSST = (parseFloat(calc1) + parseFloat(calc2)).toFixed(2);
      var bcICMSSTFormatado = parseFloat(bcICMSST).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      var calc3 = (parseFloat(bcICMSST) * parseFloat(produto.aliqICMSST) / 100).toFixed(2);
      var vlrICMSST = (parseFloat(calc3) - parseFloat(vlrICMSInterOP)).toFixed(2);
      var vlrICMSSTFormatado = parseFloat(vlrICMSST).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  } else {
    if (produto.aliqMVA > 0) {
      var calc1 = (parseFloat(subtotalComprada) + parseFloat(encargos) + parseFloat(vlrIPI)).toFixed(2);
      var calc2 = (parseFloat(calc1) * parseFloat(produto.aliqMVA) / 100).toFixed(2);
      var bcICMSST = (parseFloat(calc1) + parseFloat(calc2)).toFixed(2);
      var bcICMSSTFormatado = parseFloat(bcICMSST).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      var calc3 = (parseFloat(bcICMSST) * parseFloat(produto.aliqICMSST) / 100).toFixed(2);
      var vlrICMSST = (parseFloat(calc3) - parseFloat(vlrICMSInterOP)).toFixed(2);
      var vlrICMSSTFormatado = parseFloat(vlrICMSST).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  }
  // // Preencher as células da linha de impostos ICMSST
  preencherCelulas(novaLinhaImpostosICMSST, [
    bcICMSSTFormatado,
    produto.aliqICMSST,
    vlrICMSSTFormatado
  ]);
  // // Preencher as células da linha de impostos MVA
  preencherCelulas(novaLinhaImpostosMVA, [produto.aliqMVA]);
  // // Preencher as células da linha de impostos PIS
  var bcPISFormatado = "0";
  var vlrPISFormatado = "0";
  if (produto.reducaoPisCofins) {
    var bcPIS = (parseFloat(bcICMSInterOP) - (parseFloat(bcICMSInterOP) * parseFloat(produto.aliqICMSInterOP) / 100)).toFixed(2)
    var bcPISFormatado = parseFloat(bcPIS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var vlrPIS = (parseFloat(bcPIS) * parseFloat(produto.aliqPIS) / 100).toFixed(2)
    var vlrPISFormatado = parseFloat(vlrPIS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  } else {
    if (tabela === 'devolvido') {
      var bcPIS = (parseFloat(subtotalDevolvida)).toFixed(2)
      var bcPISFormatado = parseFloat(bcPIS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      var vlrPIS = (parseFloat(bcPIS) * parseFloat(produto.aliqPIS) / 100).toFixed(2)
      var vlrPISFormatado = parseFloat(vlrPIS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    } else {
      var bcPIS = (parseFloat(subtotalComprada)).toFixed(2)
      var bcPISFormatado = parseFloat(bcPIS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      var vlrPIS = (parseFloat(bcPIS) * parseFloat(produto.aliqPIS) / 100).toFixed(2)
      var vlrPISFormatado = parseFloat(vlrPIS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  }
  preencherCelulas(novaLinhaImpostosPIS, [
    produto.reducaoPisCofins ? 'SIM' : 'NÃO',
    bcPISFormatado,
    produto.aliqPIS,
    vlrPISFormatado
  ]);
  // // Preencher as células da linha de impostos COFINS
  var bcCOFINSFormatado = "0";
  var vlrCOFINSFormatado = "0";
  if (produto.reducaoPisCofins) {
    var bcCOFINS = (parseFloat(bcICMSInterOP) - (parseFloat(bcICMSInterOP) * parseFloat(aliqICMSInterOP) / 100)).toFixed(2)
    var bcCOFINSFormatado = parseFloat(bcCOFINS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var vlrCOFINS = (parseFloat(bcCOFINS) * parseFloat(produto.aliqCOFINS) / 100).toFixed(2)
    var vlrCOFINSFormatado = parseFloat(vlrCOFINS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  } else {
    if (tabela === 'devolvido') {
      var bcCOFINS = (parseFloat(subtotalDevolvida)).toFixed(2)
      var bcCOFINSFormatado = parseFloat(bcCOFINS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      var vlrCOFINS = (parseFloat(bcCOFINS) * parseFloat(produto.aliqCOFINS) / 100).toFixed(2)
      var vlrCOFINSFormatado = parseFloat(vlrCOFINS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    } else {
      var bcCOFINS = (parseFloat(subtotalComprada)).toFixed(2)
      var bcCOFINSFormatado = parseFloat(bcCOFINS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
      var vlrCOFINS = (parseFloat(bcCOFINS) * parseFloat(produto.aliqCOFINS) / 100).toFixed(2)
      var vlrCOFINSFormatado = parseFloat(vlrCOFINS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  }
  preencherCelulas(novaLinhaImpostosCOFINS, [
    produto.reducaoPisCofins ? 'SIM' : 'NÃO',
    bcCOFINSFormatado,
    produto.aliqCOFINS,
    vlrCOFINSFormatado
  ]);
  // Exibir a tabela se ela estava oculta
  document.getElementById("tabela-produto-" + tabela + "-produtos").style.display = "table";
  document.getElementById("tabela-produto-" + tabela + "-encargos").style.display = "table";
  document.getElementById("tabela-produto-" + tabela + "-impostos-icmsinterop").style.display = "table";
  document.getElementById("tabela-produto-" + tabela + "-impostos-diferimento").style.display = "table";
  document.getElementById("tabela-produto-" + tabela + "-impostos-icms").style.display = "table";
  document.getElementById("tabela-produto-" + tabela + "-impostos-icmsst").style.display = "table";
  document.getElementById("tabela-produto-" + tabela + "-impostos-ipi").style.display = "table";
  document.getElementById("tabela-produto-" + tabela + "-impostos-mva").style.display = "table";
  document.getElementById("tabela-produto-" + tabela + "-impostos-pis").style.display = "table";
  document.getElementById("tabela-produto-" + tabela + "-impostos-cofins").style.display = "table";
  document.querySelector(".tabs").style.display = "flex";
  // Limpando os campos do modal após adicionar o produto à tabela
  limparCamposModal();
  // Fechar modal
  fecharModal('Produto');
  // Atualizar totais e contagem
  returnToTabsPrincipal();
  atualizarContagemComprado();
  atualizarTotaisCompra();

  returnToTabsPrincipalDevolvido();
  atualizarContagemDevolvido();
  atualizarTotaisCompraDevolvido();
}