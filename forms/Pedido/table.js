$(document).ready(function() {

	var dataset = DatasetFactory.getDataset("dsCardapio", null, null, null);
	var tbody = $('#dataset-table-body');

	//renderiza a tabela
	$.each(dataset.values, function(index, item) {
		var newRow = '<tr>';
		newRow += '<td>' + item.pizza + '</td>';
		newRow += '<td>' + item.descricao + '</td>';
		newRow += '<td>' + item.preco + '</td>';
		newRow += '<td>' + '<button class="selecione btn" data-index="' +index+ '">Selecione</button>' + '</td>';
		newRow += '</tr>';
		$(tbody).append(newRow);
	});
});


/*$(document).ready(function() {

	var dataset = DatasetFactory.getDataset("dsCardapio", null, null, null);
	var tbody = $('#dataset-table-body');

	//renderiza a tabela
	$.each(dataset.values, function(index, item) {
		var newRow = '<tr>';
		newRow += '<td>' + item.pizza + '</td>';
		newRow += '<td>' + item.descricao + '</td>';
		newRow += '<td>';
		newRow += '<select name="preco" id="preco_' + index + '">';
		
		// Adicione opções ao select
		newRow += '<option value="">     </option>';
		newRow += '<option value="P">25.00</option>';
		newRow += '<option value="M">50.00</option>';
		newRow += '<option value="G">70.00</option>';
		
		
		//finalizando o select
		
		newRow += '</select>';
		newRow += '</td>';
		newRow += '<td>' + '<button class="selecione btn" data-index="' + index + '">Selecione</button>' + '</td>';
		newRow += '</tr>';
		$(tbody).append(newRow);
	})
});*/