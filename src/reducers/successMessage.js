import { CLEAR_SUCCESS_MESSAGE, SAVE_SUCCESS_MESSAGE } from "../actions/successMessage";

const initialState = {
  successMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.successMessage,
      };
    case CLEAR_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: '',
      };
    default:
      return state;
  }
};

export default reducer;
