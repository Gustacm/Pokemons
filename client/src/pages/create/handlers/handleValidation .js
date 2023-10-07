const Validation = (pokemonData, name, setErrors, errors) => {
  const newErrors = { ...errors };

  if (name === "nombre") {
    if (!pokemonData.nombre || pokemonData.nombre.trim().length < 3) {
      newErrors.nombre = "El nombre debe tener al menos 3 caracteres y no puede estar vacío";
    } else if (pokemonData.nombre.length > 10) {
      newErrors.nombre = "El nombre no puede tener más de 10 caracteres.";
    } else {
      const regex = /^[A-Za-z\s]+$/;
      if (!regex.test(pokemonData.nombre)) {
        newErrors.nombre = "El nombre no puede contener caracteres especiales";
      } else {
        newErrors.nombre = "";
      }
    }
  }

  setErrors(newErrors);
};

export default Validation;






// if (name === "tipos") {
//   if (pokemonData.tipos.length === 0) {
//     newErrors.tipos = "Debe seleccionar al menos un tipo";
//   } else {
//     newErrors.tipos = "";
//   }
// }

    
        // if (!pokemonData.tipos || pokemonData.tipos.length === 0) {
        //   newErrors.tipos = 'Debe seleccionar al menos un tipo';
        // } else {
        //   newErrors.tipos = ''; // Limpiar el mensaje de error si hay al menos un tipo
        // }