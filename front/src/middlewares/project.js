/* eslint-disable no-unused-vars */
// == IMPORT NPM
import axios from 'axios';
import { push } from 'connected-react-router';

// actions from store
import {
  PROJECT_CREATE, PROJECT_EDIT, PROJECT_DELETE, GET_PROJECT_BY_ID,
} from 'src/store/actions/project';

import {
  APP_SEARCH_EXEC, APP_SEARCH_PROJECT_DONE, APP_SEARCH_PROJECT_COORDINATES,
  geoSuccess, searchProjectDone,
} from 'src/store/actions/app';
// graphql queries
import configGraphQl, {
  queryCreateProject, queryEditProject, queryProjectById, queryDeleteProject, queryGetProjectsByGeo,
} from 'src/graphql/config';

// == import utils to allow perimeter conversion
import perimetersValue from 'src/utils/perimeters.json';

// mw
const projectMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case APP_SEARCH_EXEC: {
      // gathering values needed for geocoding
      const {
        app: {
          search: {
            localite,
          },
        },
      } = store.getState();

      console.log('Nouvelle recherche', localite);
      // Get GPS coordinates by location

      // Positionstack API call for geocoding
      const params = {
        access_key: 'dc7156f13f34218aa5540fe1ef67fb52',
        query: localite,
      };

      axios.get('http://api.positionstack.com/v1/forward', { params })
        .then((response) => store.dispatch(geoSuccess(response.data.data[0].longitude, response.data.data[0].latitude)))
        .catch((error) => console.log(error))
        .finally(() => store.dispatch(searchProjectDone()));

      break;
    }

    case APP_SEARCH_PROJECT_DONE: {
      // gathering updated coordinates from the store to send to localhub API
      const {
        app: {
          search: {
            perimeter, lat, long, archived,
          },
        },
      } = store.getState();
        // get perimeter value in m

      const scope = parseInt(perimetersValue.perimeters[perimeter].apiValue, 10);

      console.log(lat, long);

      // Object witholding the values for graphQL query
      const data = JSON.stringify({
        ...queryGetProjectsByGeo,
        variables: {
          lat, long, scope, archived,
        },
      });

      // building request for back-end
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

      // redirect
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
