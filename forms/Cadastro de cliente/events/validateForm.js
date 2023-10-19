function validateForm(form){
	
	var msg = "";
	
	/* cadastro do cliente */
	if(form.getValue("nome") == ""){
		msg+= "* NOME obrigatório";
	}
	
	if(form.getValue("telefone") == ""){
		msg+= "* TELEFONE obrigatório";
	}
	
	/* localização */
	if(form.getValue("cep") == ""){
		msg+= "* CEP obrigatório";
	}

	if(form.getValue("rua") == ""){
		msg+= "* RUA obrigatório";
	}
	
	if(form.getValue("numero") == ""){
		msg+= "* NUMERO obrigatório";
	}
	
	if(form.getValue("bairro") == ""){
		msg+= "* BAIRRO obrigatório";
	}
	
	if(form.getValue("cidade") == ""){
		msg+= "* CIDADE obrigatório";
	}
	
	if(form.getValue("estado") == ""){
		msg+= "* ESTADO obrigatório";
	}
	
	if (msg != ""){
		throw msg;
	}
}