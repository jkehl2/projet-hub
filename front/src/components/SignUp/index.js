// == Import npm
import React from 'react';

// == IMPORTS COMPOSANTS
import {
  Form, Header, Segment, Button, Container,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './signUp.scss';

// == Composant
const SignUp = () => (
  <Container className="sign-up">
    {/* titre */}
    <Header as="h1">Création du compte</Header>
    <Form>
      {/* pseudo */}
      <Form.Input
        type="text"
        placeholder="Nom d'utilisateur"
        label="Pseudo"
      />
      {/* email */}
      <Form.Input
        type="email"
        placeholder="utilisateur@domain.xyz"
        label="Email"
      />
      {/* mot de passe */}
      <Form.Input
        type="password"
        placeholder="Mot de passe"
        label="Mot de passe"
      />
      {/* confirm de mot passe */}
      <Form.Input
        type="password"
        placeholder="Confirmer mot de passe"
        label="Confirmer mot de passe"
      />
      <Segment basic textAlign="right">
        <Button.Group>
          {/* bouton valider */}
          <Button positive>Valider</Button>
          <Button.Or />
          {/* bouton annuler */}
          <Button>Annuler</Button>
        </Button.Group>
      </Segment>
    </Form>
  </Container>
);

// == Export
export default SignUp;
