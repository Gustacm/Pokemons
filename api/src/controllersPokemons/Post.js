const { Pokemon, Type } = require("../db");

const constrollesDbPostpokemons = async (
  name,
  Imagen,
  Vida,
  Ataque,
  Defensa,
  Velocidad,
  Altura,
  Peso,
  typeNames
) => {
  try {
    const createdPokemon = await Pokemon.findOrCreate({
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

    const pokemon = createdPokemon[0]; 

    for (const typeName of typeNames) {
      let type = await Type.findOne({ where: { name: typeName } });

      if (!type) {
        type = await Type.create({ name: typeName });
      }
      await pokemon.addType(type);
    }

    return pokemon;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  constrollesDbPostpokemons,
};
