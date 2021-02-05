import { createBrowserHistory } from 'history';

import throttle from 'lodash.throttle';

import createRootReducer from 'src/store/reducers';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { saveState } from 'src/store/localStorage';

// == IMPORT - PERSONNAL MIDDLEWARE
import appMiddleware from 'src/middlewares/app';
import userMiddleware from 'src/middlewares/user';
import needMiddleware from 'src/middlewares/need';
import projectMiddleware from 'src/middlewares/project';

import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        appMiddleware,
        userMiddleware,
        projectMiddleware,
        needMiddleware,
      ),
    ),
  );

  store.subscribe(throttle(() => {
    saveState({
      user: store.getState().user,
    });
  }, 1000));

  return store;
}
