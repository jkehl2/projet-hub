/**
 * @module projects-actions
 * Configuration des actions sur le store projets
 */

// == [CLE-VALEURS] - ACTIONS sur fiche projet (middleware project)
export const PROJECT_SEARCH = 'PROJECT_SEARCH';
export const GET_PROJECT_BY_ID = 'GET_PROJECT_BY_ID';
export const GET_PROJECT_BY_GEO = 'GET_PROJECT_BY_ID';

// == ===================================
// == PROJECT CONNECTORS - ACTIONS CREATORS PART

// Execute a project search
export const searchProject = () => ({
  type: PROJECT_SEARCH,
});

// get a project by id
export const getProjectById = (id) => ({
  type: GET_PROJECT_BY_ID,
  payload: id,
});

export const getProjectByGeo = (payload) => ({
  type: GET_PROJECT_BY_GEO,
  payload,
});
