/* eslint-disable no-unused-vars */
// == IMPORT NPM
import axios from 'axios';
import { push } from 'connected-react-router';

// actions from store
import {
  PROJECT_SEARCH, PROJECT_CREATE, PROJECT_EDIT, PROJECT_DELETE, GET_PROJECT_BY_ID,
} from 'src/store/actions/project';

// graphql queries
import configGraphQl, {
  queryCreateProject, queryEditProject, queryProjectById, queryDeleteProject,
} from 'src/graphql/config';

// mw
const projectMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case PROJECT_SEARCH: {
      const { app } = store.getState();
      console.log('Nouvelle recherche', app.search);
      // TODO Récupéré les coordonnées GPS depuis la localité
      // installer package npm geoportal-access-lib
      // import = Gp
      // installer dépendances xmldom + request

      /** Gp.Services.geocode({
      apiKey : "...",
      ssl : true,
      location : "...",
      onSuccess : function (result) {
      ...
      }
      }); */
      // TODO Formater un objet contenant les attributs de la requête GRaphQL

      store.dispatch(push('/projets'));
      return;
    }
    // CREATION
    case PROJECT_CREATE: {
      const {
        title, description, expirationDate, location, lat, long, author,
      } = action.payload;

      const data = JSON.stringify({
        ...queryCreateProject,
        variables: {
          title, description, expirationDate, location, lat, long, author,
        },
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
    // EDITING
    case PROJECT_EDIT: {
      const {
        id, title, description, expirationDate, location, lat, long, author,
      } = action.payload;
      const data = JSON.stringify({
        ...queryEditProject,
        variables: {
          id, title, description, expirationDate, location, lat, long, author,
        },
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
    // DELETING
    case PROJECT_DELETE: {
      const { id } = action.payload;
      const data = JSON.stringify({
        ...queryDeleteProject,
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
    // GET BY ID == OK
    case GET_PROJECT_BY_ID: {
      const { id } = action.payload;
      const data = JSON.stringify({
        ...queryProjectById,
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
    default:
      next(action);
      break;
  }
};

export default projectMiddleware;
