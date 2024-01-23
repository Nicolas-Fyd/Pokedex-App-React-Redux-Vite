export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const SAVE_POKEMONS = 'SAVE_POKEMONS';
export const CHANGE_FILTER_FIELD = 'CHANGE_FILTER_FIELD';
export const FETCH_TYPES = 'FETCH_TYPES';
export const SAVE_TYPES = 'SAVE_TYPES';
export const SELECT_TYPE_FILTERS = 'SELECT_TYPE_FILTERS';
export const DELETE_TYPE_FILTERS = 'DELETE_TYPE_FILTERS';

export const fetchPokemons = () => ({
  type: FETCH_POKEMONS,
});

export const savePokemons = (pokemons) => ({
  type: SAVE_POKEMONS,
  pokemons: pokemons,
});

export const changeFilterField = (newValue) => ({
  type: CHANGE_FILTER_FIELD,
  newValue: newValue,
});

export const fetchTypes = () => ({
  type: FETCH_TYPES,
});

export const saveTypes = (types) => ({
  type: SAVE_TYPES,
  types: types,
});

export const selectTypeFilters = (newValue) => ({
  type: SELECT_TYPE_FILTERS,
  newValue: newValue,
});

export const deleteTypeFilters = (newValue) => ({
  type: DELETE_TYPE_FILTERS,
  newValue: newValue,
});
