// == IMPORT PACKAGES
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS
import ProjectMenu from 'src/containers/ProjectMenu';

// == IMPORTS COMPONENTS
import {
  Container,
} from 'semantic-ui-react';

import ProjectView from './ProjectView';
import ProjectEdit from './ProjectEdit';

// == STYLES
import './project.scss';

// == COMPONENT
const Project = ({
  project,
  logged,
  isEditMode,
  setEditModeOff,
  getProjectById,
  updateNeedIdCompleted,
  addToFavorite,
  removeFromFavorite,
}) => {
  useEffect(() => {
    setEditModeOff();
    getProjectById();
  }, []);
  return (
    <Container className="project">
      {/* RENDER ON EDITION OR VIEW */}
      {(isEditMode && logged)
        ? (
          <>
            <ProjectEdit
              getProjectById={getProjectById}
            />
          </>
        )
        : (
          <ProjectView
            getProjectById={getProjectById}
            logged={logged}
            project={project}
            updateNeedIdCompleted={updateNeedIdCompleted}
            addToFavorite={addToFavorite}
            removeFromFavorite={removeFromFavorite}
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
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
  }).isRequired,
  logged: PropTypes.bool.isRequired,
  setEditModeOff: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  getProjectById: PropTypes.func.isRequired,
  updateNeedIdCompleted: PropTypes.func.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
};

// == Export
export default Project;
