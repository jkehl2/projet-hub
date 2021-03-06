/**
 * @module app-actions
 * Configuration des actions sur le store applicatif technique(?)
 */

// == ===================================
// == [CLE-VALEURS] - ACTIONS MIDDLEWARE applicatif technique(?)
export const APP_REFRESH_PROFIL = 'APP_REFRESH_PROFIL';
export const APP_PROFIL_CONFIRM = 'APP_PROFIL_CONFIRM';
export const APP_CREATE_USER_VERIF = 'USER_CREATION_VERIF';
export const APP_REFRESH_PROJECT = 'APP_REFRESH_PROJECT';
export const APP_PROJECT_CREATE = 'APP_PROJECT_CREATE';
export const APP_PROJECT_EDIT = 'APP_PROJECT_EDIT';
export const APP_PROJECT_CONFIRM = 'APP_PROJECT_CONFIRM';
export const APP_CREATE_NEEDS = 'APP_CREATE_NEEDS';
export const APP_SUBMIT_NEEDS = 'APP_SUBMIT_NEEDS';
export const APP_REFRESH_NEEDS_ARRAY = 'APP_REFRESH_NEEDS_ARRAY';
export const APP_CONFIRM_PASSWORD = 'APP_CONFIRM_PASSWORD';
export const APP_GET_GEOCODING = 'APP_GET_GEOCODING';

// == ===================================
// == [CLE-VALEURS] - ACTIONS sur le store applicatif technique(?)
export const APP_CLEAN = 'APP_CLEAN';
export const APP_LOADING_ON = 'APP_LOADING_ON';
export const APP_LOADING_OFF = 'APP_LOADING_OFF';
export const APP_PROFIL_UPDATE = 'APP_PROFIL_UPDATE';
export const APP_PROFIL_CLEAN = 'APP_PROFIL_CLEAN';
export const APP_SEARCH_UPDATE = 'APP_SEARCH_UPDATE';
export const APP_SIGNIN_UPDATE = 'APP_SIGNIN_UPDATE';
export const APP_SIGNIN_CLEAN = 'APP_SIGNIN_CLEAN';
export const APP_ERROR_UPDATE = 'APP_ERROR_UPDATE';
export const APP_ERROR_CLEAN = 'APP_ERROR_CLEAN';
export const APP_MSG_UPDATE = 'APP_MSG_UPDATE';
export const APP_MSG_CLEAN = 'APP_MSG_CLEAN';
export const APP_SIGN_UP_UPDATE = 'APP_SIGN_UP_UPDATE';
export const APP_SIGNUP_CLEAN = 'APP_SIGNUP_CLEAN';
export const APP_UPDATE_PROJECT = 'APP_UPDATE_PROJECT';
export const APP_CLEAN_PROJECT = 'APP_CLEAN_PROJECT';
export const APP_CLEAN_NEEDS_FIELDS = 'APP_CLEAN_NEEDS_FIELDS';
export const APP_UPDATE_NEEDS_ARRAY = 'APP_UPDATE_NEEDS_ARRAY';
export const APP_UPDATE_NEEDS_FIELDS = 'APP_UPDATE_NEEDS_FIELDS';
export const APP_UPDATE_NEEDS_ARRAY_FIELDS_BY_ID = 'APP_UPDATE_NEEDS_ARRAY_FIELDS_BY_ID';
export const APP_ADD_NEED_TO_ARRAY = 'APP_ADD_NEED_TO_ARRAY';
export const APP_DELETE_NEED_IN_ARRAY_BY_ID = 'APP_DELETE_NEED_IN_ARRAY_BY_ID';

// == ===================================
// == USER MIDDLEWARE - ACTIONS CREATORS PART
export const appRefreshProfil = () => ({
  type: APP_REFRESH_PROFIL,
});

/**
 * MIDDLEWARE ACTION - CONFIRM PASSWORD
 * @param {Object} dispatch
 */
export const appConfirmPassword = (dispatch) => ({
  type: APP_CONFIRM_PASSWORD,
  dispatch,
});

export const appProfilConfirm = (dispatch) => ({
  type: APP_PROFIL_CONFIRM,
  dispatch,
});

export const appRefreshProject = () => ({
  type: APP_REFRESH_PROJECT,
});

export const appProjectCreate = () => ({
  type: APP_PROJECT_CREATE,
});

export const appProjectConfirm = (dispatch) => ({
  type: APP_PROJECT_CONFIRM,
  dispatch,
});

export const appCreateUserVerif = () => ({
  type: APP_CREATE_USER_VERIF,
});

export const appProjectEdit = () => ({
  type: APP_PROJECT_EDIT,
});

export const appGetGeoCoding = (location, dispatchAction, payload) => ({
  type: APP_GET_GEOCODING,
  location,
  dispatchAction,
  payload,
});
// ==
// == EDIT / ADD NEEDS SUB PART
export const appRefreshNeedsArr = () => ({
  type: APP_REFRESH_NEEDS_ARRAY,
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

export const appSetUpSignUp = (payload) => ({
  type: APP_SIGN_UP_UPDATE,
  payload,
});

export const appProfilClean = () => (
  {
    type: APP_PROFIL_CLEAN,
  }
);

// ============================================
// == PROJECT SUB PART

export const appUpdateProject = (payload) => ({
  type: APP_UPDATE_PROJECT,
  payload,
});

export const appCleanProject = (payload) => ({
  type: APP_CLEAN_PROJECT,
  payload,
});

export const appEditProjectOn = () => (
  {
    type: APP_UPDATE_PROJECT,
    payload: { isEditMode: true },
  }
);

export const appEditProjectOff = () => (
  {
    type: APP_UPDATE_PROJECT,
    payload: { isEditMode: false },
  }
);

// CREATE NEEDS
export const appCreateNeeds = (payload) => ({
  type: APP_CREATE_NEEDS,
  payload,
});

export const appSubmitCreatedNeeds = () => ({
  type: APP_SUBMIT_NEEDS,
});

// ==
// == EDIT / ADD NEEDS SUB PART

export const appCleanNeedFields = () => ({
  type: APP_CLEAN_NEEDS_FIELDS,
});

export const appUpdateNeedsArr = (payload) => ({
  type: APP_UPDATE_NEEDS_ARRAY,
  payload,
});

export const appUpdateNeedFields = (payload) => ({
  type: APP_UPDATE_NEEDS_FIELDS,
  payload,
});

export const appUpdateNeedArrFieldsById = (id, payload) => ({
  type: APP_UPDATE_NEEDS_ARRAY_FIELDS_BY_ID,
  id,
  payload,
});

export const appAddNeedToArray = (newNeed) => ({
  type: APP_ADD_NEED_TO_ARRAY,
  newNeed,
});

export const appDeleteNeedInArrayById = (id) => ({
  type: APP_DELETE_NEED_IN_ARRAY_BY_ID,
  id,
});
