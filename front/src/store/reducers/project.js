/**
 * @module user-Reducer
 * Gestion du store projet
 */

// == IMPORT ACTIONS SUR STORE
import {
  PROJECT_STORE_UPDATE, PROJECT_STORE_CLEAN,
} from 'src/store/actions/project';

// ==  INITIAL STATE : a project object containing an array
export const initialState = {
  projects: [],
  projet: {
    id: 0,
    isFavorite: false,
    isArchived: false,
    isAuthor: false,
    title: 'un beau projet',
    location: '',
    expiration_date: '',
    creation_date: '',
    image: '',
    author: {
      id: 0,
      name: '',
      email: '',
      avatar: '',
    },
    needs: {
      id: 0,
      title: 'trop bien ce projet',
      description: '',
      checked: false,
    },
  },
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
    default:
      return { ...oldState };
  }
};

export default reducer;
