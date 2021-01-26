// == Import : npm
import React from 'react';
import App from 'src/containers/App';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from 'src/store';

import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();

const rootReactElement = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

const target = document.getElementById('root');
render(rootReactElement, target);
