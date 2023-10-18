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
