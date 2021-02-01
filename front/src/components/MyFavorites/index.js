// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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

MyFavorites.propTypes = {
  updateList: PropTypes.func.isRequired,
};
// == Export
export default MyFavorites;
