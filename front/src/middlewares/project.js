// call to API
import axios from 'axios';

// actions from store
import { CREATE_PROJECT, EDIT_PROJECT, DELETE_PROJECT } from 'src/store/actions';

// graphql queries
import configGraphQl, { queryUserCreate } from 'src/graphql/config';

// mw
const projectMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      const {
        title, description, expiration_date, location, lat, long, author,
      } = action.payload;

      const data = JSON.stringify({
        ...queryUserCreate,
        variables: { name, email, password },
      });

      const config = {
        ...configGraphQl,
        data,
      };
      break;

    case EDIT_PROJECT:
      break;

    case DELETE_PROJECT:
      break;

    default:
      break;
  }
  next();
};

export default projectMiddleware;
