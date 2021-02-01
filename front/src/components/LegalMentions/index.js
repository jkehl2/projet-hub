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
      Nos mentions légales ne sont pas encore disponibles.
    </Segment>
  </Container>
);

// == Export
export default LegalMentions;
