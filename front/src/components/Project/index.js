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
  project, logged, isEditMode,
}) => (
  <Container className="project">
    {(isEditMode && logged)
      ? <ProjectEdit project={project} />
      : <ProjectView props={{ logged, project }} />}
  </Container>
);
// == PROP TYPES
Project.propTypes = {
  project: PropTypes.shape({
    isAuthor: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  logged: PropTypes.bool.isRequired,
  isEditMode: PropTypes.bool.isRequired,
};

// == Export
export default Project;
