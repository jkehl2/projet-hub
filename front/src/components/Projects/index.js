// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';
import List from 'src/components/Projects/List';
import Map from 'src/components/Projects/Map';
import Search from 'src/components/Projects/Search';

// == IMPORTS CONTAINERS

// == STYLES
import './projects.scss';

// == Composant
const Projects = ({
  isArchived, isAuthor, isFavorite,
}) => (
  <Container className="projects">
    <List isAuthor={isAuthor} isArchived={isArchived} isFavorite={isFavorite} />
    <Map />
    <Search />
  </Container>
);
// == PROP TYPES
Projects.propTypes = {
  isAuthor: PropTypes.bool.isRequired,
  isArchived: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};
// == Export
export default Projects;
