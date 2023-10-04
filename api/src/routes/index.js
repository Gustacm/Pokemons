const { Router } = require('express');
const { pokemonsRouter } = require('./pokemonsRouter/pokemons');
const { typesRuter } = require('./pokemonsRouter/types');



const router = Router();
router.use('/pokemons', pokemonsRouter); 
router.use('/types', typesRuter);




module.exports = router;
