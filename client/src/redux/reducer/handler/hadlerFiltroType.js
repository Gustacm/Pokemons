
const handleFilter = (estado,back,tipoFiltrado) => {
    if (tipoFiltrado.includes("all")) {
        return back}

        const filtrado = estado.filter((pokemon) => {
            // Verificar si al menos uno de los tipos seleccionados está en el array de tipos del pokemon
            return tipoFiltrado.some((tipo) => pokemon.Type.includes(tipo));
          });
        
          return filtrado;
    
  

  };

  
  export default handleFilter;
  
              // const filteredPokemons = estado.filter((pokemon) => {
              //   return pokemon.Type.includes(tipoFiltrado);})
  