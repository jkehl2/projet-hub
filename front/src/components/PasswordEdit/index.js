// == IMPORTS PACKAGES
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPONENT
import {
  Container,
  Header,
  Form,
  Segment,
  Button,
  Input,
} from 'semantic-ui-react';

// == IMPORT STYLES
import './passwordEdit.scss';

// == PRIMARY COMPONENT
const PasswordEdit = ({
  email,
  password,
  passwordConfirm,
  cleanProfil,
  setProfilValue,
  handleSubmit,
  abortConfirmPassword,
}) => {
  useEffect(() => {
    cleanProfil();
    return (() => {
      cleanProfil();
    });
  }, []);
  return (
    <Container className="password-edit">

      {/* PAGE TITLE */}
      <Header as="h1" content="Modification du mot de passe" textAlign="center" dividing subheader="On n'est jamais trop prudent" />

      <Segment>
        <Form onSubmit={handleSubmit}>

          {/* USER NAME */}
          <Input
            type="email"
            title="Email utilisateur"
            autoComplete="current-user"
            value={email}
            disabled
            style={{ display: 'none' }}
          />

          {/* PASSWORD */}
          <Form.Input
            type="password"
            label="Nouveau mot de passe utilisateur"
            title="Nouveau mot de passe utilisateur"
            placeholder="*******"
            autoComplete="new-password"
            required
            value={password}
            onChange={(event) => {
              setProfilValue({ password: event.target.value });
            }}
          />

          {/* PASSWORD CONFIRM */}
          <Form.Input
            type="password"
            label="Confirmer nouveau mot de passe utilisateur"
            title="Confirmer nouveau mot de passe utilisateur"
            placeholder="*******"
            autoComplete="new-password"
            required
            value={passwordConfirm}
            onChange={(event) => {
              setProfilValue({ passwordConfirm: event.target.value });
            }}
          />

          <Segment basic textAlign="right">
            <Button.Group>
              <Button
                className="password-edit--modify-button"
                positive
                type="submit"
              >Valider
              </Button>

              <Button.Or text="ou" />

              <Button
                type="button"
                onClick={abortConfirmPassword}
              >Annuler
              </Button>
            </Button.Group>
          </Segment>

        </Form>
      </Segment>
    </Container>
  );
};
// == PROPTYPES
PasswordEdit.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  cleanProfil: PropTypes.func.isRequired,
  setProfilValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  abortConfirmPassword: PropTypes.func.isRequired,
};

// == Export
export default PasswordEdit;
