// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS

// == IMPORTS CONTAINERS

// == STYLES
import './list.scss';

// == Composant
const List = ({ props }) => (
  <div className="list" />
);

List.propTypes = {
  props: PropTypes.object.isRequired,
};

// == Export
export default List;
