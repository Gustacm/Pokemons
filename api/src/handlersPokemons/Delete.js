const sequelize = require('sequelize');
const { constrolleDeletepokemons } = require('../controllersPokemons/Deleteid');


const handlerDeletePoke = async (req, res) => { 
        const {id} = req.params;
    try {
        const Respuesta = await constrolleDeletepokemons(id);
            return res.status(200).json(Respuesta);

        } catch (error) {
          res.status(502).json({ error: error.message });
        }
      };
      
    
    module.exports={
        handlerDeletePoke
    }
        