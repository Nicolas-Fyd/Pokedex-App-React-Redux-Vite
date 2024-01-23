/* eslint-disable object-curly-newline */
import axios from 'axios';
import { FETCH_POKEMONS, FETCH_TYPES, savePokemons, saveTypes } from '../actions/pokemon';
const API_URL = import.meta.env.VITE_API_URL;

const pokemonMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_POKEMONS:
      axios.get(`${API_URL}/pokemon`)
        .then((response) => {
          store.dispatch(savePokemons(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    case FETCH_TYPES:
      axios.get(`${API_URL}/type`)
        .then((response) => {
          store.dispatch(saveTypes(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      break;
    default:
  }
  next(action);
};

export default pokemonMiddleware;
