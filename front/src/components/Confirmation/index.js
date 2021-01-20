// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Card, Input, Button, Form,
} from 'semantic-ui-react';

// == IMPORTS COMPOSANTS

// == IMPORTS CONTAINERS

// == STYLES
import './confirmation.scss';

// == Composant
const Confirmation = ({ password }) => (
  <div className="confirmation">
    <Container>
      <h1>Veuillez confirmer votre demande</h1>
      <Card>
        Veuillez saisir à nouveau votre mot de passe utilisateur pour confirmer votre demande
      </Card>
      Mot de passe :
      <Form>
        <Input password={password} />
      </Form>
      <Button.Group>
        <Button positive>Valider</Button>
        <Button.Or />
        <Button>Annuler</Button>
      </Button.Group>
    </Container>
  </div>
);

Confirmation.propTypes = {
  password: PropTypes.string.isRequired,
};

// == Export
export default Confirmation;
