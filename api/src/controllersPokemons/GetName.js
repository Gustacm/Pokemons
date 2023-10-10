const axios = require("axios");
const { Pokemon ,Type } = require("../db");
const { Sequelize } = require('sequelize');

const controllersNameGetPokemons = async (name) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const el = response.data;
    const infoPokemon = {
      id: el.id,
      name: el.name,
      image: [el.sprites.front_default, el.sprites.back_shiny, el.sprites.front_default, el.sprites.front_shiny],
      Vida: el.stats.find((sta) => sta.stat.name === 'hp').base_stat,
      Ataque: el.stats.find((sta) => sta.stat.name === 'attack').base_stat,
      Defensa: el.stats.find((sta) => sta.stat.name === 'defense').base_stat,
      Velocidad: el.stats.find((sta) => sta.stat.name === 'speed').base_stat,
      Altura: el.height,
      Peso: el.weight,
      Type: el.types.map((t) => t.type.name),
    };

    return infoPokemon;
  } catch (error) {
    // Maneja errores de la API aquí
    console.error("Error en la consulta a la API:", error);
    throw error;
  }
};


const constrollesNameDbgetpokemons = async (name) => {
    try {
      const respuesta = await Pokemon.findAll({
        where: {
          name: {
            [Sequelize.Op.like]: `%${name}%`,
          },
        },
        include: {
          model: Type,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
  
      // Formatear los datos de la base de datos para que coincidan con la estructura de la API
      const formattedData = respuesta.map((pokemon) => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: [pokemon.Imagen],
          Vida: parseInt(pokemon.Vida),
          Ataque: parseInt(pokemon.Ataque),
          Defensa: parseInt(pokemon.Defensa),
          Velocidad: parseInt(pokemon.Velocidad),
          Altura: parseFloat(pokemon.Altura),
          Peso: parseFloat(pokemon.Peso),
          Type: pokemon.Types.map((type) => type.name),
        };
      });
  
      return formattedData;
    } catch (error) {
      console.error("Error en consulta a la base de datos:", error);
      throw error;
    }
  };
  
  
  

module.exports = {
  controllersNameGetPokemons,
  constrollesNameDbgetpokemons,
};

