/* eslint-disable import/no-unresolved */
// == IMPORT PACKAGES
import React from 'react';
// == IMPORTS CONTAINERS
import List from 'src/containers/MyProjectsList';

// == IMPORTS COMPONENT
import {
  Container,
  Header,
} from 'semantic-ui-react';

// == STYLES
import './myProjects.scss';

// == COMPONENT
const MyProjects = () => (
  <Container className="my-projects">
    <Header className="my-projects--title" as="h1" content="Mes projets" textAlign="center" dividing subheader="Tous mes projets en un seul endroit" />
    <List />
  </Container>
);

// == Export
export default MyProjects;
