const axios = require ("axios");
const {Pokemon} = require("../db");



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

const constrollesIdDbgetpokemons= async (id) => {
    const respuesta = await Pokemon.findByPk(id);
    return respuesta

}




module.exports={
    controllersIdGetPokemons,
    constrollesIdDbgetpokemons
}