// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';
import List from 'src/components/Projects/List';
import SearchProjects from 'src/containers/SearchProjects';

// == IMPORTS CONTAINERS
/* import SearchProjects from 'src/containers/List'; */

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
  </Container>
);
// == PROP TYPES
Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};
// == Export
export default Projects;
