
const {Pokemon} = require("../db");



const constrolleDeletepokemons = async (id) => {

    const borrar = await Pokemon.destroy({where: {id:id}})
  
    return borrar;
  };


module.exports={
    constrolleDeletepokemons 
}