import  express  from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());


 async function apiCep (cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const res = await fetch(url);
    const json = await res.json();
    return json;
}
async function getData (numeros) {
    const data = await apiCep(numeros);
    return data;

}


app.get('/:cep', async (req, res) => {
  
  const {cep} =  req.params;
  console.log(cep)
  try {
    const resultData = await getData(cep);
    res.status(200).json(resultData);

  } catch(e) {
    res.status(404).json('CEP não encontrado');
    
  }
  });
   
export default app;
