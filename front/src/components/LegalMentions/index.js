// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS

// == IMPORTS CONTAINERS

// == STYLES
import './legalmentions.scss';

// == Composant
const LegalMentions = ({ props }) => {
  return (
    <div className="legal-mentions">
    </div>
  );
};

LegalMentions.propTypes = {
  props: PropTypes.object.isRequired,
};

// == Export
export default LegalMentions;
