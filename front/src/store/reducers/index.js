/* eslint-disable object-shorthand */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user';
import project from './project';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user,
  project,
});

export default createRootReducer;
