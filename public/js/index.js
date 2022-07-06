// import { apiLocal } from "./apiLocal.js";
import { limpaCampos, validacao } from "./validaCampos.js";

$('#buscar').click((event) => {
    event.preventDefault();
    validacao();
  });
$('#limpar').click((event) => {
    event.preventDefault();
    limpaCampos();
  });