// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

// == IMPORTS COMPOSANTS

// == IMPORTS CONTAINERS

// == STYLES
import './list.scss';

// == Composant
const List = ({ projects }) => (
  <>{projects.map((project) => (<ProjectCard key={project.id} project={project} />))}</>
);

// == PROP TYPES
List.propTypes = {
  projects: PropTypes.array.isRequired,
};
// == Export
export default List;
