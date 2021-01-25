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

// == IMPORTS COMPOSANTS
import {
  Container,
  Message,
} from 'semantic-ui-react';
import SignUp from 'src/components/SignUp';
import Projects from 'src/components/Projects';
import Confirmation from 'src/components/Confirmation';
import CreateProject from 'src/components/CreateProject';
import LegalMentions from 'src/components/LegalMentions';
import WhoAreWe from 'src/components/WhoAreWe';
import Footer from 'src/components/Footer';
import ProtectedRoute from './ProtectedRoute';

// == IMPORT STYLES
import './app.scss';

// == Composant
const App = ({
  isError, error, isMessage, message, logged, setMessage,
}) => (
  <Container className="app">
    {/* Menu de l'application */}
    <Menu />
    {/* Affiche message d'erreur si il y en a */}
    {isError && (
      <Message negative>
        <Message.Header>Une erreur c'est produite</Message.Header>
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
        <Project isAuthor={false} isArchived={false} isFavorite={false} isEditMode={false} />
      </Route>
      {/* Sprint 1 - Page de connexion utlisateur */}
      <Route exact path="/utilisateur/connexion">

        <SignIn />
      </Route>

      {/* Sprint 2 - Mentions légales */}
      <Route exact path="/mentionsLegales">
        <LegalMentions />
      </Route>
      {/* Sprint 2 - Présentation équipe */}
      <Route exact path="/equipe">
        <WhoAreWe />
      </Route>
      {/* Routes ateignable uniquement si utilisateur logged */}
      {/* Sprint 1 - Page de confirmation par mot de passe */}
      <ProtectedRoute exact path="/utilisateur/confirm" isAllowed={logged} component={() => (<Confirmation />)} />
      {/* Sprint 1 - Page de profil */}
      <ProtectedRoute exact path="/utilisateur/profil" isAllowed={logged} component={() => (<Profil />)} />
      {/* Sprint 1 - Page d'enregistrement utlisateur' */}
      <ProtectedRoute exact path="/utilisateur/enregistrement" isAllowed={logged} component={() => (<SignUp />)} />
      {/* Sprint 2 - Page Création de projet' */}
      <ProtectedRoute exact path="/projet/create" isAllowed={logged} component={() => (<CreateProject />)} />
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
    {/* Footer */}
    <Footer />
  </Container>
);

App.propTypes = {
  isError: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  isMessage: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  logged: PropTypes.bool.isRequired,
  setMessage: PropTypes.func.isRequired,
};

// == Export
export default App;
