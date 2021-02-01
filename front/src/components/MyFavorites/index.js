// == Import npm
import React from 'react';

// == IMPORTS CONTAINERS
import List from 'src/containers/MyFavoritesList';

// == IMPORTS COMPOSANTS
import {
  Container, Header,
} from 'semantic-ui-react';

// == STYLES
import './myFavorites.scss';

// == Composant
const MyFavorites = () => (
  <Container className="my-favorites">
    <Header as="h1" content="Mes projets" textAlign="center" dividing subheader="Tous mes projet en un seul endroit" />
    <List />
  </Container>
);

// == Export
export default MyFavorites;
