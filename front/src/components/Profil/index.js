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

const Profil = ({
  name,
  email,
  avatar,
  confirmation,
  setConfirmation,
  deleteProfil,
  switchToEditProFile,
  redirectToPasswordEdit,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Container className="profil">
      <Segment textAlign="left">
        {/* Titre */}
        <Header as="h1">Profil utilisateur</Header>
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
          {/* Bouton Modification du mot de passe */}
          <Button color="grey" onClick={redirectToPasswordEdit}>Modification du mot de passe</Button>
          {/* bouton mes projets */}
          <Button color="grey">Mes projets</Button>
          {/* bouton mes favoris */}
          <Button color="grey">Mes favoris</Button>
          {/* bouton mes supprimer le compte */}
          <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button negative>Supprimer le profil</Button>}
          >
            <Modal.Header>Veuillez saisir CONFIRMER pour supprimer le profil</Modal.Header>
            <Modal.Content>
              <Form>
                <Form.Input
                  type="text"
                  value={confirmation}
                  onChange={(event) => {
                    setConfirmation({ confirmation: event.target.value });
                  }}
                />
                <Button.Group>
                  <Form.Button type="button" onClick={deleteProfil}>
                    Confirmer la suppression du profil
                  </Form.Button>
                  <Button negative>Annuler</Button>
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
  confirmation: PropTypes.string.isRequired,
  setConfirmation: PropTypes.func.isRequired,
  deleteProfil: PropTypes.func.isRequired,
  switchToEditProFile: PropTypes.func.isRequired,
  redirectToPasswordEdit: PropTypes.func.isRequired,
};

// == Export
export default Profil;
