/**
 * @module project-actions
 * Configuration des actions sur le store projets
 */

// == [CLE-VALEURS] - ACTIONS sur fiche projet (middleware project)
export const PROJECT_SEARCH = 'PROJECT_SEARCH';
export const PROJECT_CREATE = 'PROJECT_CREATE';
export const PROJECT_EDIT = 'PROJECT_EDIT';
export const PROJECT_DELETE_CURRENT = 'PROJECT_DELETE';
export const PROJECT_ARCHIVED_CURRENT = 'PROJECT_ARCHIVED';

export const GET_PROJECT_BY_ID = 'GET_PROJECT_BY_ID';
export const GET_PROJECT_BY_GEO = 'GET_PROJECT_BY_GEO';
export const SEND_PROJECT = 'SEND_PROJECT';
export const PROJECT_NEED_ISCOMPLETED = 'PROJECT_NEED_ISCOMPLETED';
export const SEND_CREATED_PROJECT = 'SEND_CREATED_PROJECT';

// == [CLE-VALEURS] - ACTIONS sur le store projets(Reducer user)

export const PROJECT_STORE_UPDATE = 'PROJECT_STORE_UPDATE';
export const PROJECT_STORE_CLEAN = 'PROJECT_STORE_CLEAN';
export const PROJECT_CLEAN_PROJECTS = 'PROJECT_CLEAN_PROJECTS';
export const PROJECT_CLEAN_PROJECT = 'PROJECT_CLEAN_PROJECT';
export const PROJECT_NEED_UPDATE_BY_ID = 'PROJECT_NEED_UPDATE_BY_ID';

// == ===================================
// == PROJECT STORE - ACTIONS CREATORS PART

export const updateProjectStore = (payload) => ({
  type: PROJECT_STORE_UPDATE,
  payload,
});

export const cleanProjectStore = () => ({
  type: PROJECT_STORE_CLEAN,
});

export const cleanProjects = () => ({
  type: PROJECT_CLEAN_PROJECTS,
});

export const cleanProject = () => ({
  type: PROJECT_CLEAN_PROJECT,
});

export const projectNeedIsCompleted = (payload) => ({
  type: PROJECT_NEED_ISCOMPLETED,
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
export const editProject = () => ({
  type: PROJECT_EDIT,
});

// deleting a project
export const deleteProjectById = () => ({
  type: PROJECT_DELETE_CURRENT,
});

// Archiving a project
export const archiveProjectById = () => ({
  type: PROJECT_ARCHIVED_CURRENT,
});

// get a project by id
export const getProjectById = (id) => ({
  type: GET_PROJECT_BY_ID,
  payload: { id },
});

export const getProjectByGeo = (payload) => ({
  type: GET_PROJECT_BY_GEO,
  payload,
});

// send a project to geocoding API
export const sendProjectApi = () => ({
  type: SEND_PROJECT,
});

export const updateProjectNeed = (payload) => ({
  type: PROJECT_NEED_UPDATE_BY_ID,
  payload,
});
// send a project to back-end API
export const sendProjectCreated = (payload) => ({
  type: SEND_CREATED_PROJECT,
  payload,
});
