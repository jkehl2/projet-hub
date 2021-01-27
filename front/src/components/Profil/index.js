// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Button, Container, Header, Item, Segment, Modal, Form,
} from 'semantic-ui-react';
// == IMPORTS CONTAINERS

// == STYLES
import './profil.scss';

// == Composant Profil mode consultation
const Profil = ({ name, email, avatar, deleteProfil,
  setConfirmation, confirmation, switchToEditProFile, }) => {
  const [open, setOpen] = useState(false);
  return (
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
          <Button
            color="blue"
            onClick={() => {
              switchToEditProFile();
            }}
          >
            Modifier mes informations personnelles
          </Button>
          {/* bouton mes projets */}
          <Button color="grey">Mes projets</Button>
          {/* bouton mes favoris */}
          <Button color="grey">Mes favoris</Button>
          {/* bouton mes supprimer le compte */}
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button negative>supprimer le profil</Button>}
          >
            <Modal.Header>veuillez taper confirmer pour supprimer le profil</Modal.Header>
            <Modal.Content>
              <Form onSubmit={deleteProfil()}>
                <Form.Input
                  type="text"
                  value={confirmation}
                  onChange={(event) => {
                    setConfirmation({ confirmation: event.target.value });
                  }}
                />
                console.log(confirmation);
                <Button.Group>
                  <Form.Button type="button" onClick={deleteProfil}>
                    confirmer la suppression du profil
                  </Form.Button>
                  <Button negative>annuler</Button>
                </Button.Group>
              </Form>
            </Modal.Content>
          </Modal>
        </Button.Group>
      </Segment>
    </Container>
  );
};

Profil.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  deleteProfil: PropTypes.func.isRequired,
  setConfirmation: PropTypes.func.isRequired,
  switchToEditProFile: PropTypes.func.isRequired,
};

// == Export
export default Profil;
