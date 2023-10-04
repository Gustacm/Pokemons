const {Router} = require("express");
const { getTypesHandler } = require("../../HandlerType/api");



const typesRuter = Router();

typesRuter.get("/",getTypesHandler);




module.exports = {
    typesRuter
}