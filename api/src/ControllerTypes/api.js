const axios = require("axios");
const { Type } = require("../db"); 


const getTypes = async () => {
  try {

    const typesFromDb = await Type.findAll({ raw: true });

    if (typesFromDb.length) {
      return typesFromDb;
    } else {
      const response = await axios.get("https://pokeapi.co/api/v2/type");
      const types = response.data.results;

      await Type.bulkCreate(types);

   
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
