export const USER_CREATE = 'USER_CREATE';
export const USER_BY_ID = 'USER_BY_ID';
export const USER_EDIT = 'USER_EDIT';
export const USER_DELETE = 'USER_DELETE';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const GET_PROJECT_BY_ID = 'GET_PROJECT_BY_ID';

// action creator

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
