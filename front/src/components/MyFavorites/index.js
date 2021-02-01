// == Import npm
import React from 'react';

// == IMPORTS CONTAINERS
import List from 'src/containers/MyFavoritesList';

// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';

// == STYLES
import './myFavorites.scss';

// == Composant
const MyFavorites = () => (
  <Container className="my-favorites">
    <List />
  </Container>
);

// == Export
export default MyFavorites;
