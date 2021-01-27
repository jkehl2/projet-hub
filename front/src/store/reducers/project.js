/**
 * @module user-Reducer
 * Gestion du store projet
 */

// == IMPORT ACTIONS SUR STORE
import {
  PROJECT_STORE_UPDATE, PROJECT_STORE_CLEAN, PROJECT_CLEAN_PROJECTS, PROJECT_CLEAN_PROJECT,
} from 'src/store/actions/project';

// ==  INITIAL STATE : a project object empty
export const projectInitialState = {
  project: {
    id: 0,
    isFavorite: false,
    isArchived: false,
    isAuthor: false,
    title: '',
    location: '',
    description: '',
    expiration_date: new Date().toLocaleDateString('fr-FR'),
    creation_date: new Date().toLocaleDateString('fr-FR'),
    image: '',
    author: {
      id: 0,
      name: '',
      email: '',
      avatar: '',
    },
    needs: [],
  },
};

// ==  INITIAL STATE : a project object containing an array
export const initialState = {
  projects: [],
  ...projectInitialState,
};

// == USER REDUCER - Gestion du store projet
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case PROJECT_STORE_UPDATE:
      return {
        ...oldState,
        ...action.payload,
      };
    case PROJECT_STORE_CLEAN:
      return {
        ...initialState,
      };
    case PROJECT_CLEAN_PROJECTS:
      return {
        ...oldState,
        projects: [],
      };
    case PROJECT_CLEAN_PROJECT:
      return {
        ...oldState,
        ...projectInitialState,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
