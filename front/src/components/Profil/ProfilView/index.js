// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS
import {
  Button, Item, Segment,
} from 'semantic-ui-react';
import ModalConfirmDelete from 'src/components/ModalConfirmDelete';

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
        <ModalConfirmDelete
          title="Confirmer la suppression de votre compte utilisateur"
          trigger={<Button className="profil-view--marged" negative>Supprimer votre compte</Button>}
          deleteConfirm={deleteConfirm}
          setConfirmation={setConfirmation}
          handleDelete={deleteProfil}
        />
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
