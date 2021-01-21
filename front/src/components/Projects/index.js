// == Import npm
import React from 'react';

// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';
import List from 'src/components/Projects/List/';
import Map from 'src/components/Projects/Map';
import Search from 'src/components/Projects/Search';

// == IMPORTS CONTAINERS

// == STYLES
import './projects.scss';

// == Composant
const Projects = () => (
  <Container className="projects">
    <List />
    <Map />
    <Search />
  </Container>
);

// == Export
export default Projects;
