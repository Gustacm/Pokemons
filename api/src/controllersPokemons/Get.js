const axios = require ("axios");
const {Pokemon} = require("../db");


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


const constrollesDbgetpokemons= async () => {
    const respuesta = await Pokemon.findAll();
    return respuesta

}




module.exports={
    controllersgetPokemons,
    constrollesDbgetpokemons
}