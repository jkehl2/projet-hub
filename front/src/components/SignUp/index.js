// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS
import {
  Form, Header, Segment, Button, Container,
} from 'semantic-ui-react';

// == STYLES
import './signUp.scss';

// == Composant
const SignUp = ({
  name,
  email,
  password,
  passwordVerification,
  handleSubmit,
  setSignUp,
  redirectHome,
}) => (
  <Container className="signUp">
    {/* titre */}
    <Header as="h1" content="Enregistrement" textAlign="center" dividing subheader="Pas de compte utilisateur ? Enregistrez-vous ici" />
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
        label="Email utilisateur"
        title="Email utilisateur"
        placeholder="albert.dupont@project-hub.fr"
        autoComplete="new-user"
        required
        value={email}
        onChange={(event) => {
          setSignUp({ email: event.target.value });
        }}
      />
      {/* mot de passe */}
      <Form.Input
        type="password"
        label="Mot de passe utilisateur"
        title="Mot de passe utilisateur"
        placeholder="******"
        autoComplete="new-password"
        required
        value={password}
        onChange={(event) => {
          setSignUp({ password: event.target.value });
        }}
      />
      {/* confirm de mot passe */}
      <Form.Input
        type="password"
        label="Confirmer mot de passe utilisateur"
        title="COnfirmer mot de passe utilisateur"
        placeholder="******"
        autoComplete="new-password"
        required
        value={passwordVerification}
        onChange={(event) => {
          setSignUp({ passwordVerification: event.target.value });
        }}
      />
      <Segment basic textAlign="right">
        <Button.Group>
          <Form.Button
            positive
            type="submit"
            title="Annuler"
            content="S'enregistrer"
            onClick={handleSubmit}
          />
          <Button.Or text="ou" />
          {/** bouton inscription */}
          <Form.Button
            color="blue"
            type="button"
            content="Annuler"
            title="Annuler"
            onClick={redirectHome}
          />
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
  redirectHome: PropTypes.func.isRequired,
};

// == Export
export default SignUp;
