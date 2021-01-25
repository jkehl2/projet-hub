// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Grid, Card, Container, Header,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './WhoAreWe.scss';

// == Composant
const WhoAreWe = ({  }) => (
  <Container>
    <Header as="h1" textAlign="center">First Header</Header>
    <Grid divided="vertically">
      <Grid.Row columns={2}>
        <Grid.Column>
          <Card
            image src="https://ca.slack-edge.com/T018S94MBUY-U018R0P25V4-09436bb6e88d-512"
            header="Johann Kehl"
            description="Product Owner."
          />
        </Grid.Column>
        <Grid.Column>
          <Card
            image src="https://ca.slack-edge.com/T018S94MBUY-U019CC7280G-c4ef97178580-512"
            header="Lara Minski"
            description="Lead dev front."
          />
        <Grid.Column>
          <Card
            image src="https://ca.slack-edge.com/T018S94MBUY-U018HM615K7-efac29ea0437-512"
            header="Julien Dosiere"
            description="Lead dev back."
          />
        </Grid.Column>
        <Grid.Column>
          <Card
            image src="https://ca.slack-edge.com/T018S94MBUY-U018C5HPW22-e6f9b98e388a-512"
            header="Aurore Picard"
            description="Srum master."
          />
        </Grid.Column>
        <Grid.Column>
          <Card
            image src="https://ca.slack-edge.com/T018S94MBUY-U018HFNRL5B-ad3718ce3171-512"
            header="Yann Saint-Marc"
            description="Git master."
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

WhoAreWe.propTypes = {
  props: PropTypes.object.isRequired,
};

// == Export
export default WhoAreWe;
