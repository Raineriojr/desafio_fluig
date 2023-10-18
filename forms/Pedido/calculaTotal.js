$(document).ready(function(){
	var dataset = DatasetFactory.getDataset("dsCardapio", null, null, null);

	var selectedItems = [];
	var total = 0;
	
	//seleciona uma linha da lista
	$(document).on('click', '.selecione', function() {
	    var rowIndex = $(this).data('index');
	    var selectedPizza = dataset.values[rowIndex]
	    
	    if(selectedItems.length < 2 || selectedItems.includes(selectedPizza)){	    	
	    	if(selectedItems.includes(selectedPizza)){
	    		var filteredItems = selectedItems.filter(function(item, index){
	    			return item != selectedPizza
	    		})
	    		selectedItems = filteredItems;
	    		
	    		$(this).removeClass('btn-success');
	    		$(this).text('Selecione')
	    		$('#P').prop('checked', true);
	    		
	    		var soma = 0;
	    		selectedItems.map(function(item, index) {
	    			soma = Number(item.preco.split(/\s/)[1]);
	    			total = soma/selectedItems.length;
	    			$('#valor-total').text(total.toFixed(2));
	    		})
	    		
	    		total = Number(selectedPizza.preco.split(/\s/)[1]);
	    		if(selectedItems.length == 0) {
	    			total = 0;
	    			$('#valor-total').text(total.toFixed(2));
	    		}
	    	}
	    	else {
	    		selectedItems.push(selectedPizza);
	    		
	    		$(this).addClass('btn-success');
	    		$(this).text('Selecionado')
	    		$('#P').prop('checked', true);
	    		
	    		var soma = 0;
	    		selectedItems.map(function(item, index) {
	    			soma += Number(item.preco.split(/\s/)[1]);
	    			total = soma/selectedItems.length;
	    			$('#valor-total').text(total.toFixed(2));
	    		})
	    	}
	    }
	});
	
	//pega tamanho selecionado e calcula total
	$(document).on('click', '.radio', function(){
		$('input[name="tamanho"]').change(function() {
		    
		    var tamanhoSelecionado = $('input[name="tamanho"]:checked').val();
		    
		    var totalTamanho = 0;
		    if(total > 0){
		    	if(tamanhoSelecionado == 'P'){
			    	totalTamanho = total;
			    }
			    if(tamanhoSelecionado == 'M'){
			    	totalTamanho = total + 10;
			    }
			    if(tamanhoSelecionado == 'G'){
			    	totalTamanho = total + 15;
			    }
			    if(tamanhoSelecionado == 'GG'){
			    	totalTamanho = total + 20;
			    }
			    $('#valor-total').text(totalTamanho.toFixed(2));
		    }
		});
	})
})