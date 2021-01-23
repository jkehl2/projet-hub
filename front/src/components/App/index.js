// == Import npm
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS
import SignIn from 'src/containers/SignIn';
import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';

// == IMPORTS COMPOSANTS
import {
  Container,
  Message,
} from 'semantic-ui-react';
import Profil from 'src/components/Profil';
import Project from 'src/components/Project';
import SignUp from 'src/components/SignUp';
import Projects from 'src/components/Projects';
import Confirmation from 'src/components/Confirmation';

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
        <Projects projects={
        [{
          id: '1',
          title: 'Mon barbecue Infernal',
          author: 'Lucifer Morning Star',
          authorEmail: 'lucifer@morning.str',
          expireDate: '2100/10/12',
          createDate: '0000/01/01',
          adress: '666, Hell Street, Nowhere Land',
          isAuthor: true,
          isFavorite: false,
          isArchived: false,
        }, {
          id: '2',
          title: 'Rester au chaud',
          author: 'Lucide Morning Star',
          authorEmail: 'lucifer@morning.str',
          expireDate: '2100/10/12',
          createDate: '0000/01/01',
          adress: '666, Hell Street, Nowhere Land',
          isAuthor: false,
          isFavorite: true,
          isArchived: true,
        }, {
          id: '3',
          title: 'Ma machine à glaçons',
          author: 'White Morning Star',
          authorEmail: 'lucifer@morning.str',
          expireDate: '2100/10/12',
          createDate: '0000/01/01',
          adress: '666, Hell Street, Nowhere Land',
          isAuthor: false,
          isFavorite: false,
          isArchived: false,
        }]
      }
        />
      </Route>
      {/* Sprint 1 - Page d'étail d'un projet */}
      <Route exact path="/projet/:slug">

        <Project isAuthor={false} isArchived={false} isFavorite={false} isEditMode={false} />
      </Route>
      {/* Sprint 1 - Page de connexion utlisateur */}
      <Route exact path="/utilisateur/connexion">

        <SignIn />
      </Route>
      {/* Routes ateignable uniquement si utilisateur logged */}
      {logged && (
      <>
        {/* Sprint 1 - Page de confirmation par mot de passe */}
        <Route exact path="/utilisateur/confirm">
          <Confirmation />
        </Route>
        {/* Sprint 1 - Page de profil */}
        <Route exact path="/utilisateur/profil">
          <Profil />
        </Route>
        {/* Sprint 1 - Page d'enregistrement utlisateur' */}
        <Route exact path="/utilisateur/enregistrement">
          <SignUp />
        </Route>
        {/* Sprint 2 - Page Création de projet' */}
        <Route exact path="/projet/create" />
        {/* Sprint 2 - Page mes favoris' */}
        <Route exact path="/utilisateur/favoris" />
        {/* Sprint 2 - Page mes projets' */}
        <Route exact path="/utilisateur/projets"> </Route>
      </>
      )}
      {/* Sprint 2 - Mentions légales */}
      <Route exact path="/mentionsLegales"> </Route>
      {/* Sprint 2 - Présentation équipe */}
      <Route exact path="/equipe"> </Route>
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
