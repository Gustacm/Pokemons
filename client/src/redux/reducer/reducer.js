

let initialState = {
    allPokemons: [],
    copyAllPokemons: [],
    pokemonDetail: [],
    typeState: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_POKEMONS':
        return {
          ...state,
          allPokemons: action.payload,
          copyAllPokemons: action.payload,
        };
  
      case 'GET_Name_POKEMONS':
        return {
          ...state,
          allPokemons: action.payload,
        };

              case 'GET_ID_POKEMON':
        return {
          ...state,
          pokemonDetail: action.payload,
        };

        case 'RESET_POKEMON_DETAIL':
          return {
            ...state,
            pokemonDetail: null, 
          };

          case 'RESET_POKEMON':
            return {
              ...state,
              allPokemons:state.copyAllPokemons,
            };

            case 'GET_TYPE':
              return {
                ...state,
                typeState: action.payload,
              }
            


  
      default:
        return state;

        
    
    }
  };
  
  export default rootReducer;
  