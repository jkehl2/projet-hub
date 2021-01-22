// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import CardProjects from './CardProjects';

// == IMPORTS COMPOSANTS
// import {
//   Item, Icon, Label, Image, Segment,
// } from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './list.scss';

// == Composant
const List = ({ projects }) => (
  <CardProjects projects={projects} />
);

//== PROP TYPES
List.propTypes = {
// projects: PropTypes.arrayOf(
//   PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     authorEmail: PropTypes.string.isRequired,
//     expireDate: PropTypes.string.isRequired,
//     createDate: PropTypes.string.isRequired,
//     isAuthor: PropTypes.bool.isRequired,
//     adress: PropTypes.string.isRequired,
//     isFavorite: PropTypes.bool.isRequired,
//     isArchived: PropTypes.bool.isRequired,
//   }),
// ).isRequired,
};
// == Export
export default List;
