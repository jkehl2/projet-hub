// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Form, Header, Segment, Button, Container,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './SignUp.scss';

// == Composant
const SignUp = ({
  name, email, password, passwordVerification, handleSubmit, setSignUp,
}) => (
  <Container className="signUp">
    {/* titre */}
    <Header as="h1">Création du compte</Header>
    <Form onSubmit={handleSubmit}>
      {/* pseudo */}
      <Form.Input
        type="text"
        placeholder="Nom d'utilisateur"
        autoComplete="off"
        label="Pseudo"
        value={name}
        onChange={(event) => {
          setSignUp({ name: event.target.value });
        }}
      />
      {/* email */}
      <Form.Input
        type="email"
        placeholder="utilisateur@domain.xyz"
        label="Email"
        value={email}
        onChange={(event) => {
          setSignUp({ email: event.target.value });
        }}
      />
      {/* mot de passe */}
      <Form.Input
        type="password"
        placeholder="Mot de passe"
        label="Mot de passe"
        value={password}
        onChange={(event) => {
          setSignUp({ password: event.target.value });
        }}
      />
      {/* confirm de mot passe */}
      <Form.Input
        type="password"
        placeholder="Confirmer mot de passe"
        label="Confirmer mot de passe"
        value={passwordVerification}
        onChange={(event) => {
          setSignUp({ passwordVerification: event.target.value });
        }}
      />
      <Segment basic textAlign="right">
        <Button.Group>
          {/* bouton valider */}
          <Button positive onClick={handleSubmit}>Valider</Button>
          <Button.Or />
          {/* bouton annuler */}
          <Button>Annuler</Button>
        </Button.Group>
      </Segment>
    </Form>
  </Container>
);

SignUp.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setSignUp: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  passwordVerification: PropTypes.string.isRequired,
};

// == Export
export default SignUp;
