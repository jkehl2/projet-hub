/**
 * @module user-middleware
 * Middleware de gestion des connecteurs à la BD Utilisteurs
 */

/* eslint-disable no-case-declarations */
import axios from 'axios';
import { push } from 'connected-react-router';

// == IMPORT CONFIGURATION & QUERY - GRAPHQL CONNECTEUR AXIOS
import configGraphQl, {
  queryUserCreate, queryUserById, queryUserEdit, queryUserDelete,
} from 'src/graphql/config';

// == IMPORT ACTIONS SUR PROFIL UTILISATEUR
import {
  USER_CREATE, USER_BY_ID, USER_EDIT, USER_DELETE, USER_SIGNIN, cleanSignIn, updateUserStore,
} from 'src/store/actions/user';

// == IMPORT ACTIONS SUR PARAMETRES APPLICATIF TECHNIQUE
import {
  appLoadingOn, appLoadingOff, appError, appMsg, appCleanMsgError,
} from 'src/store/actions/app';

// MIDDLEWARE USER - Middleware de gestion des connecteurs à la BD Utilisteurs
const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case USER_SIGNIN: {
      const { user } = store.getState();
      const data = JSON.stringify({ email: user.signInEmail, password: user.signInPassword });
      const config = {
        method: 'post',
        url: 'http://localhost:3000/login',
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      };

      axios(config)
        .then((response) => {
          // En cas de retour négatif à la demande de signin
          // On affiche le message server à l'utlisateur
          if (response.data.error) {
            store.dispatch(appMsg(response.data.error));
          }
          else {
            // Sinon on récupère les infos utlisateur
            const userdata = {
              ...response.data,
              logged: true,
            };
            store.dispatch(updateUserStore(userdata));
            // On redirecte vers la page d'accueil
            store.dispatch(push('/'));
          }
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(appError(error.message));
        })
        .finally(() => {
          store.dispatch(appLoadingOff());
        });
      store.dispatch(cleanSignIn());
      store.dispatch(appLoadingOn());
      store.dispatch(appCleanMsgError());
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
      const { id, name, email } = action.payload;
      const data = JSON.stringify({
        ...queryUserEdit,
        variables: { id, name, email },
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
      return; }
    case USER_DELETE: {
      const { id } = action.payload;
      const data = JSON.stringify({
        ...queryUserDelete,
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
      return; }
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
