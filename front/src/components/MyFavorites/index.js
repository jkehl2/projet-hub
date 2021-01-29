// == Import npm
import React from 'react';

// == IMPORTS CONTAINERS
import List from 'src/containers/MyFavoritesList';
import SearchProjects from 'src/containers/MySearchFavorites';

// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';

// == STYLES
import './MyFavorites.scss';

// == Composant
const MyFavorites = () => (
  <Container className="my-favorites">
    {/** Search Bar */}
    <SearchProjects />
    <List />
  </Container>
);

// == Export
export default MyFavorites;
