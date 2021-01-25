// == Import npm
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS

// == IMPORTS CONTAINERS

// == Composant
const ProtectedRoute = ({
  path, exact, sensitive, strict, component: Component, isAllowed,
}) => (
  <Route
    exact={exact}
    path={path}
    sensitive={sensitive}
    strict={strict}
    render={() => (<>{isAllowed ? <Component/> : <Redirect to="/" />}</>)}
  />
);

ProtectedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  sensitive: PropTypes.bool,
  strict: PropTypes.bool,
  component: PropTypes.func.isRequired,
  isAllowed: PropTypes.bool.isRequired,
};

ProtectedRoute.defaultProps = {
  exact: false,
  sensitive: false,
  strict: false,
};

// == Export
export default ProtectedRoute;
