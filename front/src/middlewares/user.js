/**
 * @module user-middleware
 * Middleware de gestion des connecteurs à la BD Utilisteurs
 */

/* eslint-disable no-case-declarations */
import axios from 'axios';

// == IMPORT CONFIGURATION & QUERY - GRAPHQL CONNECTEUR AXIOS
import configGraphQl, {
  queryUserCreate, queryUserById, queryUserEdit, queryUserDelete,
} from 'src/graphql/config';

// == IMPORT ACTIONS SUR PROFIL UTILISATEUR
import {
  USER_CREATE, USER_BY_ID, USER_EDIT, USER_DELETE,
} from 'src/store/actions';

// MIDDLEWARE USER - Middleware de gestion des connecteurs à la BD Utilisteurs
const user = (store) => (next) => (action) => {
  switch (action.type) {
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
      next();
      break;
  }
};

export default user;
