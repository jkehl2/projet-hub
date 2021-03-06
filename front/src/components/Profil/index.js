// == IMPORT PACKAGES
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS
import ProfilView from 'src/containers/ProfilView';
import ProfilEdit from 'src/containers/ProfilEdit';

// == IMPORTS COMPOSANTS
import {
  Container,
  Header,
} from 'semantic-ui-react';

// == STYLE
import './profil.scss';

// == COMPONENT
const Profil = ({ isEditMode }) => (
  <Container className="profil">
    <Header className="profil--header" as="h1" content="Profil utilisateur" textAlign="center" dividing subheader="Tout ce que nous savons sur vous est ici" />
    {isEditMode ? <ProfilEdit /> : <ProfilView />}
  </Container>
);

Profil.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
};

// == Export
export default Profil;
