// == Import : npm
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import store from 'src/store';

// == Import : local
// Composants
import App from 'src/components/App';

const rootReactElement = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
