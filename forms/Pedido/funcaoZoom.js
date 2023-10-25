function setSelectedZoomItem(selectedItem) {
    switch (selectedItem.inputId) {
        case "cadastroCliente":
            window["endereco"].setValue(selectedItem["logradouro"]);
            window["telefone"].setValue(selectedItem["telefone"]);
            break;
        case "endereco":
            window["cadastroCliente"].setValue(selectedItem["nome"]);
            window["telefone"].setValue(selectedItem["telefone"]);
            break;
        case "telefone":
            window["cadastroCliente"].setValue(selectedItem["nome"]);
            window["endereco"].setValue(selectedItem["logradouro"]);
            break;
        default:
            break;
    }
}

function removedZoomItem(removedItem) {
    switch (removedItem.inputId) {
        case "cadastroCliente":
            window["endereco"].clear();
            window["telefone"].clear();
            break;
        case "endereco":
            window["cadastroCliente"].clear();
            window["telefone"].clear();
            break;
        case "telefone":
            window["cadastroCliente"].clear();
            window["endereco"].clear();
            break;
        default:
            break;
    }
}
