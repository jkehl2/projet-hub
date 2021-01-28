/**
 * @module user-middleware
 * Middleware de gestion des connecteurs à la BD Utilisteurs
 */

/* eslint-disable no-case-declarations */
import axios from 'axios';
import { push, goBack } from 'connected-react-router';

// == IMPORT CONFIGURATION & QUERY - GRAPHQL CONNECTEUR AXIOS
import configGraphQl, {
  queryUserCreate,
  queryUserById,
  queryUserEdit,
  queryUserDelete,
  signInConfig,
  signOutConfig,
} from 'src/apiConfig/';

// == IMPORT ACTIONS SUR PROFIL UTILISATEUR
import {
  USER_CREATE, USER_BY_ID, USER_EDIT, USER_DELETE, USER_SIGNIN,
  updateUserStore, CONFIRM_DELETE_SUBMIT,
  USER_SIGNOUT,
  cleanUserStore,
  deleteUser,
} from 'src/store/actions/user';

// == IMPORT ACTIONS SUR PARAMETRES APPLICATIF TECHNIQUE
import {
  appLoadingOn,
  appLoadingOff,
  appErrorUpdate,
  appMsgUpdate,
  appMsgClean,
  appErrorClean,
  appSignInClean,
  appSignUpClean,
  appEditProfilOff,
} from 'src/store/actions/app';

// MIDDLEWARE USER - Middleware de gestion des connecteurs à la BD Utilisteurs
const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case USER_SIGNIN: {
      const { app } = store.getState();
      const data = JSON.stringify({ email: app.signIn.email, password: app.signIn.password });
      const config = {
        ...signInConfig,
        data,
      };

      axios(config)
        .then((response) => {
          // En cas de retour négatif à la demande de signin
          // On affiche le message server à l'utlisateur
          if (response.data.error) {
            store.dispatch(appErrorUpdate(response.data.error));
          }
          else {
            // Sinon on récupère les infos utlisateur
            const userdata = {
              ...response.data,
              logged: true,
            };
            // Si null dans avatar alors on ne garde pas ce paramètre pour la maj du store
            if (userdata.avatar === null) {
              delete userdata.avatar;
            }
            store.dispatch(updateUserStore(userdata));
            // On redirecte vers la page d'accueil
            store.dispatch(goBack());
            const { user } = store.getState();
            store.dispatch(appMsgUpdate(`Bienvenue ${user.name}.`));
          }
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      store.dispatch(appMsgClean());
      store.dispatch(appErrorClean());
      store.dispatch(appSignInClean());
      store.dispatch(appLoadingOn());
      return;
    }

    case USER_SIGNOUT: {
      const config = {
        ...signOutConfig,
      };

      axios(config)
        .then((response) => {
          if (response.data.error) {
            store.dispatch(appErrorUpdate(response.data.error));
          }
          else {
            store.dispatch(cleanUserStore());
          }
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      store.dispatch(appLoadingOn());
      return;
    }
    case USER_CREATE: {
      // récupérer les données du store à envoyer à l'API
      const {
        app: {
          signUp: {
            email, password, name,
          },
        },
      } = store.getState();

      const data = JSON.stringify({
        ...queryUserCreate,
        variables: { email, password, name },
      });

      const config = {
        ...configGraphQl,
        data,
      };

      axios(config)
        .then((response) => {
          // on envoie les données du store app à user
          // on change le logged à true
          store.dispatch(updateUserStore({ ...response.data.data.insertUser, logged: true }));
          // on redirige vers la page profil
          store.dispatch(push('/utilisateur/profil'));
        })
        .catch((error) => {
          // en cas d'erreur remontée de l'api, renvoi d'un msg erreur
          store.dispatch(appErrorUpdate(error));
        })
        .finally(() => {
          // on clean le store app
          store.dispatch(appErrorClean());
          store.dispatch(appSignUpClean());
          store.dispatch(appLoadingOff());
        });
    }

      return;

    default:
      next(action);
      break;
  }
};

export default userMiddleware;
