/**
 * @module Actions
 * Configuration des actions sur le store utlisateurs et projets
 */

// == [CLE-VALEURS] - ACTIONS sur profils utilisateur (middleware user)
export const USER_CREATE = 'USER_CREATE';
export const USER_BY_ID = 'USER_BY_ID';
export const USER_EDIT = 'USER_EDIT';
export const USER_DELETE = 'USER_DELETE';

// == [CLE-VALEURS] - ACTIONS sur fiche projet (middleware project)
export const CREATE_PROJECT = 'CREATE_PROJECT';

// == [CLE-VALEURS] - ACTIONS sur le store utilisateur (Reducer user)
// === En cas de connexion on sauvegarde dans le store utlisateur
export const USER_STORE_UPDATE = 'USER_STORE_UPDATE';
// === En cas de déconnexion on clean le store utlisateur
export const USER_STORE_CLEAN = 'USER_STORE_CLEAN';

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

// == ===================================
// == USER STORE - ACTIONS CREATORS PART

export const updateUserStore = (payload) => ({
  type: USER_STORE_UPDATE,
  payload,
});

export const cleanUserStore = (payload) => ({
  type: USER_STORE_CLEAN,
  payload,
});
