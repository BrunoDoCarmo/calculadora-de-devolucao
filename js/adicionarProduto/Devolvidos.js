function adicionarProdutoDevolvido() {
    // Adicionando os valores à tabela
    // Selecionar as tabelas de produtos, encargos e impostos
    var tabelaProdutoDevolvidoProdutos = document.getElementById("tabela-produto-devolvido-produtos").getElementsByTagName('tbody')[0];
    var tabelaProdutoDevolvidoEncargos = document.getElementById("tabela-produto-devolvido-encargos").getElementsByTagName('tbody')[0];
    var tabelaProdutoDevolvidoImpostosICMSINTEROP = document.getElementById("tabela-produto-devolvido-impostos-icmsinterop").getElementsByTagName('tbody')[0];
    var tabelaProdutoDevolvidoImpostosDIFERIMENTO = document.getElementById("tabela-produto-devolvido-impostos-diferimento").getElementsByTagName('tbody')[0];
    var tabelaProdutoDevolvidoImpostosICMS = document.getElementById("tabela-produto-devolvido-impostos-icms").getElementsByTagName('tbody')[0];
    var tabelaProdutoDevolvidoImpostosICMSST = document.getElementById("tabela-produto-devolvido-impostos-icmsst").getElementsByTagName('tbody')[0];
    var tabelaProdutoDevolvidoImpostosIPI = document.getElementById("tabela-produto-devolvido-impostos-ipi").getElementsByTagName('tbody')[0];
    var tabelaProdutoDevolvidoImpostosMVA = document.getElementById("tabela-produto-devolvido-impostos-mva").getElementsByTagName('tbody')[0];
    var tabelaProdutoDevolvidoImpostosPIS = document.getElementById("tabela-produto-devolvido-impostos-pis").getElementsByTagName('tbody')[0];
    var tabelaProdutoDevolvidoImpostosCOFINS = document.getElementById("tabela-produto-devolvido-impostos-cofins").getElementsByTagName('tbody')[0];

    // Inserir uma nova linha em cada tabela
    var novaLinhaDevolvidoProdutos = tabelaProdutoDevolvidoProdutos.insertRow();
    var novaLinhaDevolvidoEncargos = tabelaProdutoDevolvidoEncargos.insertRow();
    var novaLinhaDevolvidoImpostosICMSINTEROP = tabelaProdutoDevolvidoImpostosICMSINTEROP.insertRow();
    var novaLinhaDevolvidoImpostosDIFERIMENTO = tabelaProdutoDevolvidoImpostosDIFERIMENTO.insertRow();
    var novaLinhaDevolvidoImpostosICMS = tabelaProdutoDevolvidoImpostosICMS.insertRow();
    var novaLinhaDevolvidoImpostosICMSST = tabelaProdutoDevolvidoImpostosICMSST.insertRow();
    var novaLinhaDevolvidoImpostosIPI = tabelaProdutoDevolvidoImpostosIPI.insertRow();
    var novaLinhaDevolvidoImpostosMVA = tabelaProdutoDevolvidoImpostosMVA.insertRow();
    var novaLinhaDevolvidoImpostosPIS = tabelaProdutoDevolvidoImpostosPIS.insertRow();
    var novaLinhaDevolvidoImpostosCOFINS = tabelaProdutoDevolvidoImpostosCOFINS.insertRow();

    // Array com os valores das células para cada seção (produtos, encargos e impostos)
    var celulasDevolvidosProdutos = [
    ];
    var celulasDevolvidosEncargos = [
    ];
    var celulasDevolvidosImpostosICMSINTEROP = [
    ];
    var celulasDevolvidosImpostosDIFERIMENTO = [
    ];
    var celulasDevolvidosImpostosICMS = [
    ];
    var celulasDevolvidosImpostosICMSST = [
    ];
    var celulasDevolvidosImpostosIPI = [
    ];
    var celulasDevolvidosImpostosMVA = [
    ];
    var celulasDevolvidosImpostosPIS = [
    ];
    var celulasDevolvidosImpostosCOFINS = [
    ];
    // Função para inserir as células em uma linha
    function inserirCelulasDevolvido(novaLinhaDevolvido, celulasDevolvido) {
        for (var i = 0; i < celulasDevolvido.length; i++) {
            var novaCelulaDevolvido = novaLinhaDevolvido.insertCell(i);
            novaCelulaDevolvido.innerHTML = celulasDevolvido[i];
        }
    }

    inserirCelulasDevolvido(novaLinhaDevolvidoProdutos, celulasDevolvidosProdutos);
    inserirCelulasDevolvido(novaLinhaDevolvidoEncargos, celulasDevolvidosEncargos);
    inserirCelulasDevolvido(novaLinhaDevolvidoImpostosICMSINTEROP, celulasDevolvidosImpostosICMSINTEROP);
    inserirCelulasDevolvido(novaLinhaDevolvidoImpostosDIFERIMENTO, celulasDevolvidosImpostosDIFERIMENTO);
    inserirCelulasDevolvido(novaLinhaDevolvidoImpostosICMS, celulasDevolvidosImpostosICMS);
    inserirCelulasDevolvido(novaLinhaDevolvidoImpostosICMSST, celulasDevolvidosImpostosICMSST);
    inserirCelulasDevolvido(novaLinhaDevolvidoImpostosIPI, celulasDevolvidosImpostosIPI);
    inserirCelulasDevolvido(novaLinhaDevolvidoImpostosMVA, celulasDevolvidosImpostosMVA);
    inserirCelulasDevolvido(novaLinhaDevolvidoImpostosPIS, celulasDevolvidosImpostosPIS);
    inserirCelulasDevolvido(novaLinhaDevolvidoImpostosCOFINS, celulasDevolvidosImpostosCOFINS);

    document.getElementById("tabela-produto-devolvido-produtos").style.display = "table";
    document.getElementById("tabela-produto-devolvido-encargos").style.display = "table";
    document.getElementById("tabela-produto-devolvido-impostos-icmsinterop").style.display = "table";
    document.getElementById("tabela-produto-devolvido-impostos-diferimento").style.display = "table";
    document.getElementById("tabela-produto-devolvido-impostos-icms").style.display = "table";
    document.getElementById("tabela-produto-devolvido-impostos-icmsst").style.display = "table";
    document.getElementById("tabela-produto-devolvido-impostos-ipi").style.display = "table";
    document.getElementById("tabela-produto-devolvido-impostos-mva").style.display = "table";
    document.getElementById("tabela-produto-devolvido-impostos-pis").style.display = "table";
    document.getElementById("tabela-produto-devolvido-impostos-cofins").style.display = "table";
    document.querySelector(".tabs").style.display = "flex";
}