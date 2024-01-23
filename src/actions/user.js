export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
export const DELETE_AUTH_DATA = 'DELETE_AUTH_DATA';
export const SUBMIT_SIGNUP = 'SUBMIT_SIGNUP';
export const SAVE_SIGNUP_INFORMATIONS = 'SAVE_SIGNUP_INFORMATIONS';
export const DELETE_SIGNUP_INFORMATIONS = 'DELETE_SIGNUP_INFORMATIONS';
export const SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
export const RESET_SUBMIT_SUCCESS = 'RESET_SUBMIT_SUCCESS';

export const changeLoginField = (newValue, identifier) => ({
  type: CHANGE_LOGIN_FIELD,
  newValue: newValue,
  identifier: identifier,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const saveAuthData = (pseudo, roleId, accesstoken) => ({
  type: SAVE_AUTH_DATA,
  pseudo: pseudo,
  roleId: roleId,
  token: accesstoken,
});

export const deleteAuthData = () => ({
  type: DELETE_AUTH_DATA,
});

export const saveSignupInformations = (datas) => ({
  type: SAVE_SIGNUP_INFORMATIONS,
  dataSignUp: datas,
});

export const submitSignup = () => ({
  type: SUBMIT_SIGNUP,
});

export const deleteSignupInformations = () => ({
  type: DELETE_SIGNUP_INFORMATIONS,
});

export const submitSuccess = () => ({
  type: SUBMIT_SUCCESS,
});

export const resetSubmitSuccess = () => ({
  type: RESET_SUBMIT_SUCCESS,
});
