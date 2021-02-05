// == IMPORT PACKAGES
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPONENTS
import {
  Container,
  Header,
  Form,
  Button,
  Segment,
  Message,
} from 'semantic-ui-react';

// == STYLES
import './SignIn.scss';
import { useHistory } from 'react-router-dom';

// == COMPONENT
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
    <Container className="sign-in">
      {isRedirected()}
      <Header as="h1" className="sign-in--title" content="Connexion" textAlign="center" dividing subheader="Déjà un compte utilisateur ? Connectez-vous ici" />
      {/** FORM */}
      <Segment>
        <Form onSubmit={handleSubmit}>
          {/** EMAIL */}
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
          {/** PASSWORD */}
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
          {/** CONNEXION */}
          <Segment basic textAlign="right">
            <Button.Group>
              <Form.Button
                id="button-submit"
                type="submit"
                content="Connexion"
                title="Connexion"
              />
              <Button.Or text="ou" />
              {/** SUBSCRIBE */}
              <Form.Button
                id="button-subscribe"
                type="button"
                content="Inscription"
                title="Inscription"
                onClick={redirectSignUp}
              />
            </Button.Group>
          </Segment>
        </Form>
      </Segment>
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
