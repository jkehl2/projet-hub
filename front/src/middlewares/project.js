// call to API
import axios from 'axios';

// actions from store
import { CREATE_PROJECT, EDIT_PROJECT, DELETE_PROJECT, GET_PROJECT_BY_ID } from 'src/store/actions';

// graphql queries
import configGraphQl, {/**here put graphql requests */queryProjectbyId } from 'src/graphql/config';

// mw
const projectMiddleware = (store) => (next) => (action) => {
  switch (action.type) {

    // CREATION
    case CREATE_PROJECT: {
      const {
        title, description, expiration_date, location, lat, long, author,
      } = action.payload;

      const data = JSON.stringify({
        .../**requete graphql pour projectcreate */,
        variables: {  title, description, expiration_date, location, lat, long, author },
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
    //EDITING
    case EDIT_PROJECT:{
      const {id, title, description, expiration_date, location, lat, long, author} = action.payload;
      const data = JSON.stringify({
        .../**requete graphql pour projectcreate */,
        variables: { id, title, description, expiration_date, location, lat, long, author },
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
    //DELETING
    case DELETE_PROJECT: {
      return;
    }
      //GET BY ID
    case GET_PROJECT_BY_ID: {
      const { id } = action.payload;
      const data = JSON.stringify({
        ...queryProjectbyId,
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
      next();
      break;
  }
  next();
};

export default projectMiddleware;
