// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Button, Form, Image, Segment,
} from 'semantic-ui-react';
// == IMPORTS CONTAINERS

// == Composant Profil mode consultation
const ProfilEdit = ({
  name,
  email,
  avatar,
  refreshAppProfil,
  setProfilValue,
  uploadAvatar,
  abortEditProfil,
  handleSubmit,
}) => {
  useEffect(() => {
    refreshAppProfil();
  }, []);
  return (
    <Segment textAlign="left">
      <Form onSubmit={handleSubmit}>
        {/** modifier le name */}
        <Form.Input
          type="text"
          label="Nom d'utilisateur"
          title="Nom d'utilisateur"
          placeholder="Albert Dupont"
          required
          value={name}
          onChange={(event) => {
            setProfilValue({ name: event.target.value });
          }}
        />
        {/** modifier l'email */}
        <Form.Input
          type="email"
          label="Email utilisateur"
          title="Email utilisateur"
          placeholder="albert.dupont@project-hub.fr"
          autoComplete="current-user"
          required
          value={email}
          onChange={(event) => {
            setProfilValue({ email: event.target.value });
          }}
        />
        {/** Uploader l'avatar */}
        <Image size="small" centered spaced src={`${avatar}`} />
        <Form.Input
          type="file"
          label="Fichier avatar utilisateur"
          title="Fichier avatar utilisateur"
          onChange={(event) => {
            uploadAvatar(event.target.files[0]);
          }}
        />
        {/** bouton valider / annuler l'édition du profil */}
        <Segment basic textAlign="right">
          <Button.Group>
            <Button positive type="submit">Valider</Button>
            <Button.Or />
            <Button
              type="button"
              onClick={abortEditProfil}
            >Annuler
            </Button>
          </Button.Group>
        </Segment>
      </Form>
    </Segment>
  );
};

ProfilEdit.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  refreshAppProfil: PropTypes.func.isRequired,
  setProfilValue: PropTypes.func.isRequired,
  uploadAvatar: PropTypes.func.isRequired,
  abortEditProfil: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

// == Export
export default ProfilEdit;
