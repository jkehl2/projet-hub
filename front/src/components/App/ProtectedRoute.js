// == Import npm
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS

// == IMPORTS CONTAINERS

// == Composant
const ProtectedRoute = ({
  path, exact, sensitive, strict, component: Component, isAllowed, redirectTo,
}) => (
  <Route
    exact={exact}
    path={path}
    sensitive={sensitive}
    strict={strict}
  >
    {isAllowed
      ? <Component />
      : (
        <Redirect to={{ pathname: redirectTo, state: { isRedirect: true } }} />
      )}
  </Route>
);

ProtectedRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  sensitive: PropTypes.bool,
  strict: PropTypes.bool,
  component: PropTypes.any.isRequired,
  isAllowed: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string,
};

ProtectedRoute.defaultProps = {
  exact: false,
  sensitive: false,
  strict: false,
  redirectTo: '/utilisateur/connexion',
};

// == Export
export default ProtectedRoute;
