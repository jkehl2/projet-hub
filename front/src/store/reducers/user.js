/**
 * @module user-Reducer
 * Gestion du store utlisateur
 */

// == IMPORT ACTIONS SUR STORE UTILISATEUR
import {
  USER_STORE_UPDATE, USER_STORE_CLEAN, SIGNIN_CLEAN,
} from 'src/store/actions/user';

// ==  INITIALE USER STATE
export const initialState = {
  logged: false,
  id: '',
  name: '',
  email: '',
  avatar: '',
  signInEmail: '',
  signInPassword: '',
};

// == USER REDUCER - Gestion du store utlisateur
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case USER_STORE_UPDATE:
      return {
        ...oldState,
        ...action.payload,
      };
    case USER_STORE_CLEAN:
      return {
        ...initialState,
      };
    case SIGNIN_CLEAN:
      return {
        ...oldState,
        signInEmail: '',
        signInPassword: '',
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
