const axios = require ("axios");
const {Pokemon, Type} = require("../db");


const controllersgetPokemons = async()=>{
    const promesas = [];
    const totalPokemons = 100; 
    
    for (let i = 1; i <= totalPokemons; i++) { 
      const promesa = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
      promesas.push(promesa);
    }
    
      const pokemons = await Promise.all(promesas);
      const infoPokemons = pokemons.map((response) => {
        const el = response.data;
        return {
          id: el.id,
          name: el.name,
          image: [el.sprites.front_default,el.sprites.back_shiny,el.sprites.front_default,el.sprites.front_shiny], 
          Type: el.types.map((t) => t.type.name),
        };
      });
  
      return infoPokemons;
    };


    const constrollesDbgetpokemons = async () => {
      try {
        const respuesta = await Pokemon.findAll({
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
    
        const pokemonData = respuesta.map((pokemon) => {
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
            db:true
            
          };
        });
    
        return pokemonData;
      } catch (error) {
        console.error("Error al obtener los datos de todos los Pokémon de la base de datos:", error);
        throw error;
      }
    };
    




module.exports={
    controllersgetPokemons,
    constrollesDbgetpokemons
}