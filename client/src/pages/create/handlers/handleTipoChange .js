import newType from "./handleNewtype";

const TipoChange = (name, value, pokemonData, setPokemonData, setErrors, errors) => {
  const selectedType = value;

  if (!pokemonData.tipos.includes(selectedType)) {
    setPokemonData({
      ...pokemonData,
      tipos: [...pokemonData.tipos, selectedType],
    });

    setErrors({
      ...errors,
      tipos: "",
    });
  } else {
    alert("No se puede agregar el mismo tipo 2 veces");
  }

  newType(value, pokemonData, setPokemonData, setErrors);


}




export default TipoChange;
// if (pokemonData.tipos.length === 0) {
//   setErrors({
//     ...errors,
//     tipos: ["no puede estar vacío"],
//   });
// } else {
//   // Si el array tipos no está vacío, eliminamos cualquier mensaje de error previo.
//   setErrors({
//     ...errors,
//     tipos: [],
//   });
// }






  //   const options = Array.from(e.target.options);
  //   const selectedTypes = options
  //     .filter((option) => option.selected)
  //     .map((option) => option.value);
  
  //   const isTypeAlreadyExists = selectedTypes.some((type) =>
  //     pokemonData.tipos.includes(type)
  //   );
  
  //   if (isTypeAlreadyExists) {
  //     alert("Este tipo ya existe");
  //   } else {
  //     // Actualiza tipos con los nuevos tipos seleccionados
  //     setPokemonData({
  //       ...pokemonData,
  //       tipos: [...pokemonData.tipos, ...selectedTypes],
  //     });
  //   }
  
  //   if (selectedTypes.includes("createNewType")) {
  //     const newTypeName = prompt("Ingrese un nuevo nombre de tipo:");
  //     if (newTypeName) {
  //       // Agrega el nuevo tipo a tipos
  //       setPokemonData({
  //         ...pokemonData,
  //         tipos: [...pokemonData.tipos, newTypeName],
  //       });
  //     }
  //   }
  // }