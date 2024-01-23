import { DELETE_POKEMON_IN_MYTEAM, SAVE_MYTEAM } from '../actions/myTeam';

export const initialState = {
  myPokemons: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MYTEAM:
      return {
        ...state,
        myPokemons: action.pokemons,
        // isPokemonsLoaded: true,
      };
    case DELETE_POKEMON_IN_MYTEAM:
      const { pokemonId } = action;
      const updatedPokemons = state.myPokemons.filter(pokemon => pokemon.id !== pokemonId);
      return { ...state, myPokemons: updatedPokemons };
    default:
      return state;
  }
};

export default reducer;
