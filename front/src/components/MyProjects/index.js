/* eslint-disable import/no-unresolved */
// == Import npm
import React from 'react';
// == IMPORTS CONTAINERS
import List from 'src/containers/MyProjectsList';

// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';

// == STYLES
import './myProjects.scss';

// == Composant
const MyProjects = () => (
  <Container className="my-projects">
    <List />
  </Container>
);

// == Export
export default MyProjects;
