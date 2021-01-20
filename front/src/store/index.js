import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import emptyMiddleware from 'src/middlewares/empty';
// rootReducer = résultat de combineReducers
import rootReducer from 'src/store/reducers';

// on crée le store
const store = createStore(
  rootReducer,
  composeWithDevTools( // devtools
    // branchement de middleware
    applyMiddleware(emptyMiddleware),
  ),
);

// on l'exporte par défaut
export default store;
