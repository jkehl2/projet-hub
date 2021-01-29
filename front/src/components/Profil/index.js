// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS
import ProfilView from 'src/containers/ProfilView';
import ProfilEdit from 'src/containers/ProfilEdit';

// == IMPORTS COMPOSANTS
import { Container } from 'semantic-ui-react';

// == Composant Profil
const Profil = ({ isEditMode }) => (
  <Container className="profil">
    {isEditMode ? <ProfilEdit /> : <ProfilView />}
  </Container>
);

Profil.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
};

// == Export
export default Profil;
