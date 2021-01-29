/**
 * @module user-middleware
 * Middleware de gestion des connecteurs à la BD Utilisteurs
 */

// == IMPORT ACTIONS SUR PARAMETRES APPLICATIF TECHNIQUE
import {
  APP_REFRESH_PROFIL, appUpdateProfil, USER_CREATION_VERIF, APP_CONFIRM_PASSWORD,
  APP_PROJECT_CREATE_VERIF, appMsgUpdate, appErrorUpdate, appErrorClean, appClean,
  appLoadingOn,
} from 'src/store/actions/app';

import { createUser, userEditPassword } from '../store/actions/user';

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
    case APP_PROJECT_CREATE_VERIF: {
      const { app: {createProject: { title, date, description, location, perimeter } } } = store.getState();
    if (title.length === 0 && date.length === 0) {
      store.dispatch(appMsgUpdate('Veuillez remplir les champs titre et date'))
    }
    else {
      store.dispatch(sendProjectApi());
    }
  return; }
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
