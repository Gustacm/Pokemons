const axios = require ("axios");
const {Pokemon} = require("../db");


const constrollesDbPostpokemons = async (name, Imagen, Vida, Ataque, Defensa, Velocidad, Altura, Peso) => {
    const [pokemon, created] = await Pokemon.findOrCreate({
      where: { name }, 
      defaults: {
        Imagen,
        Vida,
        Ataque,
        Defensa,
        Velocidad,
        Altura,
        Peso,
      }, 
    });
  
    return pokemon;
  };


module.exports={
    constrollesDbPostpokemons
}