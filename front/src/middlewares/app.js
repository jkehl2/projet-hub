/* eslint-disable camelcase */
/**
 * @module user-middleware
 * Middleware de gestion des connecteurs à la BD Utilisteurs
 */
// == IMPORT NPM
import axios from 'axios';
import querystring from 'query-string';

// == import utilitary date formater HTML to ISO STRING
import dateApiFormater from 'src/utils/dateHTMLFormater';

// ==  API CONFIGURATION URL
import apiConfig from 'src/apiConfig/parameters.json';

// == IMPORT ACTIONS SUR PARAMETRES APPLICATIF TECHNIQUE
import {
  APP_REFRESH_PROFIL,
  APP_REFRESH_PROJECT,
  APP_CONFIRM_PASSWORD,
  APP_PROFIL_CONFIRM,
  APP_PROJECT_CONFIRM,
  APP_PROJECT_EDIT,
  APP_PROJECT_CREATE,
  APP_CREATE_USER_VERIF,
  APP_GET_GEOCODING,
  APP_REFRESH_NEEDS_ARRAY,
  appUpdateProfil,
  appUpdateProject,
  appMsgUpdate,
  appErrorUpdate,
  appErrorClean,
  appMsgClean,
  appLoadingOn,
  appLoadingOff,
  appGetGeoCoding,
  appUpdateNeedsArr,
} from 'src/store/actions/app';

import {
  PROJECT_SEARCH,
  getProjectByGeo,
  cleanProjectStore,
  editProject,
  createProject,
} from 'src/store/actions/project';

import {
  createUser,
} from 'src/store/actions/user';

// == import utils to allow perimeter conversion
import perimetersValue from 'src/utils/perimeters.json';

// MIDDLEWARE USER - Middleware de gestion des connecteurs à la BD Utilisteurs
const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case APP_REFRESH_PROFIL: {
      const { user } = store.getState();
      const payload = {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      };
      store.dispatch(appUpdateProfil(payload));
      return;
    }
    case APP_REFRESH_PROJECT: {
      const {
        project: {
          project: {
            title,
            expiration_date,
            description,
            location,
          },
        },
      } = store.getState();
      const payload = {
        title,
        expiration_date,
        description,
        location,
      };
      store.dispatch(appUpdateProject(payload));
      return;
    }
    case APP_PROJECT_EDIT: {
      const {
        app: {
          project: {
            title,
            expiration_date,
            description,
            location,
          },
        },
        project: {
          project: {
            id,
            image,
          },
        },
      } = store.getState();
      const payload = {
        id,
        title,
        expiration_date: dateApiFormater(expiration_date),
        description,
        location,
        image,
      };
      store.dispatch(appGetGeoCoding(location, editProject, payload));
      return;
    }
    case APP_PROJECT_CREATE: {
      const {
        app: {
          project: {
            title,
            expiration_date,
            description,
            location,
          },
        },
      } = store.getState();
      const payload = {
        title,
        expiration_date: dateApiFormater(expiration_date),
        description,
        location,
      };
      store.dispatch(appGetGeoCoding(location, createProject, payload));
      return;
    }
    case APP_GET_GEOCODING: {
      const { location, dispatchAction } = action;
      if (location.trim() === '') {
        store.dispatch(appErrorClean());
        store.dispatch(appMsgClean());
        return;
      }
      const query = querystring.stringifyUrl({
        url: apiConfig.URL_GEOCODE,
        query: {
          adressdetails: 1,
          q: location,
          format: 'json',
          limit: 1,
        },
      });
      axios.get(query)
        .then((response) => {
          const geolocArr = response.data;
          if (geolocArr.length > 0) {
            const payload = {
              ...action.payload,
              lat: parseFloat(geolocArr[0].lat),
              long: parseFloat(geolocArr[0].lon),
            };
            store.dispatch(dispatchAction(payload));
          }
          else {
            store.dispatch(appMsgUpdate('Localité inconnue merci de préciser.'));
          }
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      store.dispatch(appErrorClean());
      store.dispatch(appMsgClean());
      store.dispatch(appLoadingOn());
      return;
    }
    case APP_CREATE_USER_VERIF: {
      const {
        app: {
          signUp: {
            email, password, passwordVerification, name,
          },
        },
      } = store.getState();
      // Déjà vérifier que email et pseudo corresp aux attentes
      if (email.includes('@') && name.length > 2) {
      // vérifier si password === passwordVerification
      // si c'est pas le cas
        if (password.length > 5 && password !== passwordVerification) {
        // on envoie un msg d'erreur pour ressaisir
          store.dispatch(appMsgUpdate('Veuillez ressaisir votre mot de passe'));
        }
        else {
        // si c'est le cas, on envoie les données à l'API localhub
          store.dispatch(createUser());
          store.dispatch(appLoadingOn());
        }
      }
      else {
        store.dispatch(appMsgUpdate('Votre email et/ou pseudo semblent incorrects, merci de recommencer'));
      }
      return;
    }
    case APP_PROFIL_CONFIRM: {
      const { app: { profil: { confirm } } } = store.getState();
      if (confirm === 'CONFIRMER') {
        store.dispatch(action.dispatch());
      }
      else {
        store.dispatch(appMsgUpdate("Veuillez saisir 'CONFIRMER' pour valider votre action."));
      }
      store.dispatch(appUpdateProfil({ confirm: '' }));
      return; }
    case APP_PROJECT_CONFIRM: {
      const { app: { project: { confirm } } } = store.getState();
      if (confirm === 'CONFIRMER') {
        store.dispatch(action.dispatch());
      }
      else {
        store.dispatch(appMsgUpdate("Veuillez saisir 'CONFIRMER' pour valider votre action."));
      }
      store.dispatch(appUpdateProject({ confirm: '' }));
      return; }
    case APP_CONFIRM_PASSWORD: {
      const { app: { profil: { password, passwordConfirm } } } = store.getState();
      if (password === passwordConfirm) {
        store.dispatch(action.dispatch());
      }
      else {
        store.dispatch(appErrorUpdate('La confirmation du nouveau mot de passe n\'est pas correct. Veuillez recommencer.'));
      }
      return; }

    case PROJECT_SEARCH: {
      const {
        app: {
          search: {
            localite,
            perimeter,
            archived,
          },
        },
      } = store.getState();
      store.dispatch(cleanProjectStore());
      const payload = {
        scope: parseInt(perimetersValue.perimeters[perimeter].apiValue, 10),
        archived,
      };
      store.dispatch(appGetGeoCoding(localite, getProjectByGeo, payload));
      return;
    }
    case APP_REFRESH_NEEDS_ARRAY: {
      const { project: { project: { needs } } } = store.getState();
      const payload = { needs };
      next(appUpdateNeedsArr(payload));
      break;
    }
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
