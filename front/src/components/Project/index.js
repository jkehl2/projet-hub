// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Container, Header,
} from 'semantic-ui-react';
import ProjectView from './ProjectView';
import ProjectEdit from './ProjectEdit';
// == IMPORTS CONTAINERS

// == STYLES
import './project.scss';

// == Composant
const Project = ({
  projectId, project, logged, isEditMode, getProjectById,
}) => {
  // Au montage du composant on charge les données du projet depuis l'API
  // Au démontage on clean le store.
  useEffect(() => {
    getProjectById(projectId);
  }, []);
  return (
    <Container className="project">
      <Header as="h1" content="Détail du projet" textAlign="center" dividing subheader="Ici on vous dit tout sur le projet" />
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
};

// == Export
export default Project;
