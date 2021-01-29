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
  APP_PROFIL_UPDATE,
  APP_PROFIL_CLEAN,
  APP_SIGNUP_CLEAN,
  APP_SIGN_UP_UPDATE,
  APP_PROJECT_CREATE,
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

// ==  INITIALE SUB APP STATE - signUp
export const signUpInitialState = {
  email: '',
  password: '',
  passwordVerification: '',
  name: '',
};

// ==  INITIALE SUB APP STATE - search
export const searchInitialState = {
  localite: '',
  perimeter: 0,
  archived: false,
};

// ==  INITIALE SUB APP STATE - profil
export const profilInitialState = {
  name: '',
  email: '',
  avatar: 'https://react.semantic-ui.com/images/avatar/large/matt.jpg',
  isEditMode: false,
  deleteConfirm: '',
  password: '',
  passwordConfirm: '',
};

// ==  INITIALE SUB APP STATE - createProject
export const createProjectInitialState = {
  title: '',
  date: '',
  description: '',
  location: '',
  perimeter: 0,
};

// ==  INITIALE STATE des paramètres applicatifs techniques
export const initialState = {
  loading: false,
  isEditMode: false,
  profil: { ...profilInitialState },
  error: { ...errorInitialState },
  message: { ...messageInitialState },
  signIn: { ...signInInitialState },
  search: { ...searchInitialState },
  signUp: { ...signUpInitialState },
  createProject: { ...createProjectInitialState },
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

    case APP_SIGN_UP_UPDATE:
      return {
        ...oldState,
        signUp: {
          ...oldState.signUp,
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

    case APP_SIGNUP_CLEAN:
      return {
        ...oldState,
        signUp: {
          ...signUpInitialState,
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
    case APP_PROFIL_UPDATE:
      return {
        ...oldState,
        profil: {
          ...oldState.profil,
          ...action.payload,
        },
      };
    case APP_PROFIL_CLEAN:
      return {
        ...oldState,
        profil: {
          ...profilInitialState,
        },
      };
    case APP_PROJECT_CREATE:
      return {
        ...oldState,
        createProject: {
          ...oldState.createProject,
          ...action.payload,
        },
      };
    default:
      return { ...oldState };
  }
};
export default reducer;
