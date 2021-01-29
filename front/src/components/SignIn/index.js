// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS
import {
  Container, Header, Form, Button, Segment, Message,
} from 'semantic-ui-react';

// == STYLES
import './SignIn.scss';
import { useHistory } from 'react-router-dom';

// == Composant
const SignIn = (
  {
    email,
    password,
    setSignInValue,
    handleSubmit,
    redirectSignUp,
    cleanAppParams,
    cleanSignIn,
  },
) => {
  const history = useHistory();
  const isRedirected = () => {
    const isRedirect = (!!history.location.state) && !!history.location.state.isRedirect;
    return (
      <>
        {isRedirect
        && (<Message header="Information" content="Veuillez vous connecter pour effectuer cette action." />)}
      </>
    );
  };

  useEffect(() => {
    cleanAppParams();
    return () => {
      cleanSignIn();
    };
  }, []);
  return (
    <Container className="Signin">
      {isRedirected()}
      {/** titre de la page */}
      <Header as="h1" content="Connexion" textAlign="center" dividing subheader="Déjà un compte utilisateur ? Connectez-vous ici" />
      {/** formulaire d'identification */}
      <Form onSubmit={handleSubmit}>
        {/** email */}
        <Form.Input
          type="email"
          label="Email utilisateur"
          title="Email utilisateur"
          placeholder="albert.dupont@project-hub.fr"
          autoComplete="current-user"
          required
          value={email}
          onChange={(event) => {
            setSignInValue({ email: event.target.value });
          }}
        />
        {/** mot de passe */}
        <Form.Input
          type="password"
          label="Mot de passe utilisateur"
          title="Mot de passe utilisateur"
          placeholder="******"
          autoComplete="current-password"
          required
          value={password}
          onChange={(event) => {
            setSignInValue({ password: event.target.value });
          }}
        />
        {/** bouton connexion */}
        <Segment basic textAlign="right">
          <Button.Group compact>
            <Form.Button positive type="submit" onClick={handleSubmit}>
              Connexion
            </Form.Button>
            <Button.Or text="ou" />
            {/** bouton inscription */}
            <Form.Button color="blue" type="button" onClick={redirectSignUp}>
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
  cleanSignIn: PropTypes.func.isRequired,
};

// == Export
export default SignIn;
