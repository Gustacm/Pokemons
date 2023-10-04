const { getTypes } = require("../ControllerTypes/api");

const getTypesHandler = async (req, res) => {
  try {
    const types = await getTypes();

    console.log("types en handler", types);
    res.status(200).json(types);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getTypesHandler
};

