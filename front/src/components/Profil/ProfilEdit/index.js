// == IMPORTS PACKAGES
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPONENTS
import {
  Button,
  Form,
  Segment,
} from 'semantic-ui-react';

// == PRIMARY COMPONENT
const ProfilEdit = ({
  name,
  email,
  refreshAppProfil,
  setProfilValue,
  cleanProfil,
  handleCancel,
  handleSubmit,
}) => {
  useEffect(() => {
    refreshAppProfil();
    return () => {
      cleanProfil();
    };
  }, []);
  return (
    <Segment textAlign="left">
      <Form onSubmit={handleSubmit}>

        {/** Input user name */}
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

        {/** Input user email */}
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

        <Segment basic textAlign="right">
          <Button.Group>
            <Button
              positive
              type="submit"
              title="Valider"
              content="Valider"
            />
            <Button.Or text="ou" />

            <Button
              type="button"
              title="Annuler"
              content="Annuler"
              onClick={handleCancel}
            />
          </Button.Group>
        </Segment>

      </Form>
    </Segment>
  );
};

ProfilEdit.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  refreshAppProfil: PropTypes.func.isRequired,
  setProfilValue: PropTypes.func.isRequired,
  cleanProfil: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

// == Export
export default ProfilEdit;
