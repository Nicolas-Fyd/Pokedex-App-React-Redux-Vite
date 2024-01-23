/* eslint-disable no-case-declarations */
/* eslint-disable max-len */
import axios from 'axios';
import { SUBMIT_LOGIN, SUBMIT_SIGNUP, deleteSignupInformations, saveAuthData, submitSuccess } from '../actions/user';
import { clearErrorMessage, saveErrorMessage } from '../actions/apiMessage';
import { saveSuccessMessage } from '../actions/successMessage';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(
        'http://localhost:3000/sign-in',
        {
          email: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          store.dispatch(saveAuthData(response.data.pseudo, response.data.role_id, response.data.accessToken));
          store.dispatch(clearErrorMessage());
        })
        .catch((error) => {
          store.dispatch(saveErrorMessage(error.response.data));
          console.warn(error);
        });
      break;
    case SUBMIT_SIGNUP:
      const datas = store.getState().user.dataSignUp;
      console.log(datas);
      axios.post(
        'http://localhost:3000/sign-up',
        datas,
      )
        .then(() => {
          store.dispatch(deleteSignupInformations());
          store.dispatch(submitSuccess());
          store.dispatch(saveSuccessMessage('Votre compte a bien été créé'));
        })
        .catch((error) => {
          store.dispatch(saveErrorMessage(error.response.data));
          console.warn(error);
        });
      break;
    default:
  }
  next(action);
};

export default userMiddleware;
