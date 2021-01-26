// == Import npm
import React from 'react';

// == IMPORTS CONTAINERS
import List from 'src/containers/List';
import SearchProjects from 'src/containers/SearchProjects';

// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';

// == STYLES
import './projects.scss';

// == Composant
const Projects = () => (
  <Container className="projects">
    {/** Search Bar */}
    <SearchProjects />
    <List />
  </Container>
);

// == Export
export default Projects;
