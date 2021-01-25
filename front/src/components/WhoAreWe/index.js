// == Import npm
import React from 'react';
//import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Grid, Card, Container, Header, Image,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './WhoAreWe.scss';

// == Composant
const WhoAreWe = () => (
  <Container color="blue">
    <Header as="h1">L'équipe</Header>
    <Grid textAlign="center" divided="vertically">
      <Grid.Row columns="equal">
        <Grid.Column padded="true">
          <Card>
            <Image src="https://ca.slack-edge.com/T018S94MBUY-U018R0P25V4-09436bb6e88d-512" size="small" centered rounded />
            <Card.Content as="h3" textAlign="center">
              <Card.Header>Johann Kehl</Card.Header>
              <Card.Description>Product Owner</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src="https://ca.slack-edge.com/T018S94MBUY-U019CC7280G-c4ef97178580-512" size="small" centered rounded />
            <Card.Content textAlign="center">
              <Card.Header>Lara Minski</Card.Header>
              <Card.Description>Lead dev front</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src="https://ca.slack-edge.com/T018S94MBUY-U018HM615K7-efac29ea0437-512" size="small" centered rounded />
            <Card.Content textAlign="center">
              <Card.Header>Julien Dosiere</Card.Header>
              <Card.Description>Lead dev back</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src="https://ca.slack-edge.com/T018S94MBUY-U018C5HPW22-e6f9b98e388a-512" size="small" centered rounded />
            <Card.Content textAlign="center">
              <Card.Header>Aurore Picard</Card.Header>
              <Card.Description>Scrum master</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src="https://ca.slack-edge.com/T018S94MBUY-U018HFNRL5B-ad3718ce3171-512" size="small" centered rounded />
            <Card.Content textAlign="center">
              <Card.Header>Yann Saint-Marc</Card.Header>
              <Card.Description>Git master</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

// WhoAreWe.propTypes = {
//   // props: PropTypes.object.isRequired,
// };

// == Export
export default WhoAreWe;
