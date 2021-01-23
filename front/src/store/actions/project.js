/**
 * @module project-actions
 * Configuration des actions sur le store projets
 */

// == [CLE-VALEURS] - ACTIONS sur fiche projet (middleware project)
export const PROJECT_SEARCH = 'PROJECT_SEARCH';
export const PROJECT_CREATE = 'PROJECT_CREATE';
export const PROJECT_EDIT = 'PROJECT_EDIT';
export const PROJECT_DELETE = 'PROJECT_DELETE';
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

// Execute a project search
export const searchProject = () => ({
  type: PROJECT_SEARCH,
});

// uploading a project
export const createProject = (project) => ({
  type: PROJECT_CREATE,
  payload: project,
});

// editing a project
export const editProject = (project) => ({
  type: PROJECT_CREATE,
  payload: project,
});

// deleting a project
export const deleteProject = (project) => ({
  type: PROJECT_CREATE,
  payload: project,
});

// get a project by id
export const getProject = (id) => ({
  type: GET_PROJECT_BY_ID,
  payload: id,
});
