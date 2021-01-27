// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Card, Icon, Segment, Grid, Step,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './headerHome.scss';

// == Composant
const HeaderHome = () => (
  <Segment padded="very" basic textAlign="center">
    <Step.Group>
      <Step>
        <Icon name="write" />
        <Step.Content
          href="/utilisateur/connexion"
        >
          <Step.Title>Poster</Step.Title>
        </Step.Content>
      </Step>
      <Step>
        <Icon name="comments" />
        <Step.Content href="/projets">
          <Step.Title>Echanger</Step.Title>
        </Step.Content>
      </Step>
      <Step>
        <Icon name="handshake" />
        <Step.Content href="/">
          <Step.Title>Collaborer</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
  </Segment>
);

// == Export
export default HeaderHome;
