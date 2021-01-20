// == Import npm
import React from 'react';

// == IMPORTS COMPOSANTS
import {
  Button, Container, Header, Item, List,
} from 'semantic-ui-react';
// == IMPORTS CONTAINERS

// == STYLES
import './profile.scss';

// == Composant Profil mode consultation
const Profile = () => (
  <Container className="profile">
    {/* Titre */}
    <Header as="h1">Profil utlisateur</Header>
    <Item>
      <Item.Image size="tiny" src="https://react.semantic-ui.com/images/wireframe/image.png" />
    </Item>
    {/* avatar */}

    {/* pseudo */}
    {/* email */}
    {/* bouton modifer */}
    <List verticalAlign="middle">
      <List.Item><Button color="blue">Modifier mes informations personnelles</Button></List.Item>
      {/* bouton mes projets */}
      <List.Item><Button color="grey">Mes projets</Button></List.Item>
      {/* bouton mes favoris */}
      <List.Item><Button color="grey">Mes favoris</Button></List.Item>
      {/* bouton mes supprimer le compte */}
      <List.Item><Button color="red">Supprimer le profil</Button></List.Item>
    </List>
  </Container>
);

// == Export
export default Profile;
