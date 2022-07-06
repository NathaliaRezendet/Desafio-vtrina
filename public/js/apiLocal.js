 export function apiLocal (cep) {
   const logradouro = $('#logradouro');
   const bairro = $('#bairro');
   const localidade = $('#localidade');
   const uf = $('#uf');
   const ibge = $('#ibge');
   const ddd = $('#ddd');
   
    $.ajax({url:`http://localhost:3000/${cep}`,

      success: (response) => {
        logradouro.val(response.logradouro)
        bairro.val(response.bairro)
        localidade.val(response.localidade)
        uf.val(response.uf)
        ibge.val(response.ibge)
        ddd.val(response.ddd)

        if (response.erro=='true') {         
              alert('erro')
        }
      },
    });  
  }

 