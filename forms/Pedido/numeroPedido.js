
    // gerar automaticamente o número do pedido e preencher o campo
    document.addEventListener("DOMContentLoaded", function () {
        var numeroPedido = gerarNumeroPedido(); // Função para gerar um número de pedido
        document.getElementById("numero-pedido").value = numeroPedido;
    });

    function gerarNumeroPedido() {
        // gerar o número de pedido único
        // data atual e um número aleatório simples.
        var dataAtual = new Date();
        var numeroAleatorio = Math.floor(Math.random() * 1000);
        var numeroPedido = dataAtual.getTime() + "-" + numeroAleatorio;
        return numeroPedido;
    }
