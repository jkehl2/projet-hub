// == Import npm
import React, { useEffect } from 'react';
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
  projectId, project, logged, isEditMode, getProjectById, cleanProject,
}) => {
  // Au montage du composant on charge les données du projet depuis l'API
  // Au démontage on clean le store.
  useEffect(() => {
    getProjectById(projectId);
    return () => {
      cleanProject();
    };
  }, []);
  return (
    <Container className="project">
      {(isEditMode && logged)
        ? <ProjectEdit project={project} />
        : <ProjectView logged={logged} project={project} />}
    </Container>
  );
};
// == PROP TYPES
Project.propTypes = {
  projectId: PropTypes.string.isRequired,
  project: PropTypes.shape({
    isAuthor: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  logged: PropTypes.bool.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  getProjectById: PropTypes.func.isRequired,
  cleanProject: PropTypes.func.isRequired,
};

// == Export
export default Project;
