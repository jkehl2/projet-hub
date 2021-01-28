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
        label="Pseudo utilisateur"
        title="Pseudo utilisateur"
        placeholder="Albert Dupont"
        required
      />
      {/* email */}
      <Form.Input
        type="email"
        label="Email utilisateur"
        title="Email utilisateur"
        placeholder="albert.dupont@project-hub.fr"
        autoComplete="new-user"
        required
      />
      {/* mot de passe */}
      <Form.Input
        type="password"
        label="Mot de passe utilisateur"
        title="Mot de passe utilisateur"
        placeholder="*******"
        autoComplete="new-password"
        required
      />
      {/* confirm de mot passe */}
      <Form.Input
        type="password"
        label="Confirmer mot de passe utilisateur"
        title="Confirmer mot de passe utilisateur"
        placeholder="*******"
        autoComplete="new-password"
        required
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
