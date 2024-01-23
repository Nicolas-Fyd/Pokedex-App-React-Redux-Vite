export const FETCH_MYTEAM = 'FETCH_MYTEAM';
export const SAVE_MYTEAM = 'SAVE_MYTEAM';
export const ADD_POKEMON_IN_MYTEAM = 'ADD_POKEMON_IN_MYTEAM';
export const DELETE_POKEMON_IN_MYTEAM = 'DELETE_POKEMON_IN_MYTEAM';

export const fetchMyTeam = () => ({
  type: FETCH_MYTEAM,
});

export const saveMyTeam = (pokemons) => ({
  type: SAVE_MYTEAM,
  pokemons: pokemons,
});

export const addPokemonInMyTeam = (pokemonId) => ({
  type: ADD_POKEMON_IN_MYTEAM,
  pokemonId,
});

export const deletePokemonInMyTeam = (pokemonId) => ({
  type: DELETE_POKEMON_IN_MYTEAM,
  pokemonId,
});
