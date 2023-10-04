const sequelize = require('sequelize');
const { constrollesNameDbgetpokemons, controllersNameGetPokemons } = require('../controllersPokemons/GetName');

const handlergetNamePokemons = async (req, res) => {
    const {name} = req.query;

  
    try {
      const apiRespuesta = await controllersNameGetPokemons(name);
      const DbRespuesta = await constrollesNameDbgetpokemons(name);
      
    let combinedResponse = [];

    if (apiRespuesta) {
      combinedResponse.push(apiRespuesta);
    }

    if (DbRespuesta) {
      combinedResponse.push(DbRespuesta);
    }
  
    res.status(200).send(combinedResponse);
    } catch (error) {
      res.status(506).json({ error: error.message });
    }
  };
  

module.exports={
    handlergetNamePokemons
}
