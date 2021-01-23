/* eslint-disable object-shorthand */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import app from './app';
import user from './user';
import project from './project';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  app,
  user,
  project,
});

export default createRootReducer;
