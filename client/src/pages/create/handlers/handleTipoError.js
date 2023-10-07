const erroTipo = (pokemonData, setErrors) => {
  if (!pokemonData.tipos || pokemonData.tipos.length === 0) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      tipos: 'Debe seleccionar al menos un tipo',
    }));
  } else {
    setErrors((prevErrors) => ({
      ...prevErrors,
      tipos: '', // Limpiar el mensaje de error si hay al menos un tipo
    }));
  }
};

export default erroTipo;