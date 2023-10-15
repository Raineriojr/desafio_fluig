function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	  // colunas do dataset para clientes
	    var dsCadastro = DatasetBuilder.newDataset();
	    
	    dsCadastro.addColumn("cliente");
	    dsCadastro.addColumn("email");
	    dsCadastro.addColumn("telefone");
	    dsCadastro.addColumn("endereco");

	    // informações dos clientes ao dataset dados
	    
	    dsCadastro.addRow(new Array("Rodrigo Mauricio", "rodrigomauricio@email.com", "(11) 1234-5678", "Rua A, 123"));
	    dsCadastro.addRow(new Array("Rainério Santos", "rainerio@email.com", "(21) 9876-5432", "Avenida B, 456"));
	    dsCadastro.addRow(new Array("Maria Ferreira", "maria@email.com", "(31) 5555-7777", "Rua C, 789"));

	    return dsCadastro;

}function onMobileSync(user) {

}