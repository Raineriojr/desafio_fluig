function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	  // colunas do dataset para clientes
	    var dsCadastro = DatasetBuilder.newDataset();
	    
	    dsCadastro.addColumn("cliente");	    
	    dsCadastro.addColumn("telefone");
	    
	    dsCadastro.addColumn("cep");
	    dsCadastro.addColumn("rua");
	    dsCadastro.addColumn("numero");
	    dsCadastro.addColumn("bairro");
	    dsCadastro.addColumn("cidade");
	    dsCadastro.addColumn("uf");

	    // informações dos clientes ao dataset dados
	    
	    dsCadastro.addRow(new Array("Rodrigo Mauricio", "(13) 99747-2734", "11446-560", "Rua Antônio Fagundes de Melo", 61, "Balneario Praia do Perequê", "Guarujá", "SP"));
	    dsCadastro.addRow(new Array("Rainério Junior", "(11) 98848-2734", "11446-560", "Rua Antônio Fagundes de Melo", 61, "Balneario Praia do Perequê", "Guarujá", "SP"));
	    dsCadastro.addRow(new Array("Kátia Santos", "(13) 99161-4785", "11446-560", "Rua Antônio Fagundes de Melo", 61, "Balneario Praia do Perequê", "Guarujá", "SP"));

	    return dsCadastro;

}function onMobileSync(user) {

}