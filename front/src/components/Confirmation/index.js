// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Card, Input, Button, Form, Header,
} from 'semantic-ui-react';

// == IMPORTS COMPOSANTS

// == IMPORTS CONTAINERS

// == STYLES
import './confirmation.scss';

// == Composant
const Confirmation = ({ password }) => (
  <Container className="confirmation">
    <Header as="h1">Veuillez confirmer votre demande</Header>
    <Card>
      Veuillez saisir à nouveau votre mot de passe utilisateur pour confirmer votre demande
    </Card>
    Mot de passe :
    <Form.Field>
      <Input type="password" label="password" password={password} />
    </Form.Field>
    <Button.Group>
      <Button positive>Valider</Button>
      <Button.Or />
      <Button>Annuler</Button>
    </Button.Group>
  </Container>
);

Confirmation.propTypes = {
  password: PropTypes.string.isRequired,
};

// == Export
export default Confirmation;
