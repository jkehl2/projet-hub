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
import PasswordEdit from 'src/containers/PasswordEdit';

// == IMPORTS COMPOSANTS
import {
  Container,
  Message,
  Loader,
  Dimmer,
} from 'semantic-ui-react';

import Projects from 'src/components/Projects';
import MyFavorites from 'src/components/MyFavorites';
import MyProjects from 'src/components/MyProjects';
import CreateProject from 'src/components/CreateProject';
import CreateNeeds from 'src/components/CreateProject/CreateNeeds';
import Footer from 'src/components/Footer';
import WhoAreWe from 'src/components/WhoAreWe';
import LegalMentions from 'src/components/LegalMentions';
import ProtectedRoute from './ProtectedRoute';

// == IMPORT STYLES
import './app.scss';

// == Composant
const App = ({
  isError, error, isMessage, message, logged, loading, setError,
}) => (
  <>
    {/* Menu de l'application */}
    <Menu />
    <div className="app">
      <Container>

        {/* Affiche message d'erreur si il y en a */}
        {isError
        && (<Message negative header="Une erreur s'est produite" content={`${error}`} icon="thumbs down outline" size="small" />)}

        {/* Affiche message d'information si il y en a */}
        {isMessage
        && (<Message header="Information" content={`${message}`} icon="idea" size="small" />)}

        <Dimmer active={loading} inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>

        <Switch>
          {/* Sprint 1 - Page d'accueil */}
          <Route exact path="/" component={Home} />

          {/* Sprint 1 - Page de rechercher */}
          <Route exact path="/projets" component={Projects} />

          {/* Sprint 1 - Page d'étail d'un projet */}
          <Route exact path="/projet/:slug" component={Project} />

          {/* Sprint 1 - Page de connexion utlisateur */}
          <ProtectedRoute exact path="/utilisateur/connexion" isAllowed={!logged} component={() => (<SignIn />)} redirectTo="/" />
          {/* Sprint 1 - Page d'enregistrement utlisateur' */}
          <ProtectedRoute exact path="/utilisateur/enregistrement" isAllowed={!logged} component={() => (<SignUp />)} redirectTo="/" />

          {/* Sprint 2 - Mentions légales */}
          <Route exact path="/mentionsLegales" component={LegalMentions} />
          {/* Sprint 2 - Présentation équipe */}
          <Route exact path="/equipe" component={WhoAreWe} />
          {/* Routes ateignable uniquement si utilisateur logged */}
          {/* Sprint 1 - Page de profil */}
          <ProtectedRoute exact path="/utilisateur/profil" isAllowed={logged} component={() => (<Profil />)} />
          {/* Sprint 2 - Pages Création de projet + page création de besoins */}
          <ProtectedRoute exact path="/utilisateur/create" isAllowed={logged} component={() => (<CreateProject />)} />
          <ProtectedRoute exact path="/utilisateur/create/needs" isAllowed={logged} component={() => (<CreateNeeds />)} />
          {/* Sprint 2 - Page mes favoris' */}
          <ProtectedRoute exact path="/utilisateur/favoris" isAllowed={logged} component={() => (<MyFavorites />)} />
          {/* Sprint 2 - Page mes projets' */}
          <ProtectedRoute exact path="/utilisateur/projets" isAllowed={logged} component={() => (<MyProjects />)} />
          {/* Sprint 2 - Page mes projets' */}
          <ProtectedRoute exact path="/utilisateur/motdepasse-edit" isAllowed={logged} component={() => (<PasswordEdit />)} />

          {/* MESSAGE POUR 404 ET REDIRECT VERS Accueil */}
          <Route
            path="*"
            exact
            render={() => {
              setError('404 - NOT FOUND - URL invalide');
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
  setError: PropTypes.func.isRequired,
};

// == Export
export default App;
