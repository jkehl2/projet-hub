// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS

// == IMPORTS CONTAINERS

// == STYLES
import './sign-up.scss';

// == Composant
const SignUp = ({ props }) => (
  <div className="sign-up" />
);

SignUp.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

// == Export
export default SignUp;
