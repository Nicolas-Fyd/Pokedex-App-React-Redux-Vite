import { CHANGE_LOGIN_FIELD, DELETE_AUTH_DATA, DELETE_SIGNUP_INFORMATIONS, RESET_SUBMIT_SUCCESS, SAVE_AUTH_DATA, SAVE_SIGNUP_INFORMATIONS, SUBMIT_SUCCESS } from '../actions/user';

export const initialState = {
  isLogged: false,
  email: '',
  password: '',
  pseudo: '',
  token: '',
  roleId: null,
  dataSignUp: null,
  submitSuccess: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        // property_accessors
        [action.identifier]: action.newValue,
      };
    case SAVE_AUTH_DATA:
      return {
        ...state,
        pseudo: action.pseudo,
        roleId: action.roleId,
        token: action.token,
        isLogged: true,
        email: '',
        password: '',
      };
    case DELETE_AUTH_DATA:
      return {
        ...state,
        pseudo: '',
        roleId: null,
        token: '',
        isLogged: false,
      };
    case SAVE_SIGNUP_INFORMATIONS:
      return {
        ...state,
        dataSignUp: action.dataSignUp,
      };
    case DELETE_SIGNUP_INFORMATIONS:
      return {
        ...state,
        dataSignUp: null,
      };
    case SUBMIT_SUCCESS:
      return {
        ...state,
        submitSuccess: true,
      };
    case RESET_SUBMIT_SUCCESS:
      return {
        ...state,
        submitSuccess: false,
      };
    default:
      return state;
  }
};

export default reducer;
