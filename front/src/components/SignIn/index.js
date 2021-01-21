// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Container, Header, Form, Button, Segment,
} from 'semantic-ui-react';
// == IMPORTS CONTAINERS

// == STYLES
import './SignIn.scss';

// == Composant
const SignIn = (
  {
    email,
    password,
    handleLogin,
    handleSignIn,
  },
) => (
  <Container className="Signin">
    {/** titre de la page */}
    <Header as="h1">Connexion</Header>
    {/** formulaire d'identification */}
    <Form>
      {/** email */}
      <Form.Input
        type="text"
        label="Email"
        placeholder="monemail@domain.foo"
        value={email}
      />
      {/** mot de passe */}
      <Form.Input
        type="password"
        label="Mot de passe"
        placeholder="mot de passe"
        value={password}
      />
      {/** bouton connexion */}
      <Segment basic textAlign="right">
        <Button.Group>
          <Form.Button type="button" onClick={handleLogin}>
            Connexion
          </Form.Button>
          {/** bouton inscription */}
          <Form.Button type="button" onClick={handleSignIn}>
            Inscription
          </Form.Button>
        </Button.Group>
      </Segment>
    </Form>
  </Container>
);

SignIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleSignIn: PropTypes.func.isRequired,
};

// == Export
export default SignIn;
