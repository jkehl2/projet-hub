// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import Home from 'src/components/Home';
// == IMPORTS CONTAINERS

// == STYLES
import './app.scss';

// == Composant
const App = ({}) => (
  <div className="app">
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="projets">

    </Route>
    <Route exact path="/projets/:slug">

    </Route>
    <Route exact path="/utilisateur/confirm">

    </Route>
    <Route exact path="/utilisateur/profil">

    </Route>
    <Route exact path="/utilisateur/connexion">

    </Route>
    <Route exact path="/utilisateur/enregistrement">

    </Route>
    <Route exact path="/mentionsLegales">

    </Route>
    <Route exact path="/equipe">

    </Route>
    <Route exact path="/projet/create">

    </Route>
    <Route exact path="/utilisateur/favoris">

    </Route>
    <Route exact path="/utilisateur/projets">

    </Route>
  </div>
);

App.propTypes = {
};

// == Export
export default App;
