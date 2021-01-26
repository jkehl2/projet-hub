// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Button, Container, Header, Item, Segment,
} from 'semantic-ui-react';
// == IMPORTS CONTAINERS

// == STYLES
import './profil.scss';

// == Composant Profil mode consultation
const Profil = ({ name, email, avatar }) => (
  <Container className="profil">
    <Segment textAlign="left">
      {/* Titre */}
      <Header as="h1">Profil utlisateur</Header>
      <Item.Group relaxed>
        <Item>
          {/* avatar */}
          <Item.Image size="small" src={`${avatar}`} />
          <Item.Content>
            {/* pseudo */}
            <Item.Header as="h2">{`${name}`}</Item.Header>
            <Item.Meta>
              {/* email */}
              <a href={`mailto:${email}`}>{`${email}`}</a>
            </Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
      <Button.Group vertical>
        {/* bouton modifer */}
        <Button color="blue">Modifier mes informations personnelles</Button>
        {/* bouton mes projets */}
        <Button color="grey">Mes projets</Button>
        {/* bouton mes favoris */}
        <Button color="grey">Mes favoris</Button>
        {/* bouton mes supprimer le compte */}
        <Button negative>Supprimer le profil</Button>
      </Button.Group>
    </Segment>
  </Container>
);

Profil.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

// == Export
export default Profil;
