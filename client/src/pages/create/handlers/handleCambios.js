import TipoChange from "./handleTipoChange ";
import Validation from "./handleValidation ";
import imgDefault from "./handlerImg";


const Cambios = (e, pokemonData, setPokemonData, errors, setErrors,Img,SetImg) => {
  const name = e.target.name;
  const value = e.target.value;
  if (name === "tipos") {
    TipoChange(name, value,pokemonData, setPokemonData, setErrors, errors);
    } else {
        setPokemonData({
            ...pokemonData,
            [name]: value, 
        });
        

        const estado=({
            ...pokemonData,
            [name]: value, 
        })
        
        imgDefault (name, estado, setPokemonData, errors, Img, SetImg,value)
        
          Validation(estado, name, setErrors, errors);




      }
    }


export default Cambios;
