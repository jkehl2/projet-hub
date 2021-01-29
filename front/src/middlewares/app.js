/**
 * @module user-middleware
 * Middleware de gestion des connecteurs à la BD Utilisteurs
 */

// == IMPORT ACTIONS SUR PARAMETRES APPLICATIF TECHNIQUE
import {
  APP_REFRESH_PROFIL, appUpdateProfil, USER_CREATION_VERIF,
  appMsgUpdate, appErrorUpdate, appErrorClean, appClean,
  appLoadingOn,
} from 'src/store/actions/app';

import { createUser } from '../store/actions/user';

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
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
