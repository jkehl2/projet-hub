/**
 * @module app-Reducer
 * Gestion du store des paramètres applicatifs techniques (loader,..)
 */

// == IMPORT ACTIONS sur le store des paramètres applicatifs techniques
import {
  APP_LOADING_ON, APP_LOADING_OFF, APP_UPDATE, APP_CLEAN,
} from 'src/store/actions/app';

// ==  INITIALE STATE des paramètres applicatifs techniques
export const initialState = {
  loading: false,
  isError: false,
  isMessage: false,
  error: '',
  message: '',
};

// == USER REDUCER - Gestion du store des paramètres applicatifs techniques
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case APP_LOADING_ON:
      return {
        ...oldState,
        loading: true,
      };
    case APP_LOADING_OFF:
      return {
        ...oldState,
        loading: false,
      };
    case APP_UPDATE:
      return {
        ...oldState,
        ...action.payload,
      };
    case APP_CLEAN:
      return {
        ...initialState,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
