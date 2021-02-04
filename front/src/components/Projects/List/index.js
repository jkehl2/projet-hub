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
      <MapContainer
        className="list--map"
        center={[projects[0].lat, projects[0].long]}
        zoom={10}
        dragging
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl
      >
        {projects.map((project) => (
          <ImageOverlay
            key={project.id}
            bounds={[
              [project.lat, project.long],
              [project.lat + 0.03, project.long + 0.03],
            ]}
            url={dot}
            interactive
            opacity={0.9}
            zIndex={1}
          >
            <Popup className="list--map--popup">
              <Grid className="list--map--card" verticalAlign="middle" textAlign="left">
                <Grid.Row divided>
                  <Grid.Column className="list--map--card--cell" width={4}>
                    <Link to={`/projet/${project.id}`}><Image src={`${project.image}`} size="medium" rounded centered /></Link>
                  </Grid.Column>
                  <Grid.Column className="list--map--card--cell" width={12}>
                    <Link to={`/projet/${project.id}`}><Header size="medium" icon={project.isArchived ? 'archive' : null} content={`${project.title}`} />
                      <Segment basic>
                        <Image size="mini" src={`${project.author.avatar}`} avatar />
                        <strong>{`${project.author.name}`}</strong>
                      </Segment>
                    </Link>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Popup>
          </ImageOverlay>
        ))}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

      </MapContainer>
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
