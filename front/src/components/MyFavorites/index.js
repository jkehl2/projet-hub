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
    <Header className="my-favorites--title" as="h1" content="Mes favoris" textAlign="center" dividing subheader="Tous ce que j'aime en un seul endroit" />
    <List />
  </Container>
);

// == Export
export default MyFavorites;
