import axios from 'axios';

const user = (store) => (next) => (action) => {
  switch (action.type) {
    case USER_CREATE:

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
