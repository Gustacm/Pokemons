
//  * Función que valida el name

const handleValidationName = (state, name, setError) => {
  const nameRegex = /^[A-Za-z\s]+$/; 
  const errors = []; 

  if (name.trim() === "") {
    setError([]);
  } else {
    if (!nameRegex.test(name)) {
      errors.push("El nombre solo debe contener letras (sin números ni caracteres especiales) y espacios");
    }
  
    if (name.length < 4) {
      errors.push("El nombre debe tener al menos 4 caracteres");
    }
  
    setError(errors);
  }
};

export default handleValidationName;


  