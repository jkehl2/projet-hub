// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Header, Form, Input, Button,
} from 'semantic-ui-react';
// == IMPORTS COMPOSANTS

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
  <Container className="SignIn">
    {/** titre de la page */}
    <Header as="h1">Login</Header>
    {/** formulaire d'identification */}
    <Form>
      {/** email */}
      <Form.Field>
        <Input type="text" name="email" placeholder="monemail@domain.foo" value={email} />
      </Form.Field>
      {/** mot de passe */}
      <Form.Field>
        <Input type="text" name="password" placeholder="mot de passe" value={password} />
      </Form.Field>
    </Form>
    {/** bouton connection */}
    <Button class="medium ui button" type="submit" onClick={handleLogin}>connection</Button>
    <div className="ui divider" />
    {/** bouton inscription */}
    <Button class="medium ui button" type="submit" onClick={handleSignIn}>inscription</Button>
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
