// == Import npm
import React, { useEffect } from 'react';

// == IMPORTS CONTAINERS
import List from 'src/containers/MyFavorites';

// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';

// == STYLES
import './myFavorites.scss';

// == Composant
const MyFavorites = ({ updateList }) => {
  useEffect(() => {
    updateList();
  }, []);
  return (
    <Container className="my-favorites">
      <List />
    </Container>
  );
};

// == Export
export default MyFavorites;
