/**
 * @module app-actions
 * Configuration des actions sur le store applicatif technique
 */

// == [CLE-VALEURS] - ACTIONS sur le store applicatif technique
export const APP_LOADING_ON = 'APP_LOADING_ON';
export const APP_LOADING_OFF = 'APP_LOADING_OFF';
export const APP_UPDATE = 'APP_ERROR';
export const APP_CLEAN = 'APP_CLEAN';

export const appLoadingOn = () => ({
  type: APP_LOADING_ON,
});

export const appLoadingOff = () => ({
  type: APP_LOADING_OFF,
});

export const appError = (error) => ({
  type: APP_UPDATE,
  payload: {
    error,
    isError: true,
  },
});

export const appMsg = (message) => ({
  type: APP_UPDATE,
  payload: {
    message,
    isMessage: true,
  },
});

export const cleanAppParams = () => ({
  type: APP_CLEAN,
});

export const appCleanMsgError = () => ({
  type: APP_UPDATE,
  payload: {
    isError: false,
    isMessage: false,
    error: '',
    message: '',
  },
});
