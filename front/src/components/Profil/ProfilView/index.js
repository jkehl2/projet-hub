// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS
import {
  Button, Item, Segment,
} from 'semantic-ui-react';
import ModalConfirm from 'src/components/ModalConfirm';

// == IMPORT STYLES
import './profilView.scss';

// == Composant Profil mode consultation
const ProfilView = ({
  name,
  email,
  avatar,
  confirm,
  setConfirmation,
  deleteProfil,
  switchToEditProFile,
  redirectToPasswordEdit,
  redirectToMyProjects,
  redirectToMyFavorites,
}) => (
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
              <Button
                basic
                color="green"
                onClick={redirectToMyProjects}
              >Mes projets
              </Button>
              {/* bouton mes favoris */}
              <Button
                basic
                color="green"
                onClick={redirectToMyFavorites}
              >Mes favoris
              </Button>
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
      <ModalConfirm
        title="Confirmer la suppression de votre compte utilisateur"
        trigger={<Button className="profil-view--marged" negative>Supprimer votre compte</Button>}
        confirm={confirm}
        setConfirmation={setConfirmation}
        handleAction={deleteProfil}
      />
    </Button.Group>
  </Segment>
);

ProfilView.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired,
  setConfirmation: PropTypes.func.isRequired,
  deleteProfil: PropTypes.func.isRequired,
  switchToEditProFile: PropTypes.func.isRequired,
  redirectToPasswordEdit: PropTypes.func.isRequired,
  redirectToMyProjects: PropTypes.func.isRequired,
  redirectToMyFavorites: PropTypes.func.isRequired,
};

// == Export
export default ProfilView;
