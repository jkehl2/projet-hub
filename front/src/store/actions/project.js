/**
 * @module project-actions
 * Configuration des actions sur le store projets
 */

// == [CLE-VALEURS] - ACTIONS sur fiche projet (middleware project)
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const GET_PROJECT_BY_ID = 'GET_PROJECT_BY_ID';

// == [CLE-VALEURS] - ACTIONS sur le store projets(Reducer user)
// en cas de connexion d'un user ses projets apparaissent
export const PROJECT_STORE_UPDATE = 'PROJECT_STORE_UPDATE';
// en cas de déconnexion ses projets n'apparaissent plus
export const PROJECT_STORE_CLEAN = 'PROJECT_STORE_CLEAN';

// == ===================================
// == PROJECT STORE - ACTIONS CREATORS PART

export const updateProjectStore = (payload) => ({
  type: PROJECT_STORE_UPDATE,
  payload,
});

export const cleanProjectStore = (payload) => ({
  type: PROJECT_STORE_CLEAN,
  payload,
});

// == ===================================
// == PROJECT CONNECTORS - ACTIONS CREATORS PART

// uploading a project
export const createProject = (project) => ({
  type: CREATE_PROJECT,
  payload: project,
});

// editing a project
export const editProject = (project) => ({
  type: CREATE_PROJECT,
  payload: project,
});

// deleting a project
export const deleteProject = (project) => ({
  type: CREATE_PROJECT,
  payload: project,
});

// get a project by id
export const getProject = (id) => ({
  type: GET_PROJECT_BY_ID,
  payload: id,
});
