// == IMPORT PACKAGES
import React from 'react';
import PropTypes, { shape } from 'prop-types';

// IMPORT IMAGE DOT MAP
import dot from 'src/assets/images/dot.svg';

// == IMPORTS COMPONENTS
import {
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

import { Link } from 'react-router-dom';

// == STYLES
import './listMap.scss';

// == COMPONENT
const ListMap = ({
  projects,
}) => (
  <MapContainer
    className="list-map"
    center={[projects[0].lat, projects[0].long]}
    zoom={11}
    scrollWheelZoom
  >
    {projects.map((project) => (
      <ImageOverlay
        key={project.id}
        bounds={[
          [project.lat, project.long],
          [project.lat + 0.02, project.long + 0.02],
        ]}
        url={dot}
        interactive
        opacity={0.9}
        zIndex={1}
      >
        <Popup className="list-map--popup">
          <Grid className="list-map--card" verticalAlign="middle" textAlign="left">
            <Grid.Row divided>
              <Grid.Column className="list-map--card--cell" width={16} textAlign="center">
                <Link to={`/projet/${project.id}`}><Image src={`${project.image}`} size="medium" rounded centered /></Link>
                <Link to={`/projet/${project.id}`}><Header className="list--map--card--title" size="medium" icon={project.isArchived ? 'archive' : null} content={`${project.title}`} /></Link>
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
);

// == PROP TYPES
ListMap.propTypes = {
  projects: PropTypes.arrayOf(shape({
    id: PropTypes.string.isRequired,
    isArchived: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    long: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

// == Export
export default ListMap;
