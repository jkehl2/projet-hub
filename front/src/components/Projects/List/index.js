// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import CardProjects from './CardProjects';

// == IMPORTS COMPOSANTS

// == IMPORTS CONTAINERS

// == STYLES
import './list.scss';

// == Composant
const List = ({ projects }) => (
  <CardProjects projects={projects} />
);

// == PROP TYPES
List.propTypes = {
  projects: PropTypes.array.isRequired,
};
// == Export
export default List;
