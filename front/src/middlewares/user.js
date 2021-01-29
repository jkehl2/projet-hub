/**
 * @module user-middleware
 * Middleware de gestion des connecteurs à la BD Utilisteurs
 */

/* eslint-disable no-case-declarations */
import axios from 'axios';
import { push, goBack } from 'connected-react-router';

// == IMPORT CONFIGURATION & QUERY - GRAPHQL CONNECTEUR AXIOS
import configGraphQl, {
  apiUrl,
  queryUserCreate,
  queryUserEdit,
  queryUserEditPassword,
  queryUserDelete,
  signInConfig,
} from 'src/apiConfig/';

import connector from 'src/apiConfig/connector';

// == IMPORT ACTIONS SUR PROFIL UTILISATEUR
import {
  USER_CREATE,
  USER_EDIT,
  USER_EDIT_PASSWORD,
  USER_DELETE,
  USER_SIGNIN,
  updateUserStore,
  cleanUserStore,
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
  appProfilClean,
} from 'src/store/actions/app';

axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

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
            localStorage.setItem('token', response.data.token);
            // Sinon on récupère les infos utlisateur
            const userdata = {
              ...response.data.user,
              logged: true,
            };
            // Si null dans avatar alors on ne garde pas ce paramètre pour la maj du store
            if (userdata.avatar === null) {
              delete userdata.avatar;
            }
            store.dispatch(updateUserStore(userdata));
            // On redirecte vers la page précédente
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
    case USER_CREATE: {
      // 1 recup payload
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
      return;
    }

    case USER_EDIT_PASSWORD: {
      const { app: { profil: { password } } } = store.getState();
      const data = JSON.stringify({
        ...queryUserEditPassword,
        variables: { password },
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'editUserPassword', store.dispatch)
        .then(() => {
          store.dispatch(push('/utilisateur/profil'));
          store.dispatch(appMsgUpdate('Votre mot de passe utlisateur a été modifié avec succès.'));
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      store.dispatch(appProfilClean());
      store.dispatch(appMsgClean());
      store.dispatch(appErrorClean());
      store.dispatch(appLoadingOn());
      return;
    }
    case USER_EDIT: {
      const { app: { profil: { name, email } } } = store.getState();
      const data = JSON.stringify({
        ...queryUserEdit,
        variables: { name, email },
      });

      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'editUserInfos', store.dispatch)
        .then((response) => {
          store.dispatch(appMsgUpdate('Votre profil utilisateur à été mis à jour.'));
          store.dispatch(updateUserStore(response.data.data.editUserInfos));
          store.dispatch(appEditProfilOff());
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });

      store.dispatch(appMsgClean());
      store.dispatch(appErrorClean());
      store.dispatch(appLoadingOn());
      return;
    }
    case USER_DELETE: {
      const data = JSON.stringify({
        ...queryUserDelete,
      });
      const config = {
        ...configGraphQl,
        data,
      };
      connector(config, 'deleteUser', store.dispatch)
        .then(() => {
          store.dispatch(cleanUserStore());
          store.dispatch(push('/'));
          store.dispatch(appMsgUpdate('Nous sommes désolés de vous voir partir, à bientôt ! '));
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      store.dispatch(appLoadingOn());
      store.dispatch(appMsgClean());
      store.dispatch(appErrorClean());
      return;
    }

    default:
      next(action);
      break;
  }
};

export default userMiddleware;
