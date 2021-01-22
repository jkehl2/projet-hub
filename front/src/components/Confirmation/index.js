// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Card, Segment, Button, Form, Header,
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
    <Form>
      <Form.Input
        type="password"
        label="Mot de passe"
        value={password}
        placeholder="mot de passe"
      />
      <Segment basic textAlign="right">
        <Button.Group>
          <Button positive>Valider</Button>
          <Button.Or />
          <Button>Annuler</Button>
        </Button.Group>
      </Segment>
    </Form>
  </Container>
);

Confirmation.propTypes = {
  password: PropTypes.string.isRequired,
};

// == Export
export default Confirmation;
