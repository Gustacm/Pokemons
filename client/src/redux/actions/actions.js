import axios from 'axios';
import { GET_ID_POKEMON, GET_Name_POKEMONS, GET_POKEMONS, GET_TYPE, RESET_POKEMON, RESET_POKEMON_DETAIL } from './type';




export function getPokemons (){
    return async function(dispatch){
        try {
            const respuesta = await axios.get("http://localhost:3001/pokemons") 
            dispatch({
                type:GET_POKEMONS,
                payload:respuesta.data
            })
            
        } catch (error) {
            alert("Estatus 404")
            
        }
    }

}
export function getName(name) {
    return async function (dispatch) {
      try {
        const respuesta = await axios.get(`http://localhost:3001/pokemons/name?name=${name}`);
        console.log('Respuesta de la solicitud:', respuesta.data); 
        dispatch({
          type: GET_Name_POKEMONS,
          payload: respuesta.data
        });
      } catch (error) {
        alert("El pokemon No existe");
      }
    };
  
  

}
export function getId(id) {
  return async function (dispatch) {
    try {
      const respuesta = await axios.get(`http://localhost:3001/pokemons/${id}`);
      console.log('Respuesta de la solicitud:', respuesta.data); 
      dispatch({
        type: GET_ID_POKEMON,
        payload: respuesta.data
      });
    } catch (error) {
      alert("El pokemon No existe");
    }
  };
}


  export function  resetPokemonDetail() {
    return async function (dispatch) {
      try {
        dispatch({
          type: RESET_POKEMON_DETAIL,        
        });
      } catch (error) {
        alert("");
      }
    };
  }

  export function  resetPokemon() {
    return async function (dispatch) {
      try {
        dispatch({
          type: RESET_POKEMON,        
        });
      } catch (error) {
        alert("");
      }
    };
  }

  export function getType() {
    return async function (dispatch) {
      try {
        const respuesta = await axios.get(`http://localhost:3001/types`);
        console.log('Respuesta de la solicitud:', respuesta.data); 
        dispatch({
          type: GET_TYPE,
          payload: respuesta.data
        });
      } catch (error) {
        alert("EROR");
      }
    };
  }
  









