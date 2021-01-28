// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS
import {
  Container, Header, Form, Segment, Button, Input,
} from 'semantic-ui-react';

// == STYLES
import './passwordEdit.scss';

// == Composant
const PasswordEdit = ({ email }) => (
  <Container className="password-edit">
    {/* titre */}
    <Header as="h1">Modification du mot de passe</Header>
    <Form>
      {/* Accessibility user name hidden field */}
      <Input
        type="email"
        title="Email utilisateur"
        autoComplete="current-user"
        value={email}
        disabled
        style={{ display: 'none' }}
      />
      {/* mot de passe */}
      <Form.Input
        type="password"
        label="Nouveau mot de passe utilisateur"
        title="Nouveau mot de passe utilisateur"
        placeholder="*******"
        autoComplete="new-password"
        required
      />
      {/* confirm de mot passe */}
      <Form.Input
        type="password"
        label="Confirmer nouveau mot de passe utilisateur"
        title="Confirmer nouveau mot de passe utilisateur"
        placeholder="*******"
        autoComplete="new-password"
        required
      />
      <Segment basic textAlign="right">
        <Button.Group>
          {/* bouton valider */}
          <Button positive type="submit">Valider</Button>
          <Button.Or />
          {/* bouton annuler */}
          <Button>Annuler</Button>
        </Button.Group>
      </Segment>
    </Form>
  </Container>
);
PasswordEdit.propTypes = {
  email: PropTypes.string.isRequired,
};

// == Export
export default PasswordEdit;
