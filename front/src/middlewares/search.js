/* eslint-disable no-unused-vars */
/**
 * @module search-middleware
 * Middleware de gestion des recherches de projet
 */

import { push } from 'connected-react-router';
// == IMPORT ACTIONS SUR RECHERCHE DE PROJETS
import { SEARCH_PROJECT_EXECUTE } from 'src/store/actions/search';

// MIDDLEWARE SEARCH - Middleware de gestion de gestion des recherches de projet
const search = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH_PROJECT_EXECUTE: {
      const { searchProject } = store.getState();
      console.log('Nouvelle recherche', searchProject);
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
    default:
      next(action);
      break;
  }
};

export default search;
