function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	// definir as colunas para o dataset
	
    var ds = DatasetBuilder.newDataset();
    
    ds.addColumn("nomeDaPizza");   
    ds.addColumn("tamanho");
    ds.addColumn("preco");

    // informações das pizzas ao dataset
    
    ds.addRow(new Array("Margherita - Molho de tomate, queijo, manjericão", "Grande", 39.99));
    ds.addRow(new Array("Margherita - Molho de tomate, queijo, manjericão", "Média", 12.99));
    ds.addRow(new Array("Pepperoni - Molho de tomate, queijo, pepperoni", "Média", 15.99));     
    ds.addRow(new Array("Pepperoni - Molho de tomate, queijo, pepperoni", "Grande", 47.50));
    ds.addRow(new Array("Vegetariana - Molho de tomate, queijo, legumes variados", "Pequena", 57.99));

    return ds;

}function onMobileSync(user) {

}