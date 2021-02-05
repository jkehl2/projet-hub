/**
 * @module user-actions
 * CONFIGURATION OF THE ACTIONS ON THE STORE & USER MIDDLEWARE
 */

// == [KEY-VALUES] - ACTIONS ON USER PROFILE (MIDDLEWARE USER)
export const USER_SIGNIN = 'USER_SIGNIN';
export const USER_SIGNOUT = 'USER_SIGNOUT';
export const USER_BY_ID = 'USER_BY_ID';
export const USER_EDIT = 'USER_EDIT';
export const USER_EDIT_PASSWORD = 'USER_EDIT_PASSWORD';
export const USER_DELETE = 'USER_DELETE';
export const CONFIRM_DELETE = 'CONFIRM_DELETE';
export const CONFIRM_DELETE_SUBMIT = 'CONFIRM_DELETE_SUBMIT';
export const USER_CREATE = 'USER_CREATE';
export const USER_UPLOAD_AVATAR = 'USER_UPLOAD_AVATAR';
// == [KEY-VALUES] - ACTIONS ON USER STORE (REDUCER USER)
// === BACKUP IN USER STORE WHEN CONNECT
export const USER_STORE_UPDATE = 'USER_STORE_UPDATE';
// === CLEAN USER STORE WHEN DISCONNECT
export const USER_STORE_CLEAN = 'USER_STORE_CLEAN';

// == ===================================
// == USER MIDDLEWARE - ACTIONS CREATORS PART

export const getUserById = (payload) => ({
  type: USER_BY_ID,
  payload,
});
export const userUploadAvatar = (fileSrc) => ({
  type: USER_UPLOAD_AVATAR,
  fileSrc,
});
export const editUser = () => ({
  type: USER_EDIT,
});
export const deleteUser = () => ({
  type: USER_DELETE,
});
export const userSignIn = () => ({
  type: USER_SIGNIN,
});
export const userSignOut = () => ({
  type: USER_SIGNOUT,
});

export const createUser = () => ({
  type: USER_CREATE,
});

export const profilDeleteSubmit = () => ({
  type: CONFIRM_DELETE_SUBMIT,
});
export const userEditPassword = () => ({
  type: USER_EDIT_PASSWORD,
});

// == ===================================
// == USER STORE - ACTIONS CREATORS PART
export const updateUserStore = (payload) => ({
  type: USER_STORE_UPDATE,
  payload,
});
export const cleanUserStore = () => ({
  type: USER_STORE_CLEAN,
});
