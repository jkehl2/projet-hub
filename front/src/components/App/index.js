// == Import npm
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS
import SignIn from 'src/containers/SignIn';
import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Profil from 'src/containers/Profil';
import Project from 'src/containers/Project';
import SignUp from 'src/containers/SignUp';

// == IMPORTS COMPOSANTS
import {
  Container,
  Message,
  Loader,
  Dimmer,
} from 'semantic-ui-react';

import Projects from 'src/components/Projects';
import Confirmation from 'src/components/Confirmation';
import CreateProject from 'src/components/CreateProject';
import Footer from 'src/components/Footer';
import WhoAreWe from 'src/components/WhoAreWe';
import ProtectedRoute from './ProtectedRoute';

// == IMPORT STYLES
import './app.scss';

// == Composant
const App = ({
  isError, error, isMessage, message, logged, loading, setMessage,
}) => (
  <>
    {/* Menu de l'application */}
    <Menu />
    <div className="app">
      <Container>

        {/* Affiche message d'erreur si il y en a */}
        {isError && (
        <Message negative>
          <Message.Header>Une erreur s'est produite</Message.Header>
          <p>{`${error}`}</p>
        </Message>
        )}
        {/* Affiche message d'information si il y en a */}
        {isMessage && (
        <Message>
          <Message.Header>Notification</Message.Header>
          <p>{`${message}`}</p>
        </Message>
        )}
        <Dimmer active={loading} inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
        <Switch>
          {/* Sprint 1 - Page d'accueil */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* Sprint 1 - Page de rechercher */}
          <Route exact path="/projets">
            {/* Sprint 1 */}
            <Projects />
          </Route>
          {/* Sprint 1 - Page d'étail d'un projet */}
          <Route exact path="/projet/:slug">
            <Project />
          </Route>
          {/* Sprint 1 - Page de connexion utlisateur */}
          <Route exact path="/utilisateur/connexion">
            <SignIn />
          </Route>
          {/* Sprint 1 - Page d'enregistrement utlisateur' */}
          <Route exact path="/utilisateur/enregistrement">
            <SignUp />
          </Route>
          {/* Sprint 2 - Mentions légales */}
          <Route exact path="/mentionsLegales"> </Route>
          {/* Sprint 2 - Présentation équipe */}
          <Route exact path="/equipe">
            <WhoAreWe />
          </Route>

          {/* Routes ateignable uniquement si utilisateur logged */}
          {/* Sprint 1 - Page de confirmation par mot de passe */}
          <ProtectedRoute exact path="/utilisateur/confirm" isAllowed={logged} component={() => (<Confirmation />)} />
          {/* Sprint 1 - Page de profil */}
          <ProtectedRoute exact path="/utilisateur/profil" isAllowed={logged} component={() => (<Profil />)} />

          {/* Sprint 2 - Page Création de projet' */}
          <ProtectedRoute exact path="/utilisateur/create" isAllowed={logged} component={() => (<CreateProject />)} />
          {/* Sprint 2 - Page mes favoris' */}
          <ProtectedRoute exact path="/utilisateur/favoris" isAllowed={logged} component={() => (<Projects />)} />
          {/* Sprint 2 - Page mes projets' */}
          <ProtectedRoute exact path="/utilisateur/projets" isAllowed={logged} component={() => (<Projects />)} />

          {/* MESSAGE POUR 404 ET REDIRECT VERS Accueil */}
          <Route
            path="*"
            exact
            render={() => {
              setMessage('404 - NOT FOUND - URL invalide');
              return (<Redirect to="/" />);
            }}
          />
        </Switch>
      </Container>
    </div>
    <Footer />
  </>
);

App.propTypes = {
  isError: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  isMessage: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  setMessage: PropTypes.func.isRequired,
};

// == Export
export default App;
