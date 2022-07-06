import { apiLocal } from "./apiLocal.js";

export function validacao () {
    const cep = $('#cep').val().replace(/\D/g, '');
    const msgErro = $('#mensagem-erro');
   if(cep.length == 0)  {
    msgErro.css("display", "block");
    msgErro.text('Digite seu CEP'); 

} else if (cep.length < 8 || cep.length >= 9) {
        msgErro.css("display", "block");
        msgErro.text('CEP precisa ter 8 dígitos');
        
    } else {
        msgErro.css("display", "none");
        apiLocal(cep)
    }
}

export function limpaCampos() {
    $("#logradouro").val("");
    $("#bairro").val("");
    $("#localidade").val("");
    $("#uf").val("");
    $("#ibge").val("");
    $("#ddd").val("");
}