const sequelize = require('sequelize');
const { constrollesNameDbgetpokemons, controllersNameGetPokemons } = require('../controllersPokemons/GetName');

const handlergetNamePokemons = async (req, res) => {
  const { name } = req.query;

  try {
    const DbRespuesta = await constrollesNameDbgetpokemons(name);
    let combinedResponse = [];

    if (DbRespuesta && DbRespuesta.length > 0) {
      combinedResponse = combinedResponse.concat(DbRespuesta);
    }

    try {
      const apiRespuesta = await controllersNameGetPokemons(name);
      if (apiRespuesta) {
        combinedResponse = combinedResponse.concat(apiRespuesta);
      }
    } catch (apiError) {
      console.error("Error al buscar en la API:", apiError);
    }

    res.status(200).send(combinedResponse);
  } catch (error) {
    res.status(500).json({ error: error.message, stack: error.stack });
  }
};


module.exports = {
  handlergetNamePokemons,
};

