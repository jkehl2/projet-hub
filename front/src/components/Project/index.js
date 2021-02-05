// == IMPORT PACKAGES
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// IMPORT IMAGE DOT MAP
import dot from 'src/assets/images/dot.svg';

// == IMPORTS CONTAINERS
import ProjectMenu from 'src/containers/ProjectMenu';

// == IMPORTS COMPONENTS
import {
  Container,
  Grid,
  Header,
  Image,
} from 'semantic-ui-react';

import {
  MapContainer,
  TileLayer,
  ImageOverlay,
  Popup,
} from 'react-leaflet';

import ProjectView from './ProjectView';
import ProjectEdit from './ProjectEdit';
import ProjectMap from './ProjectMap';

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
      {/* <Header
        as="h1"
        className="project-header"
        content="Détail du projet"
        textAlign="center"
        dividing
        subheader="Ici on vous dit tout sur ce projet"
      /> */}
      {/* PROJECT MENU - MODIFY / DELETE / ARCHIVE */}
      <ProjectMenu />

      {/* PROJECTS MAP */}

      {/* RENDER ON EDITION OR VIEW */}
      {(isEditMode && logged)
        ? (
          <>
            {project.lat !== 0 && (
            <ProjectMap project={project} />
            )}
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
