// == Import npm
import React from 'react';
import { Route } from 'react-router-dom';

// == IMPORTS COMPOSANTS
import Home from 'src/components/Home';
import Profil from 'src/components/Profil';
import Project from 'src/components/Project';
import SignUp from 'src/components/SignUp';
import Projects from 'src/components/Projects';
import Confirmation from 'src/components/Confirmation';
// == IMPORTS CONTAINERS

import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Route exact path="/">
      {/* Sprint 1 */}
      <Home />
    </Route>
    <Route exact path="/projets">
      {/* Sprint 1 */}
      <Projects />
    </Route>
    <Route exact path="/projet/:slug">
      {/* Sprint 1 */}
      <Project isAuthor={false} isArchived={false} isFavorite={false} isEditMode={false} />
    </Route>
    <Route exact path="/utilisateur/confirm">
      {/* Sprint 1 */}
      <Confirmation />
    </Route>
    <Route exact path="/utilisateur/profil">
      {/* Sprint 1 */}
      <Profil />
    </Route>
    <Route exact path="/utilisateur/connexion">
      {/* Sprint 1 */}
    </Route>
    <Route exact path="/utilisateur/enregistrement">
      {/* Sprint 1 */}
      <SignUp />
    </Route>
    <Route exact path="/mentionsLegales">
      {/* Sprint 2 */}
    </Route>
    <Route exact path="/equipe">
      {/* Sprint 2 */}
    </Route>
    <Route exact path="/projet/create">
      {/* Sprint 2 */}
    </Route>
    <Route exact path="/utilisateur/favoris">
      {/* Sprint 2 */}
    </Route>
    <Route exact path="/utilisateur/projets">
      {/* Sprint 2 */}
    </Route>
  </div>
);

// == Export
export default App;
