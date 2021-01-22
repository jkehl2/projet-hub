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
import { SEARCH_PROJECT_EXECUTE, geoSuccess } from 'src/store/actions/search';

// == Import GraphQL query template + configuration
import configGraphQl, { queryGetProjectsByGeo } from 'src/graphql/config';

// == Import Geoportal

// == import utils to allow perimeter conversion
import perimetersValue from 'src/utils/perimeters.json';

// MIDDLEWARE SEARCH - Middleware to handle search for a project

const search = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH_PROJECT_EXECUTE: {
      const {
        localite, perimeter, coordinates, archived,
      } = store.getState();

      // get perimeter value in m
      // TO DO
      // get the value from component in m, put it in store
      const scope = perimetersValue.perimeters[perimeter].apiValue;

      console.log('Nouvelle recherche', localite);
      // Get GPS coordinates by location

      /** check out geoportal doc here https://www.npmjs.com/package/geoportal-access-lib */

      /* Gp.Services.geocode({
          apiKey: '...', // replace API key here
          ssl: true,
          location: localite, // the location as submitted by the user
          filterOptions: { // options for type of location as in street adress/city/position of interest (ie Tour Eiffel)/etc.
            type: ['StreetAdress'],
          },
          onSuccess(result) {
            // here the coordinates found
            const { x, y } = result.locations.position; // will contain {"x":49.050991,"y":3.968083}
 */

      // Positionstack API call for geocoding
      const params = {
        access_key: 'dc7156f13f34218aa5540fe1ef67fb52',
        query: localite,
      };

      axios.get('https://api.positionstack.com/v1/forward', { params })
        .then((response) => store.dispatch(geoSuccess(response.data)))
        .catch((error) => console.log(error));

      // Object witholding the values for graphQL query
      const data = JSON.stringify({
        ...queryGetProjectsByGeo,
        variables: { coordinates, scope, archived },
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
