$('#cep').blur(function() {
    $.getJSON('//brasilaberto.com/api/v1/zipcode/'+$('#cep').val(), function (dados) {
        $('#logradouro').val(dados.result.street)
        $('#bairro').val(dados.result.district)
        $('#cidade').val(dados.result.city)
        $('#estado').val(dados.result.stateShortname)
        $('#numero').focus()
    })
})