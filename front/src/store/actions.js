export const USER_CREATE = 'USER_CREATE';
export const USER_EDIT = 'USER_EDIT';
export const USER_DELETE = 'USER_DELETE';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';

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
