import handleFilter from "./handler/hadlerFiltroType";
import handleAz from "./handler/handleAz";
import handleOrigen from "./handler/handleOrigen";


let initialState = {
  allPokemons: [],
  copyAllPokemons: [],
  pokemonDetail: [],
  typeState: [],
  reinicio:0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POKEMONS':
      return {
        ...state,
        allPokemons: action.payload,
        copyAllPokemons: [...action.payload], 
      };
    

    case 'GET_Name_POKEMONS':
      return {
        ...state,
        allPokemons: action.payload.map(pokemon => ({
          ...pokemon,
          name: pokemon.name.toLowerCase(), 
          
        })),reinicio:1
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
        allPokemons: state.copyAllPokemons,
      };

    case 'GET_TYPE':
      return {
        ...state,
        typeState: action.payload,
      };

      case 'POST_POKEMON':
        return {
          ...state,
          allPokemons: [...state.allPokemons, action.payload],
        };

        case 'FILTER_TYPE':
          const filtrado = handleFilter(state.allPokemons,state.copyAllPokemons, action.payload);
          return {
            ...state,
            allPokemons:filtrado,
            reinicio:1
          };

          case 'FILTER_AZ':
            const filtradoAz = handleAz(state.allPokemons, state.copyAllPokemons, action.payload);
            return {
              ...state,
              allPokemons:filtradoAz,
              reinicio:1
            };

            case 'FILTER_ORIGEN':
              const filtradoOrigen = handleOrigen(state.allPokemons, state.copyAllPokemons, action.payload);
              return {
                ...state,
                allPokemons:filtradoOrigen,
                reinicio:1
              };
          
              case 'FILTER_CLEAR':
                return {
                  ...state,
                  allPokemons:state.copyAllPokemons,
                  reinicio:0,
                };

                case 'FILTER_R':
                  return {
                    ...state,
                    reinicio:0,


                  };
                // case 'GET_DELETEDB':
                //   return {
                //     ...state
                //                   };
        

        

    default:
      return state;
  }
};

export default rootReducer;
