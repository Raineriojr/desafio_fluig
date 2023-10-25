function displayFields(form, customHTML) {
	customHTML.append("<script>function getFormMode(){ return '" + form.getFormMode() + "'; }</script>");
}