// == Import npm
import React from 'react';

// == IMPORTS COMPOSANTS
import {
  Button, Container, Header, Item,
} from 'semantic-ui-react';
// == IMPORTS CONTAINERS

// == STYLES
import './profil.scss';

// == Composant Profil mode consultation
const Profil = () => (
  <Container className="profil">
    {/* Titre */}
    <Header as="h1">Profil utlisateur</Header>
    <Item.Group>
      <Item>
        <Item.Image size="small" src="https://react.semantic-ui.com/images/wireframe/image.png" />
        <Item.Content>
          <Item.Header as="h2">George Orwell</Item.Header>
          <Item.Meta>
            <a href="mailto:george.orwell@localhub.fr">george.orwell@localhub.fr</a>
          </Item.Meta>
        </Item.Content>
      </Item>
    </Item.Group>
    {/* avatar */}

    {/* pseudo */}
    {/* email */}
    {/* bouton modifer */}
    <Button.Group vertical>
      <Button color="blue">Modifier mes informations personnelles</Button>
      {/* bouton mes projets */}
      <Button color="grey">Mes projets</Button>
      {/* bouton mes favoris */}
      <Button color="grey">Mes favoris</Button>
      {/* bouton mes supprimer le compte */}
      <Button negative>Supprimer le profil</Button>
    </Button.Group>
  </Container>
);

// == Export
export default Profil;
