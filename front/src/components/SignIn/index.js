// == Import npm
import React, { useEffect } from 'react';
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
    setSignInValue,
    handleSubmit,
    redirectSignUp,
    cleanAppParams,
  },
) => {
  useEffect(() => {
    cleanAppParams();
    return () => {
      cleanAppParams();
    };
  }, []);
  return (
    <Container className="Signin">
      {/** titre de la page */}
      <Header as="h1">Connexion</Header>

      {/** formulaire d'identification */}
      <Form onSubmit={handleSubmit}>
        {/** email */}
        <Form.Input
          type="text"
          label="Email"
          placeholder="monemail@domain.foo"
          autoComplete="current-user"
          value={email}
          onChange={(event) => {
            setSignInValue({ email: event.target.value });
          }}
        />
        {/** mot de passe */}
        <Form.Input
          type="password"
          label="Mot de passe"
          placeholder="mot de passe"
          autoComplete="current-password"
          value={password}
          onChange={(event) => {
            setSignInValue({ password: event.target.value });
          }}
        />
        {/** bouton connexion */}
        <Segment basic textAlign="right">
          <Button.Group>
            <Form.Button type="button" onClick={handleSubmit}>
              Connexion
            </Form.Button>
            {/** bouton inscription */}
            <Form.Button type="button" onClick={redirectSignUp}>
              Inscription
            </Form.Button>
          </Button.Group>
        </Segment>
      </Form>
    </Container>
  );
};

SignIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setSignInValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  redirectSignUp: PropTypes.func.isRequired,
  cleanAppParams: PropTypes.func.isRequired,
};

// == Export
export default SignIn;
