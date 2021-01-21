// call to API
import axios from 'axios';

// actions from store
import {} from 'src/store/actions';

const projectMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case UPLOAD_PROJECT
  }
  next();
};

export default projectMiddleware;
