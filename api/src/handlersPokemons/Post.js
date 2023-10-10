const sequelize = require('sequelize');
const { constrollesDbPostpokemons } = require('../controllersPokemons/Post');



const handlerPostPokemons = async (req, res) => {
    const { name, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso, typeNames } = req.body;
    try {
      const createdPokemon = await constrollesDbPostpokemons(
        name,
        Imagen,
        Vida,
        Ataque,
        Defensa,
        Velocidad,
        Altura,
        Peso,
        typeNames
      );
      res.status(200).json(createdPokemon);
    } catch (error) {
      res.status(502).json({ error: error.message });
    }
  };
  

module.exports={
    handlerPostPokemons 
}
 
