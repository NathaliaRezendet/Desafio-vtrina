// import { apiLocal } from "./apiLocal.js";
import { limpaCampos, validacao } from "./validaCampos.js";

$('#buscar').click((event) => {
    event.preventDefault();
    console.log('busca');
    validacao();
  });
$('#limpar').click((event) => {
    event.preventDefault();
    console.log('limpo');
    limpaCampos();
  });