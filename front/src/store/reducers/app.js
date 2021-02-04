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
  APP_UPDATE_PROJECT,
  APP_CLEAN_PROJECT,
  APP_CREATE_NEEDS,
  APP_CLEAN_NEEDS_FIELDS,
  APP_UPDATE_NEEDS_ARRAY,
  APP_UPDATE_NEEDS_FIELDS,
  APP_UPDATE_NEEDS_ARRAY_FIELDS_BY_ID,
  APP_ADD_NEED_TO_ARRAY,
  APP_DELETE_NEED_IN_ARRAY_BY_ID,
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
  isEditMode: false,
  name: '',
  email: '',
  avatar: 'https://react.semantic-ui.com/images/avatar/large/matt.jpg',
  confirm: '',
  password: '',
  passwordConfirm: '',
};

// ==  INITIALE SUB APP STATE - createProject
export const projectInitialState = {
  isEditMode: false,
  confirm: '',
  title: '',
  image: 'https://react.semantic-ui.com/images/wireframe/image.png',
  expiration_date: new Date().toLocaleDateString('fr-FR'),
  description: '',
  location: '',
};

// ==  INITIALE SUB APP STATE - needs fields
export const needsFieldsInitialState = {
  title: '',
  description: '',
};

// ==  INITIALE SUB APP STATE - needs
export const needsInitialState = {
  needs: [],
  fields: { ...needsFieldsInitialState },
};

// == INITIAL STATE - createNeeds
export const createNeedsInitialState = {
  titleNeed: '',
  descriptionNeed: '',
};

// ==  INITIALE STATE des paramètres applicatifs techniques
export const initialState = {
  loading: false,
  profil: { ...profilInitialState },
  error: { ...errorInitialState },
  message: { ...messageInitialState },
  signIn: { ...signInInitialState },
  search: { ...searchInitialState },
  signUp: { ...signUpInitialState },
  project: { ...projectInitialState },
  needs: { ...needsInitialState },
  createNeeds: { ...createNeedsInitialState },
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

    case APP_UPDATE_PROJECT:
      return {
        ...oldState,
        project: {
          ...oldState.project,
          ...action.payload,
        },
      };

    case APP_CLEAN_PROJECT:
      return {
        ...oldState,
        project: {
          ...projectInitialState,
        },
      };

    case APP_CREATE_NEEDS:
      return {
        ...oldState,
        createNeeds: {
          ...oldState.createNeeds,
          ...action.payload,
        },
      };
    case APP_CLEAN_NEEDS_FIELDS: {
      return {
        ...oldState,
        needs: {
          ...oldState.needs,
          fields: {
            ...needsFieldsInitialState,
          },
        },
      };
    }
    case APP_UPDATE_NEEDS_FIELDS: {
      return {
        ...oldState,
        needs: {
          ...oldState.needs,
          fields: {
            ...oldState.needs.fields,
            ...action.payload,
          },
        },
      };
    }
    case APP_UPDATE_NEEDS_ARRAY: {
      return {
        ...oldState,
        needs: {
          ...oldState.needs,
          ...action.payload,
        },
      };
    }
    case APP_UPDATE_NEEDS_ARRAY_FIELDS_BY_ID: {
      const newNeedsArr = [...oldState.needs.needs.filter((need) => need.id !== action.id)];
      let [needToUpdate] = [oldState.needs.needs.find((need) => need.id === action.id)];
      needToUpdate = {
        ...needToUpdate,
        ...action.payload,
      };
      newNeedsArr.push(needToUpdate);
      return {
        ...oldState,
        needs: {
          ...oldState.needs,
          needs: newNeedsArr.sort((need1, need2) => (
            parseInt(need1.id, 10) > parseInt(need2.id, 10) ? 1 : -1
          )),
        },
      };
    }
    case APP_ADD_NEED_TO_ARRAY: {
      const newNeedsArr = [...oldState.needs.needs];
      newNeedsArr.push(action.newNeed);
      return {
        ...oldState,
        needs: {
          ...oldState.needs,
          needs: newNeedsArr.sort((need1, need2) => (
            parseInt(need1.id, 10) > parseInt(need2.id, 10) ? 1 : -1
          )),
        },
      };
    }
    case APP_DELETE_NEED_IN_ARRAY_BY_ID: {
      const newNeedsArr = [...oldState.needs.needs.filter((need) => need.id !== action.id)];
      return {
        ...oldState,
        needs: {
          ...oldState.needs,
          needs: newNeedsArr.sort((need1, need2) => (
            parseInt(need1.id, 10) > parseInt(need2.id, 10) ? 1 : -1
          )),
        },
      };
    }
    default:
      return { ...oldState };
  }
};
export default reducer;
