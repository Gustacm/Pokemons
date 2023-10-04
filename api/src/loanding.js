const { getTypes } = require("./ControllerTypes/api");


const loadTypes = async () => {
  try {
    const types = await getTypes();

    console.log("Tipos de pokemones cargados exitosamente.");
  } catch (error) {
    console.error("Error al cargar los tipos o pokemones:", error.message);
  }
};

module.exports = { loadTypes };