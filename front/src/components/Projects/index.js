// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';
import List from 'src/components/Projects/List';
import Map from 'src/components/Projects/Map';
import SearchProjects from 'src/components/SearchProjects';

// == IMPORTS CONTAINERS

// == STYLES
import './projects.scss';

// == Composant
const Projects = ({ projects }) => (
  <Container className="projects">
    {/** Search Bar */}
    <SearchProjects searchParams={{
      localite: 'Ma localité',
      perimeter: 1,
    }}
    />
    {/* <Map projects={projects} /> */}
    <List projects={projects} />
  </Container>
);
// == PROP TYPES
Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};
// == Export
export default Projects;
