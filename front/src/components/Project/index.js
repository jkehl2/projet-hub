// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';
import ProjectView from './ProjectView';
import ProjectEdit from './ProjectEdit';
// == IMPORTS CONTAINERS

// == STYLES
import './project.scss';

// == Composant
const Project = ({
  isAuthor, isEditMode, isArchived, isFavorite,
}) => (
  <Container className="project">
    {isEditMode ? <ProjectEdit /> 
    : <ProjectView isAuthor={isAuthor} isArchived={isArchived} isFavorite={isFavorite} />}
  </Container>
);
// == PROP TYPES
Project.propTypes = {
  isAuthor: PropTypes.bool.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  isArchived: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

// == Export
export default Project;
