$(document).ready(function() {
    $('#preco').inputmask("numeric", {
        radixPoint: ".", // Ponto separador de decimal
        groupSeparator: ",", // Separador de milhares
        autoGroup: true,
        prefix: 'R$ ', // Prefixo do dinheiro
        digits: 2, // Número de casas decimais
        digitsOptional: false,
        placeholder: '0',
        rightAlign: false,
        oncleared: function () {
            // Lógica a ser executada quando o campo é limpo
        }
    });
});