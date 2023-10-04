const sequelize = require('sequelize');
const { constrollesDbPostpokemons } = require('../controllersPokemons/Post');


const handlerPostPokemons = async (req, res) => {
        const {name, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso }=req.body;
    try {
        const DbRespuesta = await constrollesDbPostpokemons(name, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso);
      res.status(200).json(DbRespuesta);
    } catch (error) {
      res.status(502).json({ error: error.message });
    }
  };
  

module.exports={
    handlerPostPokemons 
}
 
