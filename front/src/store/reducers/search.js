/**
 * @module search-Reducer
 * Gestion du store de recherche de projet
 */

// == IMPORT ACTIONS SUR STORE SEARCH PROJECTS
import { SEARCH_PROJECT_UPDATE, SEARCH_PROJECT_COORDINATES } from 'src/store/actions/search';

// ==  INITIALE SEARCH PROJECTS STATE
export const initialState = {
  localite: '',
  perimeter: 0,
  archived: false,
  lat: 0,
  long: 0,
};

// == USER REDUCER - Gestion du store SEARCH PROJECTS
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_PROJECT_UPDATE:
      return {
        ...oldState,
        ...action.payload,
      };
    case SEARCH_PROJECT_COORDINATES:
      return {
        ...oldState,
        lat: action.lat,
        long: action.long,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
