/**
 * @module user-actions
 * Configuration des actions sur le store utlisateurs
 */

// == [CLE-VALEURS] - ACTIONS sur profils utilisateur (middleware user)
export const USER_CREATE = 'USER_CREATE';
export const USER_BY_ID = 'USER_BY_ID';
export const USER_EDIT = 'USER_EDIT';
export const USER_DELETE = 'USER_DELETE';
export const USER_SIGNIN = 'USER_SIGNIN';

// == [CLE-VALEURS] - ACTIONS sur le store utilisateur (Reducer user)
// === En cas de connexion on sauvegarde dans le store utlisateur
export const USER_STORE_UPDATE = 'USER_STORE_UPDATE';
// === En cas de déconnexion on clean le store utlisateur
export const USER_STORE_CLEAN = 'USER_STORE_CLEAN';
// === Pour clean le formulaire de connexion
export const SIGNIN_CLEAN = 'SIGNIN_CLEAN';
// === Pour persister les infos du formulaire de connexion
export const SIGNIN_UPDATE = 'SIGNIN_UPDATE';

// == ===================================
// == USER PROFIL - ACTIONS CREATORS PART

export const createUser = (payload) => ({
  type: USER_CREATE,
  payload,
});

export const getUserById = (payload) => ({
  type: USER_BY_ID,
  payload,
});

export const editUser = (payload) => ({
  type: USER_EDIT,
  payload,
});

export const deleteUser = (payload) => ({
  type: USER_DELETE,
  payload,
});

export const execSignIn = () => ({
  type: USER_SIGNIN,
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

export const cleanSignIn = () => ({
  type: SIGNIN_CLEAN,
});

export const updateSignInValue = (payload) => ({
  type: USER_STORE_UPDATE,
  payload,
});
