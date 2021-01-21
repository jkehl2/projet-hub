// call to API
import axios from 'axios';

// actions from store
import { CREATE_PROJECT } from 'src/store/actions';

const projectMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      break;
  }
  next();
};

export default projectMiddleware;
