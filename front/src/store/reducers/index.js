/* eslint-disable object-shorthand */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user';
import project from './project';
import searchProject from './search';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user,
  project,
  searchProject,
});

export default createRootReducer;
