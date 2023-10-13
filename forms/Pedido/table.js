$(document).ready(function() {
 
    var dataset = DatasetFactory.getDataset("dsCardapio", null, null, null);
        
    var tbody = $('#dataset-table tbody');
    
    dataset.values.forEach(function(row) {
        var newRow = '<tr>';
        
        newRow += '<td>' + row.pizza + '</td>'; 
        newRow += '<td>' + row.descricao + '</td>';
        newRow += '<td>' + row.preco + '</td>';
      
        newRow += '</tr>';
        tbody.append(newRow);
    });
});
