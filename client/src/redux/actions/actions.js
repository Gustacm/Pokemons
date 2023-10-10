import axios from 'axios';
import { FILTER_AZ, FILTER_ORIGEN, FILTER_TYPE, GET_ID_POKEMON, GET_Name_POKEMONS, GET_POKEMONS, GET_TYPE, POST_POKEMON, RESET_POKEMON, RESET_POKEMON_DETAIL } from './type';




export function getPokemons (){
    return async function(dispatch){
        try {
            const respuesta = await axios.get("http://localhost:3001/pokemons") 
            dispatch({
                type:GET_POKEMONS,
                payload:respuesta.data
            })
            
          }catch (error) {
              console.error('Error en la solicitud POST:', error);
            
            
        }
    }

}
export function getName(name) {
    return async function (dispatch) {
      try {
        const respuesta = await axios.get(`http://localhost:3001/pokemons/name?name=${name}`);
        console.log("recibo",respuesta.data);
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
        dispatch({
          type: GET_TYPE,
          payload: respuesta.data
        });
      } catch (error) {
        alert("EROR");
      }
    };
  }
  

  export function postPokemons(data) {
    return async function (dispatch) {
      try {
        const respuesta = await axios.post('http://localhost:3001/pokemons/', data);
        dispatch({
          type: POST_POKEMON,
          payload: respuesta.data
        });
      } catch (error) {
        console.error('Error:', error); 
      }
    };
  }
  

  export function filterTypeAc(type) {
    return async function (dispatch) {
      try {
        dispatch({
          type: FILTER_TYPE,
          payload: type,
        });
      } catch (error) {
        alert("Error");
      }
    };
  }

  export function filterAZ(clave) {
    return async function (dispatch) {
      console.log(clave);
      try {
        dispatch({
          type: FILTER_AZ,
          payload:clave,
        });
      } catch (error) {
        alert("Error al filtar");
      }
    };
  }



  export function originAC(clave) {
    return async function (dispatch) {
      console.log(clave);
      try {
        dispatch({
          type: FILTER_ORIGEN,
          payload:clave,
        });
      } catch (error) {
        alert("Error al filtar");
      }
    };
  }
  









