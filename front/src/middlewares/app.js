/**
 * @module user-middleware
 * Middleware de gestion des connecteurs à la BD Utilisteurs
 */

// == IMPORT ACTIONS SUR PARAMETRES APPLICATIF TECHNIQUE
import {
  APP_REFRESH_PROFIL, APP_CONFIRM_PASSWORD, appUpdateProfil, appErrorUpdate,
} from 'src/store/actions/app';

// == IMPORT ACTIONS SUR USER
import { userEditPassword } from 'src/store/actions/user';

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
      return; }
    case APP_CONFIRM_PASSWORD: {
      const { app: { profil: { password, passwordConfirm } } } = store.getState();
      if (password === passwordConfirm) {
        store.dispatch(userEditPassword());
      }
      else {
        store.dispatch(appErrorUpdate('La confirmation du nouveau mot de passe n\'est pas égale au nouveau mot de passe. Veuillez ressaisir votre confirmation de mot de passe.'));
      }
      return; }
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
