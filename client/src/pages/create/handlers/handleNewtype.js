const newType = (value, pokemonData, setPokemonData, setErrors) => {
    if (value === "new type") {
      const nuevoTipo = prompt("Ingresa el nombre del nuevo tipo:");
    
      //Validacion de tipos de pokemosnes creados
      if (nuevoTipo) {
        value = nuevoTipo;
        const alphanumericRegex = /^[A-Za-z0-9 ]+$/;
        const minLength = 3;
        const maxLength = 10; 
  
        if (nuevoTipo.trim() === "") {
          alert("El tipo no puede estar vacío.");
          setPokemonData({ ...pokemonData, tipos: [] });
          setErrors({ ...setErrors, tipos: [] });
        } else if (!alphanumericRegex.test(nuevoTipo)) {
          alert("El tipo no puede contener caracteres especiales.");
          setPokemonData({ ...pokemonData, tipos: [] });
          setErrors({ ...setErrors, tipos: [] });
        } else if (nuevoTipo.length < minLength) {
          alert("El tipo debe tener al menos 3 letras o números.");
          setPokemonData({ ...pokemonData, tipos: [] });
          setErrors({ ...setErrors, tipos: [] });
        } else if (nuevoTipo.length > maxLength) {
          alert(`El tipo debe tener como máximo ${maxLength} caracteres.`);
          setPokemonData({ ...pokemonData, tipos: [] });
          setErrors({ ...setErrors, tipos: [] });
        } else if (!isNaN(Number(nuevoTipo[0]))) {
          alert("El tipo no puede comenzar con un número.");
          setPokemonData({ ...pokemonData, tipos: [] });
          setErrors({ ...setErrors, tipos: [] });
        } else if (pokemonData.tipos.includes(nuevoTipo)) {
          alert("El tipo ya existe en la lista de tipos.");
          setPokemonData({ ...pokemonData, tipos: [] });
          setErrors({ ...setErrors, tipos: [] });
        } else {
          setPokemonData({
            ...pokemonData,
            tipos: [...pokemonData.tipos, nuevoTipo],
          });
        }
      } else {
        alert("Debes ingresar un tipo.");
      }
    }

    // si es el usuaro lo dejo  vacio  que sea un espacio en blanco 
    if (value === "new type") {
        setPokemonData({
            ...pokemonData,
            tipos: [...pokemonData.tipos,]})
    
    }


  };
  
  export default newType;
  

  
  
  