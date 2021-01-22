/**
 * @module search-Reducer
 * Gestion du store de recherche de projet
 */

// == IMPORT ACTIONS SUR STORE SEARCH PROJECTS
import { SEARCH_PROJECT_UPDATE } from 'src/store/actions/search';

// ==  INITIALE SEARCH PROJECTS STATE
export const initialState = {
  localite: '',
  perimeter: 0,
  archived: false,
};

// == USER REDUCER - Gestion du store SEARCH PROJECTS
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_PROJECT_UPDATE:
      return {
        ...oldState,
        ...action.payload,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
