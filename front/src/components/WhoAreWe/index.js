// == Import npm
import React from 'react';

// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS
import {
  Grid, Segment, Container, Header, Image, Label, Icon,
} from 'semantic-ui-react';

// == Composant
const WhoAreWe = () => (
  <Container>
    <Header as="h1" content="La fine équipe Local-HUB" textAlign="center" dividing subheader="Une équipe de choc !" />
    <Segment padded="very">
      <Grid verticalAlign="middle" textAlign="center" stackable columns="equal">
        <Grid.Row>
          <Grid.Column>
            <Segment basic><Image circular size="small" centered spaced src="https://ca.slack-edge.com/T018S94MBUY-U018R0P25V4-09436bb6e88d-512" /></Segment>
            <Segment basic><Label basic content="Johann Kehl" detail="Product Owner" /></Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic><Image circular size="small" centered spaced src="https://ca.slack-edge.com/T018S94MBUY-U019CC7280G-c4ef97178580-512" /></Segment>
            <Segment basic><Label basic content="Lara Minski" detail="Lead dev front" /></Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic><Image circular size="small" centered spaced src="https://ca.slack-edge.com/T018S94MBUY-U018HM615K7-efac29ea0437-512" /></Segment>
            <Segment basic><Label basic content="Julien Dosiere" detail="Lead dev back" /></Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment basic><Image circular size="small" centered spaced src="https://ca.slack-edge.com/T018S94MBUY-U018C5HPW22-e6f9b98e388a-512" /></Segment>
            <Segment basic><Label basic content="Aurore Picard" detail="Scrum master" /></Segment>
          </Grid.Column>
          <Grid.Column only="computer">
            <Icon name="hubspot" size="massive" />
          </Grid.Column>
          <Grid.Column>
            <Segment basic><Image circular size="small" centered spaced src="https://ca.slack-edge.com/T018S94MBUY-U018HFNRL5B-ad3718ce3171-512" /></Segment>
            <Segment basic><Label basic content="Yann Saint-Marc" detail="Git master" /></Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Container>
);

// == Export
export default WhoAreWe;
