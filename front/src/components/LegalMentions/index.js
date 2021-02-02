// == Import npm
import React from 'react';
// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS
import { Container, Header, Segment } from 'semantic-ui-react';

// == STYLES
import './legalmentions.scss';

// == Composant
const LegalMentions = ({ props }) => (
  <Container className="legal-mentions">
    <Header as="h1" content="Mentions légales" textAlign="center" dividing />
    <Header content="Éditeur du Site :" />
    <Segment>
      <Header as="h2" content="Site web appartenant à la team Local-HUB." textAlign="left" dividing />
      <p>Nom : Local-HUB</p>
      <p>Prénom : Michel</p>
      <p>Adresse email : michel@michel.com</p>
      <p>Numéro de téléphone : 01-00-00-00-00</p>
      <p>Adresse : 31 rue des fleurs, LyraLand.</p>
    </Segment>
  </Container>
);

// == Export
export default LegalMentions;
