// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import { Button } from 'semantic-ui-react';
// == IMPORTS CONTAINERS

// == STYLES
import './profile.scss';

// == Composant Profil mode consultation
const Profile = ({ }) => (
  <div className="profile">
    {/* avatar */}

    {/* pseudo */}
    {/* email */}
    {/* bouton modifer */}
    <Button primary color="blue">Modifier mes informations personnelles</Button>
    {/* bouton mes projets */}
    <Button secondary color="grey">Mes projets</Button>
    {/* bouton mes favoris */}
    <Button secondary color="grey">Mes favoris</Button>
    {/* bouton mes supprimer le compte */}
    <Button secondary color="red">Supprimer le profil</Button>
  </div>
);

Profile.propTypes = {
  props: PropTypes.object.isRequired,
};

// == Export
export default Profile;
