function atualizarTotaisCompra() {
  var totalVLRNOTA = 0;
  function atualizarTotaisComprasProdutos() {
    var tabelaCompraProdutos = document.getElementById("tabela-produto-comprado-produtos");
    var totalSUBTOTAL = 0;
    for (var p = 1; p < tabelaCompraProdutos.rows.length; p++) {
      var subtotalFormatado = tabelaCompraProdutos.rows[p].cells[2].textContent;
      var subtotalNumerico = parseFloat(subtotalFormatado.replace('R$', '').replace(/\./g, '').replace(',', '.'));
      totalSUBTOTAL += subtotalNumerico;
    }
    document.getElementById("subtotalInput").value = parseFloat(totalSUBTOTAL).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return totalSUBTOTAL;
  }
  function atualizarTotaisComprasEncargos() {
    var tabelaCompraEncargos = document.getElementById("tabela-produto-comprado-encargos");
    var totaisEncargos = {
      frete: 0,
      seguro: 0,
      desconto: 0,
      outrasDespesas: 0
    };
    for (var e = 1; e < tabelaCompraEncargos.rows.length; e++) {
      var freteFormatado = tabelaCompraEncargos.rows[e].cells[0].textContent;
      var seguroFormatado = tabelaCompraEncargos.rows[e].cells[1].textContent;
      var outrasDespesasFormatado = tabelaCompraEncargos.rows[e].cells[2].textContent;
      var descontoFormatado = tabelaCompraEncargos.rows[e].cells[3].textContent;
      var freteNumerico = parseFloat(freteFormatado.replace('R$', '').replace(/\./g, '').replace(',', '.'));
      var seguroNumerico = parseFloat(seguroFormatado.replace('R$', '').replace(/\./g, '').replace(',', '.'));
      var outrasDespesasNumerico = parseFloat(outrasDespesasFormatado.replace('R$', '').replace(/\./g, '').replace(',', '.'));
      var descontoNumerico = parseFloat(descontoFormatado.replace('R$', '').replace(/\./g, '').replace(',', '.'));
      totaisEncargos.frete += freteNumerico;
      totaisEncargos.seguro += seguroNumerico;
      totaisEncargos.outrasDespesas += outrasDespesasNumerico;
      totaisEncargos.desconto += descontoNumerico;
    }
    document.getElementById("vlrFreteInput").value = parseFloat(totaisEncargos.frete).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("vlrSeguroInput").value = parseFloat(totaisEncargos.seguro).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("vlrDescontoInput").value = parseFloat(totaisEncargos.desconto).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("vlrDespesasasInput").value = parseFloat(totaisEncargos.outrasDespesas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return totaisEncargos;
  }
  function atualizarTotaisComprasImpostosICMSInterOP() {
    var tabelaCompraImpostosICMSInterOP = document.getElementById("tabela-produto-comprado-impostos-icmsinterop");
    var totaisImpostosICMSInterOP = {
      bcICMSInterOP: 0,
    };
    for (var icmsinterop = 1; icmsinterop < tabelaCompraImpostosICMSInterOP.rows.length; icmsinterop++) {
      var bcICMSInterOPFormatado = tabelaCompraImpostosICMSInterOP.rows[icmsinterop].cells[0].textContent;
      var bcICMSInterOPNumerico = parseFloat(bcICMSInterOPFormatado.replace('R$', '').replace(/\./g, '').replace(',', '.'));
      totaisImpostosICMSInterOP.bcICMSInterOP += bcICMSInterOPNumerico;
    }
    document.getElementById("bcICMSInput").value = parseFloat(totaisImpostosICMSInterOP.bcICMSInterOP).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return totaisImpostosICMSInterOP;
  }
  function atualizarTotaisComprasImpostosICMS() {
    var tabelaCompraImpostosICMS = document.getElementById("tabela-produto-comprado-impostos-icms");
    var totalVLRICMS = 0
    for (var icms = 1; icms < tabelaCompraImpostosICMS.rows.length; icms++) {
      var vlrICMSFormatado = tabelaCompraImpostosICMS.rows[icms].cells[0].textContent;
      var vlrICMSNumerico = parseFloat(vlrICMSFormatado.replace('R$', '').replace(/\./g, '').replace(',', '.'));
      totalVLRICMS += vlrICMSNumerico;
    }
    document.getElementById("vlrICMSInput").value = parseFloat(totalVLRICMS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return totalVLRICMS;
  }
  function atualizarTotaisComprasImpostosIPI() {
    var tabelaCompraImpostosIPI = document.getElementById("tabela-produto-comprado-impostos-ipi");
    var totalVLRIPI = 0;
    for (var ipi = 1; ipi < tabelaCompraImpostosIPI.rows.length; ipi++) {
      var vlrIPIFormatado = tabelaCompraImpostosIPI.rows[ipi].cells[2].textContent;
      var vlrIPINumerico = parseFloat(vlrIPIFormatado.replace('R$', '').replace(/\./g, '').replace(',', '.'));
      totalVLRIPI += vlrIPINumerico;
    }
    document.getElementById("vlrIPIInput").value = parseFloat(totalVLRIPI).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return totalVLRIPI;
  }
  function atualizarTotaisComprasImpostosICMSST() {
    var tabelaCompraImpostosICMSST = document.getElementById("tabela-produto-comprado-impostos-icmsst");
    var totalBCICMSST = 0;
    var totalVLRICMSST = 0;
    for (var icmsst = 1; icmsst < tabelaCompraImpostosICMSST.rows.length; icmsst++) {
      var bcICMSSTFormatado = tabelaCompraImpostosICMSST.rows[icmsst].cells[0].textContent;
      var vlrICMSSTFormatado = tabelaCompraImpostosICMSST.rows[icmsst].cells[2].textContent;
      var bcICMSSTNumerico = parseFloat(bcICMSSTFormatado.replace('R$', '').replace(/\./g, '').replace(',', '.'));
      var vlrICMSSTNumerico = parseFloat(vlrICMSSTFormatado.replace('R$', '').replace(/\./g, '').replace(',', '.'));
      totalBCICMSST += bcICMSSTNumerico;
      totalVLRICMSST += vlrICMSSTNumerico;
    }
    document.getElementById("bcICMSSTInput").value = parseFloat(totalBCICMSST).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || 0;
    document.getElementById("vlrICMSSTInput").value = parseFloat(totalVLRICMSST).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) || 0;
    return {
      totalBCICMSST: totalBCICMSST,
      totalVLRICMSST: totalVLRICMSST
    };
  }
  var subtotalNumerico = atualizarTotaisComprasProdutos();
  var totaisEncargos = atualizarTotaisComprasEncargos();
  var totaisImpostosICMSInterOP = atualizarTotaisComprasImpostosICMSInterOP();
  var totaisImpostosICMS = atualizarTotaisComprasImpostosICMS();
  var totalVLRIPI = atualizarTotaisComprasImpostosIPI();
  var totaisICMSST = atualizarTotaisComprasImpostosICMSST();
  // Calcular o total da nota
  var totalNOTA = subtotalNumerico + totaisEncargos.frete - totaisEncargos.desconto + totaisEncargos.seguro + totaisEncargos.outrasDespesas + totaisICMSST.totalVLRICMSST + totalVLRIPI;
  totalVLRNOTA += totalNOTA;
  document.getElementById("vlrNOTAInput").value = parseFloat(totalVLRNOTA).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}