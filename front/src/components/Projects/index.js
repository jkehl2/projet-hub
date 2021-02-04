// == Import npm
import React from 'react';

// == IMPORTS CONTAINERS
import List from 'src/containers/List';
import SearchProjects from 'src/containers/SearchProjects';

// == IMPORTS COMPOSANTS
import {
  Container, Header,
} from 'semantic-ui-react';

// == STYLES
import './projects.scss';

// == Composant
const Projects = () => (
  <Container className="projects">
    <Header className="projects--title" as="h1" content="Rechercher" textAlign="center" dividing subheader="Trouver un projet ? C'est ici" />
    {/** Search Bar */}
    <SearchProjects />
    <List />
  </Container>
);

// == Export
export default Projects;
