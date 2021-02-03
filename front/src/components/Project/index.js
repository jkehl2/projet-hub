// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// IMPORT IMAGE DOT MAP
import dot from 'src/assets/images/dot.svg';

// == IMPORTS CONTAINERS
import ProjectMenu from 'src/containers/ProjectMenu';

// == IMPORTS COMPOSANTS
import {
  Container,
  Header,
  Label,
} from 'semantic-ui-react';

import {
  MapContainer,
  TileLayer,
  ImageOverlay,
  Popup,
} from 'react-leaflet';

import ProjectView from './ProjectView';
import ProjectEdit from './ProjectEdit';

// == STYLES
import './project.scss';

// == Composant
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
      <Header
        as="h1"
        content="Détail du projet"
        textAlign="center"
        dividing
        subheader="Ici on vous dit tout sur ce projet"
      />
      {/* Menu projet - modifier / supprimer / archiver */}
      <ProjectMenu />

      {project.lat !== 0 && (
      <MapContainer
        className="project--map"
        center={[project.lat, project.long]}
        zoom={11}
        scrollWheelZoom
      >
        <ImageOverlay
          bounds={[
            [project.lat, project.long],
            [project.lat + 0.02, project.long + 0.02],
          ]}
          url={dot}
          interactive
          opacity={0.9}
          zIndex={20}
        >
          <Popup>
            <Label basic content={`${project.title}`} detail={`${project.author.name}`} />
          </Popup>
        </ImageOverlay>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      )}

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
