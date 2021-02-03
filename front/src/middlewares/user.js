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

import connector from 'src/apiConfig/queryWithToken';

// == IMPORT ACTIONS SUR PROFIL UTILISATEUR
import {
  USER_CREATE,
  USER_EDIT,
  USER_EDIT_PASSWORD,
  USER_DELETE,
  USER_SIGNIN,
  USER_SIGNOUT,
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

// MIDDLEWARE USER - Middleware de gestion des connecteurs à la BD Utilisteurs
const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case USER_SIGNIN:
    {
      const { app: { signIn: { email, password } } } = store.getState();
      const data = JSON.stringify({ email, password });
      const config = {
        ...signInConfig,
        data,
      };
      axios(config)
        .then((response) => {
          if (response.data.error) {
            store.dispatch(appErrorUpdate(response.data.error));
          }
          else if (response.data.errors) {
            response.data.errors.forEach((error) => {
              store.dispatch(appErrorUpdate(error));
            });
          }
          else {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            const userdata = {
              ...response.data.user,
              logged: true,
            };
            if (userdata.avatar === null) {
              delete userdata.avatar;
            }
            store.dispatch(updateUserStore(userdata));
            store.dispatch(goBack());
            const { user: { name } } = store.getState();
            store.dispatch(appMsgUpdate(`Bienvenue ${name}.`));
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
        method: 'post',
        url: `${apiUrl}/logout`,
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: false,
        data: JSON.stringify({ refreshToken: localStorage.getItem('refreshToken') }),
      };
      axios(config)
        .then(() => {
          store.dispatch(cleanUserStore());
          store.dispatch(push('/'));
          store.dispatch(appMsgUpdate('Vous êtes déconnecté. A bientôt.'));
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      store.dispatch(appErrorClean());
      store.dispatch(appLoadingOn());
      return;
    }
    case USER_CREATE:
    {
      const {
        app: {
          signUp: {
            email,
            password,
            name,
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
        .then(() => {
          store.dispatch(push('/utilisateur/connexion'));
          store.dispatch(appMsgUpdate('Votre compte a été créé. Merci de vous connecter.'));
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
    case USER_EDIT_PASSWORD:
    {
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
    case USER_EDIT:
    {
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
          const userdata = response.data.data.editUserInfos;
          // Si null dans avatar alors on ne garde pas ce paramètre pour la maj du store
          if (userdata.avatar === null) {
            delete userdata.avatar;
          }
          store.dispatch(updateUserStore(userdata));
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
    case USER_DELETE:
    {
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
