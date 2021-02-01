// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// == IMPORTS CONTAINERS
import ProjectMenu from 'src/containers/ProjectMenu';

// == IMPORTS COMPOSANTS
import {
  Container, Header,
} from 'semantic-ui-react';
import ProjectView from './ProjectView';
import ProjectEdit from './ProjectEdit';

// == STYLES
import './project.scss';

// == Composant
const Project = ({
  project, logged, isEditMode, setEditModeOff, getProjectById, updateNeedIdCompleted,
}) => {
  // Au montage du composant on charge les données du projet depuis l'API
  // Au démontage on clean le store.
  useEffect(() => {
    setEditModeOff();
    getProjectById();
  }, []);
  return (
    <Container className="project">
      <Header
        as="h1"
        content="Détail du projet"
        textAlign="center"
        dividing
        subheader="Ici on vous dit tout sur ce projet"
      />
      {/* Menu projet - modifier / supprimer / archiver */}
      <ProjectMenu />
      {(isEditMode && logged)
        ? (
          <ProjectEdit
            getProjectById={getProjectById}
          />
        )
        : (
          <ProjectView
            getProjectById={getProjectById}
            logged={logged}
            project={project}
            updateNeedIdCompleted={updateNeedIdCompleted}
          />
        )}
    </Container>
  );
};

// == PROP TYPES
Project.propTypes = {
  project: PropTypes.shape({
    isAuthor: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  logged: PropTypes.bool.isRequired,
  setEditModeOff: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  getProjectById: PropTypes.func.isRequired,
  updateNeedIdCompleted: PropTypes.func.isRequired,
};

// == Export
export default Project;
