const axios = require("axios");
const { Type } = require("../db"); 


const getTypes = async () => {
  try {
    // Consultar tipos en la base de datos
    const typesFromDb = await Type.findAll({ raw: true });

    if (typesFromDb.length) {
      return typesFromDb;
    } else {
      console.log("No hay Tipos en la DB, obteniendo desde la API...");
      // Obtener tipos desde la API
      const response = await axios.get("https://pokeapi.co/api/v2/type");
      const types = response.data.results;

      // Guardar tipos en la base de datos
      await Type.bulkCreate(types);

      // Volver a consultar y retornar tipos desde la base de datos
      const updatedTypesFromDb = await Type.findAll({ raw: true });
      return updatedTypesFromDb;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTypes,
};
