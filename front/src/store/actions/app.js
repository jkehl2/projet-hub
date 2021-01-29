/**
 * @module app-actions
 * Configuration des actions sur le store applicatif technique
 */

// == [CLE-VALEURS] - ACTIONS MIDDLEWARE applicatif technique
export const APP_REFRESH_PROFIL = 'APP_REFRESH_PROFIL';

// == [CLE-VALEURS] - ACTIONS sur le store applicatif technique
export const APP_LOADING_ON = 'APP_LOADING_ON';
export const APP_LOADING_OFF = 'APP_LOADING_OFF';

export const APP_PROFIL_UPDATE = 'APP_PROFIL_UPDATE';
export const APP_PROFIL_CLEAN = 'APP_PROFIL_CLEAN';

export const APP_CLEAN = 'APP_CLEAN';

// == ACTIONS GESTION FORMULAIRE DE RECHERCHE
export const APP_SEARCH_UPDATE = 'APP_SEARCH_UPDATE';

// == ACTIONS GESTION FORMULAIRE DE CONNEXION
export const APP_SIGNIN_UPDATE = 'APP_SIGNIN_UPDATE';
export const APP_SIGNIN_CLEAN = 'APP_SIGNIN_CLEAN';

// == ACTIONS GESTION MESSAGE D'ERREUR
export const APP_ERROR_UPDATE = 'APP_ERROR_UPDATE';
export const APP_ERROR_CLEAN = 'APP_ERROR_CLEAN';

// == ACTIONS GESTION MESSAGE D'INFORMATION
export const APP_MSG_UPDATE = 'APP_MSG_UPDATE';
export const APP_MSG_CLEAN = 'APP_MSG_CLEAN';

// == ACTIONS SIGN UP
export const APP_SIGN_UP_UPDATE = 'APP_SIGN_UP_UPDATE';
export const USER_CREATION_VERIF = 'USER_CREATION_VERIF';
export const USER_CREATE = 'USER_CREATE';
export const APP_SIGNUP_CLEAN = 'APP_SIGNUP_CLEAN';

// == ===================================
// == USER MIDDLEWARE - ACTIONS CREATORS PART
export const appRefreshProfil = () => ({
  type: APP_REFRESH_PROFIL,
});

// == ===================================
// == USER STORE - ACTIONS CREATORS PART
export const appLoadingOn = () => ({
  type: APP_LOADING_ON,
});

export const appLoadingOff = () => ({
  type: APP_LOADING_OFF,
});

export const appClean = () => ({
  type: APP_CLEAN,
});

export const appSearchUpdate = (payload) => ({
  type: APP_SEARCH_UPDATE,
  payload,
});

export const appSignInUpdate = (payload) => ({
  type: APP_SIGNIN_UPDATE,
  payload,
});

export const appSignInClean = () => ({
  type: APP_SIGNIN_CLEAN,
});

export const appSignUpClean = () => ({
  type: APP_SIGNUP_CLEAN,
});
export const appErrorUpdate = (error) => ({
  type: APP_ERROR_UPDATE,
  payload: {
    isError: true,
    error,
  },
});

export const appErrorClean = () => ({
  type: APP_ERROR_CLEAN,
});

export const appMsgUpdate = (message) => ({
  type: APP_MSG_UPDATE,
  payload: {
    isMessage: true,
    message,
  },
});

export const appMsgClean = () => ({
  type: APP_MSG_CLEAN,
});

export const appUpdateProfil = (payload) => (
  {
    type: APP_PROFIL_UPDATE,
    payload,
  }
);

export const appEditProfilOn = () => (
  {
    type: APP_PROFIL_UPDATE,
    payload: { isEditMode: true },
  }
);

export const appEditProfilOff = () => (
  {
    type: APP_PROFIL_UPDATE,
    payload: { isEditMode: false },
  }
);

// == ===================================
// == USER SIGN UP - ACTIONS CREATORS PART
export const appSetUpSignUp = (payload) => ({
  type: APP_SIGN_UP_UPDATE,
  payload,
});

export const appCreateUserVerif = () => ({
  type: USER_CREATION_VERIF,
});

export const createUser = (payload) => ({
  type: USER_CREATE,
  payload,
});
