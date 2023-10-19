
const handleFilter = (estado,back,tipoFiltrado) => {
    if (tipoFiltrado.includes("all")) {
        return back}

        const filtrado = estado.filter((pokemon) => {
            return tipoFiltrado.some((tipo) => pokemon.Type.includes(tipo));
          });
        
          return filtrado;
    
  

  };

  
  export default handleFilter;

  