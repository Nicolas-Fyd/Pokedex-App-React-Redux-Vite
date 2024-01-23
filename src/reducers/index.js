/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux';

import pokedexReducer from './pokedex';
import userReducer from './user';
import errorReducer from './error';
import successMessageReducer from './successMessage';
import myTeamReducer from './myTeam';

const rootReducer = combineReducers({
  pokedex: pokedexReducer,
  user: userReducer,
  error: errorReducer,
  successMessage: successMessageReducer,
  myTeam: myTeamReducer,
});

export default rootReducer;
