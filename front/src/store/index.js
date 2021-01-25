import { createBrowserHistory } from 'history';

import createRootReducer from 'src/store/reducers';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import userMiddleware from 'src/middlewares/user';
import projectMiddleware from 'src/middlewares/project';
import searchMiddleware from 'src/middlewares/search';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

// on crée le store et on l'export as default
export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        userMiddleware,
        projectMiddleware,
        searchMiddleware,
      ),
    ),
  );
  return store;
}
