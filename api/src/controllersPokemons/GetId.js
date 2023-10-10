const axios = require ("axios");
const {Pokemon,Type } = require("../db");



const controllersIdGetPokemons = async(id)=>{ 
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
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
    }

    const constrollesIdDbgetpokemons = async (id) => {
        try {
          const respuesta = await Pokemon.findByPk(id, {
            include: [
              {
                model: Type,
                attributes: ["name"],
                through: {
                  attributes: [],
                },
              },
            ],
          });
      
          if (!respuesta) {
            throw new Error(`No se encontró un Pokémon con ID ${id}`);
          }
      
          const pokemonData = {
            id: respuesta.id,
            name: respuesta.name,
            image: [respuesta.Imagen],
            Vida: parseInt(respuesta.Vida),
            Ataque: parseInt(respuesta.Ataque),
            Defensa: parseInt(respuesta.Defensa),
            Velocidad: parseInt(respuesta.Velocidad),
            Altura: parseFloat(respuesta.Altura),
            Peso: parseFloat(respuesta.Peso),
            Type: respuesta.Types.map((type) => type.name),
          };
      
          return pokemonData;
        } catch (error) {
          console.error(`Error al obtener los datos del Pokémon con ID ${id} de la base de datos:`, error);
          throw error;
        }
      };
      
      
      




module.exports={
    controllersIdGetPokemons,
    constrollesIdDbgetpokemons
}