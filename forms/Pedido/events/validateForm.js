function validateForm(form){
	
	var msg = "";
	
	/* cadastro do cliente */
	if(form.getValue("nome") == ""){
		msg+= "Campo NOME não foi preenchido!";
	}
	
	if(form.getValue("rua") == ""){
		msg+= "Campo RUA não foi preenchido!";
	}
	
	if(form.getValue("telefone") == ""){
		msg+= "Campo TELEFONE não foi preenchido!";
	}
	
	
	/* forma de pagamento */
	
	if(form.getValue("formaDePagamento") == ""){
		msg+= "Campo DEBITO não foi preenchido!";
	}
	
	
	if(form.getValue("formaDePagamento") == ""){
		msg+= "Campo CRÉDITO não foi preenchido!";
	}
	if(form.getValue("formaDePagamento") == ""){
		msg+= "Campo DINHEIRO não foi preenchido!";
	}
	
	if(form.getValue("formaDePagamento") == ""){
		msg+= "Campo PIX não foi preenchido!";
	}
	
	/* Confirmar pagamento */
	
		
		
	if(form.getValue("valor") == ""){
		msg+= "Campo VALOR não foi preenchido!";
	}
	
	if(form.getValue("motoboy") == ""){
		msg+= "Campo ENTREGADOR não foi selecionado!";
	}
	
	if (msg != ""){
		throw msg;
	}
}