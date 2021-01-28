/**
 * @module user-actions
 * Configuration des actions sur le store et middleware utlisateurs
 */

// == [CLE-VALEURS] - ACTIONS sur profil utilisateur (middleware user)
export const USER_SIGNIN = 'USER_SIGNIN';
export const USER_SIGNOUT = 'USER_SIGNOUT';
export const USER_CREATE = 'USER_CREATE';
export const USER_BY_ID = 'USER_BY_ID';
export const USER_EDIT = 'USER_EDIT';
export const USER_DELETE = 'USER_DELETE';
export const CONFIRM_DELETE = 'CONFIRM_DELETE';
export const CONFIRM_DELETE_SUBMIT = 'CONFIRM_DELETE_SUBMIT';
// == [CLE-VALEURS] - ACTIONS sur le store utilisateur (Reducer user)
// === En cas de connexion on sauvegarde dans le store utlisateur
export const USER_STORE_UPDATE = 'USER_STORE_UPDATE';
// === En cas de déconnexion on clean le store utlisateur
export const USER_STORE_CLEAN = 'USER_STORE_CLEAN';

// == ===================================
// == USER MIDDLEWARE - ACTIONS CREATORS PART
export const createUser = (payload) => ({
  type: USER_CREATE,
  payload,
});
export const getUserById = (payload) => ({
  type: USER_BY_ID,
  payload,
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
export const profilDeleteConfirm = (payload) => ({
  type: CONFIRM_DELETE,
  payload,
});
export const profilDeleteSubmit = () => ({
  type: CONFIRM_DELETE_SUBMIT,
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
