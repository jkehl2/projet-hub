/**
 * @module user-Reducer
 * Gestion du store projet
 */

// == IMPORT ACTIONS SUR STORE
import {
  PROJECT_STORE_UPDATE, PROJECT_STORE_CLEAN,
} from 'src/store/actions';

// ==  INITIAL STATE : a project object containing an array
export const initialState = {
  projects: [{
    title: '',
    description: '',
    expiration_date: '',
    location: '',
    scope: 0,
    lat: 0,
    long: 0,
    image: '',
    file: '',
    author: 0,
  }],
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
