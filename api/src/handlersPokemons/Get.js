const sequelize = require('sequelize');
const { controllersgetPokemons, constrollesDbgetpokemons } = require('../controllersPokemons/Get');


const handlergetPokemons = async (req, res) => {
    const respuestas = [];
  
    try {
      const apiRespuesta = await controllersgetPokemons();
      const DbRespuesta = await constrollesDbgetpokemons();
  
      if (!apiRespuesta && !DbRespuesta) {
        throw new Error("No Hubo Respuesta De La api y De La Base De Datos");
      }
  
      if (!apiRespuesta) {
        throw new Error("No Hubo Respuesta De La api");
      } else {
        respuestas.push(...apiRespuesta); 
      }
  
      if (!DbRespuesta) {
        throw new Error("No Hubo Respuesta De La Base De Datos");
      } else {
        respuestas.push(...DbRespuesta); 
      }
  
      res.status(200).send(respuestas);
    } catch (error) {
      res.status(502).json({ error: error.message });
    }
  };
  

module.exports={
    handlergetPokemons
}

