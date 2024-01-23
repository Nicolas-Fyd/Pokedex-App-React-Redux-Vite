export const SAVE_ERROR_MESSAGE = 'SAVE_ERROR_MESSAGE';
export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';

export const saveErrorMessage = (error) => ({
  type: SAVE_ERROR_MESSAGE,
  errorMessage: error.message,
});

export const clearErrorMessage = () => ({
  type: 'CLEAR_ERROR_MESSAGE',
});
