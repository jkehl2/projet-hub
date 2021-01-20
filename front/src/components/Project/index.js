// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Container, Header,
} from 'semantic-ui-react';
import Description from './Description';
import Needs from './Needs';
import Comments from './Comments';
// == IMPORTS CONTAINERS

// == STYLES
import './project.scss';

// == Composant
const Project = ({ isFavorite }) => (
  <Container className="project">
    {/* Titre page */}
    <Header as="h1">Les détails du projet</Header>
    {/* Description du projet */}
    <Description isFavorite={false} />
    {/* Liste des besoins du projet */}
    <Needs />
    {/* Liste des commentaires du projet */}
    <Comments />
  </Container>
);
// == PROP TYPES
Project.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
};

// == Export
export default Project;
