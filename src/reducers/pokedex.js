import {
  CHANGE_FILTER_FIELD,
  DELETE_TYPE_FILTERS,
  SAVE_POKEMONS,
  SAVE_TYPES,
  SELECT_TYPE_FILTERS,
} from '../actions/pokemon';

export const initialState = {
  pokemons: [],
  pokemonFilterName: '',
  types: [],
  filteredTypes: [],
  isPokemonsLoaded: false,
  isTypesLoaded: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_POKEMONS:
      return {
        ...state,
        pokemons: action.pokemons,
        isPokemonsLoaded: true,
      };
    case CHANGE_FILTER_FIELD:
      return {
        ...state,
        pokemonFilterName: action.newValue,
      };
    case SAVE_TYPES:
      return {
        ...state,
        types: action.types,
        isTypesLoaded: true,
      };
    case SELECT_TYPE_FILTERS:
      return {
        ...state,
        filteredTypes: [...state.filteredTypes, action.newValue],
      };
    case DELETE_TYPE_FILTERS:
      return {
        ...state,
        filteredTypes: [...state.filteredTypes.filter((type) => type !== action.newValue)],
      };
    default:
      return state;
  }
};

export default reducer;
