// == IMPORTS PACKAGES
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPONENTS
import {
  Form,
  Header,
  Segment,
  Button,
  Container,
} from 'semantic-ui-react';

// == STYLES
import './signUp.scss';

// == COMPONENT
const SignUp = ({
  name,
  email,
  password,
  passwordVerification,
  handleSubmit,
  setSignUp,
  redirectHome,
}) => (
  <Container className="sign-up">
    {/* TITLE */}
    <Header className="sign-up--title" as="h1" content="Enregistrement" textAlign="center" dividing subheader="Pas de compte utilisateur ? Enregistrez-vous ici" />
    <Form onSubmit={handleSubmit}>
      {/* PSEUDO */}
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
      {/* EMAIL */}
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
      {/* PASSWORD */}
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
      {/* PASSWORD CONFIRMATION */}
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
            id="button-submit"
            type="submit"
            title="Annuler"
            content="S'enregistrer"
            onClick={handleSubmit}
          />
          <Button.Or text="ou" />
          {/** SUBSCRIBE */}
          <Form.Button
            color="grey"
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
