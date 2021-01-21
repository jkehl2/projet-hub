/**
 * @module search-actions
 * Configuration des actions sur le store recherche projet
 */

// == [CLE-VALEURS] - ACTIONS sur le store recherche projet (Reducer user)

// === Mise à jour des information de recherche
export const SEARCH_PROJECT_UPDATE = 'SEARCH_PROJECT_UPDATE';
export const SEARCH_PROJECT_EXECUTE = 'SEARCH_PROJECT_EXECUTE';


// == ===================================
// == SEARCH STORE - ACTIONS CREATORS PART

export const updateSearch = (payload) => ({
  type: SEARCH_PROJECT_UPDATE,
  payload,
});

// == ===================================
// == SEARCH ACTION MIDDLEWARE - ACTIONS CREATORS PART

export const execSearch = () => ({
  type: SEARCH_PROJECT_EXECUTE,
});
