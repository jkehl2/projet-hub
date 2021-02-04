// == IMPORT PACKAGES
import React, { useEffect } from 'react';
import PropTypes, { shape } from 'prop-types';

// IMPORT IMAGE DOT MAP
import dot from 'src/assets/images/dot.svg';

// == IMPORTS COMPONENTS
import ProjectCard from 'src/components/Projects/ProjectCard';

import {
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import {
  MapContainer,
  TileLayer,
  ImageOverlay,
  Popup,
} from 'react-leaflet';

// == STYLES
import './list.scss';
import ListMap from '../ListMap';

// == COMPONENT
const List = ({
  logged, projects, updateList, addToFavorite, removeFromFavorite,
}) => {
  useEffect(() => {
    updateList();
  }, []);
  return (
    <Segment className="list--no-marged list--fullwidth" basic compact>
      { projects.length > 0 && (
        <ListMap projects={projects} />
      )}
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          logged={logged}
          project={project}
          addToFavorite={addToFavorite}
          removeFromFavorite={removeFromFavorite}
        />
      ))}
    </Segment>
  );
};

// == PROP TYPES
List.propTypes = {
  logged: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    isFavorite: PropTypes.bool.isRequired,
    isArchived: PropTypes.bool.isRequired,
    isAuthor: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    followers: PropTypes.arrayOf(
      shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    location: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    expiration_date: PropTypes.string.isRequired,
    creation_date: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired).isRequired,
  updateList: PropTypes.func.isRequired,
  addToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
};
// == Export
export default List;
