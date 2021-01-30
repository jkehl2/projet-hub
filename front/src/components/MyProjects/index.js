// == Import npm
import React from 'react';

// == IMPORTS CONTAINERS
import List from 'src/containers/MyProjectsList';
import SearchProjects from 'src/containers/MySearchProjects';

// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';

// == STYLES
import './myProjects.scss';

// == Composant
const MyProjects = () => (
  <Container className="my-projects">
    {/** Search Bar */}
    <SearchProjects />
    <List />
  </Container>
);

// == Export
export default MyProjects;
