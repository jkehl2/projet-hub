/**
 * @module user-middleware
 * Middleware de gestion des connecteurs à la BD Utilisteurs
 */
// == IMPORT NPM
import axios from 'axios';
import querystring from 'query-string';

// == IMPORT ACTIONS SUR PARAMETRES APPLICATIF TECHNIQUE
import {
  APP_REFRESH_PROFIL,
  appUpdateProfil,
  USER_CREATION_VERIF,
  appMsgUpdate,
  appErrorUpdate,
  appErrorClean,
  appMsgClean,
  appLoadingOn,
  appLoadingOff,
  APP_CONFIRM_PASSWORD,
} from 'src/store/actions/app';

import {
  PROJECT_SEARCH,
  getProjectByGeo,
  cleanProjectStore,
} from 'src/store/actions/project';

import {
  userEditPassword,
  createUser,
} from 'src/store/actions/user';

// == import utils to allow perimeter conversion
import perimetersValue from 'src/utils/perimeters.json';

// == IMPORT ACTIONS SUR USER

// MIDDLEWARE USER - Middleware de gestion des connecteurs à la BD Utilisteurs
const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case APP_REFRESH_PROFIL: {
      // ON RECUPERE LES VALEUR ACTUEL DE USER
      // POUR RAFRAICHIR LES PARAMETRES TECHNIQUES AVEC
      const { user } = store.getState();
      const payload = {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      };
      store.dispatch(appUpdateProfil(payload));
      return;
    }

    case USER_CREATION_VERIF: {
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

    case APP_CONFIRM_PASSWORD: {
      const { app: { profil: { password, passwordConfirm } } } = store.getState();
      if (password === passwordConfirm) {
        store.dispatch(userEditPassword());
      }
      else {
        store.dispatch(appErrorUpdate('La confirmation du nouveau mot de passe n\'est pas égale au nouveau mot de passe. Veuillez ressaisir votre confirmation de mot de passe.'));
      }
      return; }
    case PROJECT_SEARCH: {
      // gathering values needed for geocoding
      const {
        app: {
          search: {
            localite,
            perimeter,
            archived,
          },
        },
      } = store.getState();

      if (localite.trim() === '') {
        store.dispatch(appErrorClean());
        store.dispatch(appMsgClean());
        store.dispatch(cleanProjectStore());
        return;
      }
      const search = querystring.stringify(localite);
      axios.get(`https://nominatim.openstreetmap.org/search?adressdetails=1&q=${search}&format=json&limit=1`)
        .then((response) => {
          const geolocArr = response.data;
          if (geolocArr.length > 0) {
            const searchValue = {
              long: geolocArr[0].lon,
              lat: geolocArr[0].lat,
              scope: parseInt(perimetersValue.perimeters[perimeter].apiValue, 10),
              archived,
            };
            store.dispatch(getProjectByGeo(searchValue));
          }
          else {
            store.dispatch(appMsgUpdate('Localité inconnue merci de préciser.'));
          }
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
          store.dispatch(appLoadingOff());
        });
      store.dispatch(appErrorClean());
      store.dispatch(appMsgClean());
      store.dispatch(cleanProjectStore());
      store.dispatch(appLoadingOn());
      return;
    }
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
