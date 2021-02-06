/* eslint-disable import/no-unresolved */
// == IMPORT PACKAGES
import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

// == IMPORTS CONTAINERS
import ProjectMenu from 'src/containers/ProjectMenu';
import SignIn from 'src/containers/SignIn';
import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Profil from 'src/containers/Profil';
import Project from 'src/containers/Project';
import SignUp from 'src/containers/SignUp';
import PasswordEdit from 'src/containers/PasswordEdit';
import CreateProject from 'src/containers/CreateProject';

// == IMPORTS COMPONENTS
import {
  Container,
  Message,
  Loader,
  Dimmer,
} from 'semantic-ui-react';

import Projects from 'src/components/Projects';
import MyProjects from 'src/components/MyProjects';
import MyFavorites from 'src/components/MyFavorites';
import Footer from 'src/components/Footer';
import WhoAreWe from 'src/components/WhoAreWe';
import LegalMentions from 'src/components/LegalMentions';
import ProtectedRoute from './ProtectedRoute';

// == IMPORT STYLES
import './app.scss';

// == COMPONENT
const App = ({
  isError, error, isMessage, message, logged, loading, setError,
}) => (
  <>
    {/* MENU */}
    <Menu />

    {/* DETAIL PROJECT PAGE */}
    {/* PROJECT MENU - MODIFY / DELETE / ARCHIVE */}
    <Container className="app--menu-container">
      <Route exact path="/projet/:slug" component={ProjectMenu} />
    </Container>
    <Container className="app">
      {/* SHOW ERROR IF ANY */}
      {isError
        && (<Message negative header="Une erreur s'est produite" content={`${error}`} icon="thumbs down outline" size="small" />)}

      {/* SHOW INFO IF ANY */}
      {isMessage
        && (<Message header="Information" content={`${message}`} icon="idea" size="small" />)}

      <Dimmer active={loading} inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>

      <Switch>
        {/* HOME PAGE */}
        <Route exact path="/" component={Home} />

        {/* SEARCH PAGE */}
        <Route exact path="/projets" component={Projects} />

        {/* DETAIL PROJECT PAGE */}
        <Route exact path="/projet/:slug" component={Project} />

        {/* USER CONNEXION */}
        <ProtectedRoute exact path="/utilisateur/connexion" isAllowed={!logged} component={SignIn} redirectTo="/" />
        {/* USER SUSCRIBE' */}
        <ProtectedRoute exact path="/utilisateur/enregistrement" isAllowed={!logged} component={SignUp} redirectTo="/" />

        {/* LEGAL MENTIONS PAGE */}
        <Route exact path="/mentionsLegales" component={LegalMentions} />
        {/* TEAM PAGE */}
        <Route exact path="/equipe" component={WhoAreWe} />
        {/* ROUTES REACHABLE ONLY IF LOGGED */}
        {/* PROFILE PAGE */}
        <ProtectedRoute exact path="/utilisateur/profil" isAllowed={logged} component={Profil} />
        {/* PROJECT CREATION PAGE */}
        <ProtectedRoute exact path="/utilisateur/create" isAllowed={logged} component={CreateProject} />
        {/* FAVORITES PAGE */}
        <ProtectedRoute exact path="/utilisateur/favoris" isAllowed={logged} component={MyFavorites} />
        {/* MY PROJECTS PAGE */}
        <ProtectedRoute exact path="/utilisateur/projets" isAllowed={logged} component={MyProjects} />
        {/* EDIT PASSWORD */}
        <ProtectedRoute exact path="/utilisateur/motdepasse-edit" isAllowed={logged} component={PasswordEdit} />

        {/* 404 & REDIRECT TOWARDS HOMEPAGE */}
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
