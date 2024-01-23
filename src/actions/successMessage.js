export const SAVE_SUCCESS_MESSAGE = 'SAVE_SUCCESS_MESSAGE';
export const CLEAR_SUCCESS_MESSAGE = 'CLEAR_SUCCESS_MESSAGE';

export const saveSuccessMessage = (message) => ({
  type: SAVE_SUCCESS_MESSAGE,
  successMessage: message,
});

export const clearSuccessMessage = () => ({
  type: 'CLEAR_SUCCESS_MESSAGE',
});
