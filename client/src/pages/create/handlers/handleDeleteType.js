const Delete = (pokemonData, setPokemonData,setErrors,errors) => {
  if (pokemonData.tipos.length === 0) {
     alert("NO HAY TIPOS SELECCIONADOS PARA BORRAR");
    }


    if (pokemonData.tipos.length === 1) {
      setErrors({
        ...errors,
        tipos: ["no puede estar vacío"]});
      }
  


  const newTipos = pokemonData.tipos.slice(0, -1);

  const newPokemonData = { ...pokemonData, tipos: newTipos };

  setPokemonData(newPokemonData);
};

export default Delete;

  
  