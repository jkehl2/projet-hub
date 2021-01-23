/* eslint-disable no-unused-vars */
/**
 * @module search-middleware
 * Middleware de gestion des recherches de projet
 */

// == import axios
import axios from 'axios';

// == Import connected router
import { push } from 'connected-react-router';

// == Import search project action creator
import {
  SEARCH_PROJECT_EXECUTE, SEARCH_PROJECT_DONE, geoSuccess, searchProjectDone,
} from 'src/store/actions/search';

// == Import GraphQL query template + configuration
import configGraphQl, { queryGetProjectsByGeo } from 'src/graphql/config';

// == import utils to allow perimeter conversion
import perimetersValue from 'src/utils/perimeters.json';

// MIDDLEWARE SEARCH - Middleware to handle search for a project

const search = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH_PROJECT_EXECUTE: {
      // gathering values needed for geocoding
      const {
        searchProject: {
          localite,
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

    case SEARCH_PROJECT_DONE: {
      // gathering updated coordinates from the store to send to localhub API
      const {
        searchProject: {
          perimeter, lat, long, archived,
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
    default:
      next(action);
      break;
  }
};

export default search;
