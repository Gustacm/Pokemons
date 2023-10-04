const sequelize = require('sequelize');
const { controllersIdGetPokemons, constrollesIdDbgetpokemons } = require('../controllersPokemons/GetId');




const handlerIdGetPokemons = async (req, res) => {
    const { idPokemon } = req.params;
  
    try {
        if (!isNaN(idPokemon)) {
            const apiRespuesta = await controllersIdGetPokemons(idPokemon);
            return res.status(200).json(apiRespuesta);
        }else { const DbRespuesta = await constrollesIdDbgetpokemons(idPokemon);
          return res.status(200).json(DbRespuesta);}
           
        } catch (error) {
          res.status(502).json({ error: error.message });
        }
      };
      
    
    module.exports={
        handlerIdGetPokemons
    }
        

 
  



