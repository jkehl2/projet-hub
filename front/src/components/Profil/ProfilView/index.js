// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS
import {
  Button, Form, Item, Modal, Segment,
} from 'semantic-ui-react';

// == IMPORT STYLES
import './profilView.scss';

// == Composant Profil mode consultation
const ProfilView = ({
  name,
  email,
  avatar,
  deleteConfirm,
  setConfirmation,
  deleteProfil,
  switchToEditProFile,
  redirectToPasswordEdit,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Segment textAlign="left">
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
            <Item.Description>
              <Button.Group>
                {/* bouton mes projets */}
                <Button basic color="green">Mes projets</Button>
                {/* bouton mes favoris */}
                <Button basic color="green">Mes favoris</Button>
              </Button.Group>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
      <Button.Group vertical>
        {/* bouton modifer */}
        <Button
          basic
          color="blue"
          onClick={() => {
            switchToEditProFile();
          }}
        >Modifier mes informations personnelles
        </Button>
        {/* Bouton Modification du mot de passe */}
        <Button
          className="profil-view--marged"
          basic
          color="orange"
          onClick={redirectToPasswordEdit}
        >Modification du mot de passe
        </Button>

        {/* bouton mes supprimer le compte */}
        <Modal
          onClose={() => {
            setOpen(false);
            setConfirmation({ deleteConfirm: '' });
          }}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button className="profil-view--marged" negative>Supprimer le profil</Button>}
        >
          <Modal.Header>Confirmer la suppression de votre compte utilisateur</Modal.Header>
          <Modal.Content>
            <Form onSubmit={deleteProfil}>
              <Form.Input
                type="text"
                label="Saisissez CONFIRMER pour supprimer définitivement votre compte utilisateur."
                title="Saisissez CONFIRMER pour supprimer définitivement votre compte utilisateur."
                placeholder=""
                required
                value={deleteConfirm}
                onChange={(event) => {
                  setConfirmation({ deleteConfirm: event.target.value });
                }}
              />
              <Button.Group>
                <Form.Button negative type="submit">Confirmer</Form.Button>
                <Button.Or text="ou" />
                <Button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    setOpen(false);
                    setConfirmation({ deleteConfirm: '' });
                  }}
                >Annuler
                </Button>
              </Button.Group>
            </Form>
          </Modal.Content>
        </Modal>
      </Button.Group>
    </Segment>
  );
};

ProfilView.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  deleteConfirm: PropTypes.string.isRequired,
  setConfirmation: PropTypes.func.isRequired,
  deleteProfil: PropTypes.func.isRequired,
  switchToEditProFile: PropTypes.func.isRequired,
  redirectToPasswordEdit: PropTypes.func.isRequired,
};

// == Export
export default ProfilView;
