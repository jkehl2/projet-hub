/**
 * @module user-middleware
 * Middleware de gestion des connecteurs à la BD Utilisteurs
 */

import axios from 'axios';
import FormData from 'form-data';

import { push, goBack } from 'connected-react-router';

// == IMPORT CONFIGURATION & QUERY - GRAPHQL CONNECTOR AXIOS
import configGraphQl, {
  apiUrl,
  queryUserCreate,
  queryUserEdit,
  queryUserEditPassword,
  queryUserDelete,
  signInConfig,
  uploadAvatarConfig,
} from 'src/apiConfig/';

import connector from 'src/apiConfig/queryWithToken';

// == IMPORT ACTIONS ON USER
import {
  USER_CREATE,
  USER_EDIT,
  USER_EDIT_PASSWORD,
  USER_DELETE,
  USER_SIGNIN,
  USER_SIGNOUT,
  USER_UPLOAD_AVATAR,
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
  appUpdateProfil,
} from 'src/store/actions/app';

// MIDDLEWARE USER
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
            const apiAvatar = response.data.user.avatar;
            const avatar = apiAvatar === null || apiAvatar === '' ? 'https://react.semantic-ui.com/images/avatar/large/matt.jpg' : `${apiUrl}${apiAvatar}`;
            const userdata = {
              ...response.data.user,
              avatar,
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
    case USER_UPLOAD_AVATAR: {
      const data = new FormData();
      data.append('avatar', action.fileSrc);
      const config = {
        ...uploadAvatarConfig,
        data,
      };
      connector(config, 'data', store.dispatch)
        .then((response) => {
          const { data: { data: { path } } } = response;
          const avatar = `${apiUrl}${path}`;
          store.dispatch(updateUserStore({ avatar }));
          store.dispatch(appUpdateProfil({ avatar }));
          store.dispatch(appMsgUpdate('Upload de l\'avatar terminé.'));
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
        .then((response) => {
          if (response.data.data.insertUser.error) {
            store.dispatch(appErrorUpdate(response.data.data.insertUser.error.msg));
          }
          else {
            store.dispatch(push('/utilisateur/connexion'));
            store.dispatch(appMsgUpdate('Votre compte a été créé. Merci de vous connecter.'));
          }
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error));
        })
        .finally(() => {
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
