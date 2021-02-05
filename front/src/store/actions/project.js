/**
 * @module project-actions
 * CONFIGURATION ACTIONS ON THE STORE PROJETS
 */

// == [KEY-VALUES] - ACTIONS ON PROJECT CARD (MIDDLEWARE PROJECT)
export const PROJECT_SEARCH = 'PROJECT_SEARCH';
export const PROJECT_CREATE = 'PROJECT_CREATE';
export const PROJECT_EDIT = 'PROJECT_EDIT';
export const PROJECT_DELETE_CURRENT = 'PROJECT_DELETE';
export const PROJECT_ARCHIVED_CURRENT = 'PROJECT_ARCHIVED';

export const GET_PROJECT_BY_ID = 'GET_PROJECT_BY_ID';
export const GET_PROJECT_BY_GEO = 'GET_PROJECT_BY_GEO';
export const PROJECT_NEED_ISCOMPLETED = 'PROJECT_NEED_ISCOMPLETED';

export const PROJECT_ADD_FAVORITE_BY_ID = 'PROJECT_ADD_FAVORITE_BY_ID';
export const PROJECT_REMOVE_FAVORITE_BY_ID = 'PROJECT_REMOVE_FAVORITE_BY_ID';

export const PROJECT_UPLOAD_IMAGE = 'PROJECT_UPLOAD_IMAGE';

// == [KEY-VALUES] - ACTIONS ON THE PROJECT STORE (REDUCER USER)

export const PROJECT_STORE_UPDATE = 'PROJECT_STORE_UPDATE';
export const PROJECT_UPDATE_FAVORITE = 'PROJECT_UPDATE_FAVORITE';
export const PROJECT_STORE_CLEAN = 'PROJECT_STORE_CLEAN';
export const PROJECT_CLEAN_PROJECTS = 'PROJECT_CLEAN_PROJECTS';
export const PROJECT_CLEAN_PROJECT = 'PROJECT_CLEAN_PROJECT';
export const PROJECT_NEED_UPDATE_BY_ID = 'PROJECT_NEED_UPDATE_BY_ID';
export const GET_MY_PROJECTS = 'GET_MY_PROJECTS';
export const GET_MY_FAVORITES = 'GET_MY_FAVORITES';

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

// GET ALL PROJECTS BY AUTHOR
export const getProjectsByAuthor = () => ({
  type: GET_MY_PROJECTS,
});

// GET ALL PROJECTS BY FAVORITES
export const getProjectsByFavorites = () => ({
  type: GET_MY_FAVORITES,
});

export const updateProjectFavorite = (id, payload) => ({
  type: PROJECT_UPDATE_FAVORITE,
  id,
  payload,
});

// == ===================================
// == PROJECT CONNECTORS - ACTIONS CREATORS PART

// EXECUTE A PROJECT SEARCH
export const searchProject = () => ({
  type: PROJECT_SEARCH,
});

// UPLOADING A PROJECT
export const createProject = (payload) => ({
  type: PROJECT_CREATE,
  payload,
});

// EDITING A PROJECT
export const editProject = (payload) => ({
  type: PROJECT_EDIT,
  payload,
});

// UPLOAD FILE IMAGE FOR CURRENT PROJECT
export const projectUploadImage = (fileSrc) => ({
  type: PROJECT_UPLOAD_IMAGE,
  fileSrc,
});

// DELETING A PROJECT
export const deleteProjectById = () => ({
  type: PROJECT_DELETE_CURRENT,
});

// ARCHIVING A PROJECT
export const archiveProjectById = () => ({
  type: PROJECT_ARCHIVED_CURRENT,
});

// GET A PROJECT BI ID
export const getProjectById = (id) => ({
  type: GET_PROJECT_BY_ID,
  payload: { id },
});

export const getProjectByGeo = (payload) => ({
  type: GET_PROJECT_BY_GEO,
  payload,
});

export const updateProjectNeed = (payload) => ({
  type: PROJECT_NEED_UPDATE_BY_ID,
  payload,
});

// == ==================
// == FAVORITE SUB PART

export const projectAddToFavoriteById = (id) => ({
  type: PROJECT_ADD_FAVORITE_BY_ID,
  id,
});
export const projectRemoveToFavoriteById = (id, refreshFavoriteLst = false) => ({
  type: PROJECT_REMOVE_FAVORITE_BY_ID,
  id,
  refreshFavoriteLst,
});
