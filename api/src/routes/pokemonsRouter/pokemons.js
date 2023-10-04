const { Router } = require("express");
const { handlergetPokemons } = require("../../handlersPokemons/Get");
const { handlerIdGetPokemons } = require("../../handlersPokemons/GetId");
const { handlergetNamePokemons } = require("../../handlersPokemons/GetName");
const { handlerPostPokemons } = require("../../handlersPokemons/Post");


const pokemonsRouter = Router();

pokemonsRouter.get("/name", handlergetNamePokemons);
pokemonsRouter.get("/:idPokemon", handlerIdGetPokemons);
pokemonsRouter.delete("/:idPokemon", handlerIdGetPokemons);
pokemonsRouter.get("/", handlergetPokemons);
pokemonsRouter.post("/",handlerPostPokemons);

module.exports = {
    pokemonsRouter
};
