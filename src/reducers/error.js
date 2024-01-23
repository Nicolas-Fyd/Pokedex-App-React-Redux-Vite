import { CLEAR_ERROR_MESSAGE, SAVE_ERROR_MESSAGE } from '../actions/apiMessage';

const initialState = {
  errorMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: '',
      };
    default:
      return state;
  }
};

export default reducer;
