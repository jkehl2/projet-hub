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
      const { name, email, password } = action.payload;
      const data = JSON.stringify({
        ...queryUserCreate,
        variables: { name, email, password },
      });

      const config = {
        ...configGraphQl,
        data,
      };

      console.log('loader on');
      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log('loader off');
        });

      return;
    }
    case USER_BY_ID: {
      const { id } = action.payload;
      const data = JSON.stringify({
        ...queryUserById,
        variables: { id },
      });

      const config = {
        ...configGraphQl,
        data,
      };

      console.log('loader on');
      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log('loader off');
        });
      return;
    }
    case USER_EDIT: {
      const { app: { profil } } = store.getState();
      const variables = {
        name: profil.name,
        email: profil.name,
      };
      const data = JSON.stringify({
        ...queryUserEdit,
        ...variables,
      });

      const config = {
        ...configGraphQl,
        data,
      };

      axios(config)
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

    case CONFIRM_DELETE_SUBMIT: {
      // 1 recup payload
      const {
        user: {
          confirmation,
        },
      } = store.getState();
      console.log(confirmation);

      // 2 verif si le payload corres à nos attentes
      if (confirmation === 'CONFIRMER') {
        // 3 si corrs dispatch other action
        store.dispatch(deleteUser());
        store.dispatch(appMsgUpdate('Vous avez confirmé la suppression de votre profil.'));
        store.dispatch(appLoadingOn());
      }
      else {
        // 4 si corres neg error message
        // store.dispatch(appMsgUpdate('Veuillez saisir de nouveau'));
      }

      return;
    }
    case USER_DELETE: {
      const {
        user: {
          id,
        },
      } = store.getState();

      const data = JSON.stringify({
        ...queryUserDelete,
        variables: { id },
      });

      const config = {
        ...configGraphQl,
        data,
      };

      axios(config)
        .then((response) => {
          store.dispatch(appMsgUpdate('Nous sommes désolés de vous voir partir, à bientôt ! '));
          store.dispatch(cleanUserStore());
        })
        .catch((error) => {
          store.dispatch(appErrorUpdate(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });

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
