/* eslint-disable no-case-declarations */
import axios from 'axios';
import configGraphQl, { queryUserCreate } from 'src/graphql/config';
import { USER_CREATE, USER_EDIT, USER_DELETE } from 'src/store/actions';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case USER_CREATE:
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

      break;
    case USER_EDIT:

      break;
    case USER_DELETE:

      break;
    default:
      break;
  }

  next();
};

export default user;
