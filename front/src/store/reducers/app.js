/**
 * @module app-Reducer
 * Gestion du store des paramètres applicatifs techniques (loader,..)
 */
// == IMPORT ACTIONS sur le store des paramètres applicatifs techniques
import {
  APP_LOADING_ON,
  APP_LOADING_OFF,
  APP_CLEAN,
  APP_SEARCH_UPDATE,
  APP_SIGNIN_UPDATE,
  APP_SIGNIN_CLEAN,
  APP_ERROR_UPDATE,
  APP_ERROR_CLEAN,
  APP_MSG_UPDATE,
  APP_MSG_CLEAN,
} from 'src/store/actions/app';

// ==  INITIALE SUB APP STATE - error
export const errorInitialState = {
  isError: false,
  error: '',
};

// ==  INITIALE SUB APP STATE - message
export const messageInitialState = {
  isMessage: false,
  message: '',
};

// ==  INITIALE SUB APP STATE - signIn
export const signInInitialState = {
  email: '',
  password: '',
};

// ==  INITIALE SUB APP STATE - search
export const searchInitialState = {
  localite: '',
  perimeter: 0,
  archived: false,
};

// ==  INITIALE STATE des paramètres applicatifs techniques
export const initialState = {
  loading: false,
  isEditMode: false,
  error: { ...errorInitialState },
  message: { ...messageInitialState },
  signIn: { ...signInInitialState },
  search: { ...searchInitialState },
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
    case APP_CLEAN:
      return {
        ...initialState,
      };
    case APP_SEARCH_UPDATE:
      return {
        ...oldState,
        search: {
          ...oldState.search,
          ...action.payload,
        },
      };
    case APP_SIGNIN_UPDATE:
      return {
        ...oldState,
        signIn: {
          ...oldState.signIn,
          ...action.payload,
        },
      };
    case APP_SIGNIN_CLEAN:
      return {
        ...oldState,
        signIn: {
          ...signInInitialState,
        },
      };
    case APP_ERROR_UPDATE:
      return {
        ...oldState,
        error: {
          ...oldState.error,
          ...action.payload,
        },
      };
    case APP_ERROR_CLEAN:
      return {
        ...oldState,
        error: {
          ...errorInitialState,
        },
      };
    case APP_MSG_UPDATE:
      return {
        ...oldState,
        message: {
          ...oldState.message,
          ...action.payload,
        },
      };
    case APP_MSG_CLEAN:
      return {
        ...oldState,
        message: {
          ...messageInitialState,
        },
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
