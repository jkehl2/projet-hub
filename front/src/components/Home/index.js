// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Card, Image, Form, Input, Icon, Grid, Item, Button,
} from 'semantic-ui-react';
import { Slider } from 'react-semantic-ui-range';

// == IMPORTS COMPOSANTS

// == IMPORTS CONTAINERS

// == STYLES
import './home.scss';

// == Composant
const Home = () => (
  <Container className="home">
    {/** Page top with pictures */}
    <Card.Group itemsPerRow="3">
      <Card>
        <Image src="https://image.shutterstock.com/z/stock-vector-business-concept-team-metaphor-people-connecting-puzzle-elements-vector-illustration-flat-design-1390292588.jpg" />
      </Card>
      <Card>
        <Image src="https://image.shutterstock.com/z/stock-vector-business-concept-team-metaphor-people-connecting-puzzle-elements-vector-illustration-flat-design-1240181551.jpg" />
      </Card>
      <Card>
        <Image src="https://image.shutterstock.com/z/stock-vector-teamwork-concept-vector-illustration-employees-assemble-a-puzzle-symbolizing-parts-of-an-effective-1490896448.jpg" />
      </Card>
    </Card.Group>
    {/** Page header with Local Hub presentation */}
    <Item.Group relaxed="very">
      <Item>
        <Item.Content verticalAlign="middle">
          <Grid columns={1}>
            <Grid.Row centered>
              <Item.Header as="h1">Local Hub</Item.Header>
            </Grid.Row>
          </Grid>
        </Item.Content>
      </Item>
      <Item>
        <Item.Description>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Item.Description>
      </Item>
    </Item.Group>
    {/** Search Bar */}
    <Item.Group relaxed="very">
      <Grid columns={2}>
        <Grid.Column>
          <Grid.Row>
            <Form.Field>
              <Input type="text" placeholder="Search" label="Rechercher un projet" />
              <Button icon>
                <Icon name="search" />
              </Button>
            </Form.Field>
          </Grid.Row>
        </Grid.Column>
        {/** Perimeter slider. For the doc check https://www.npmjs.com/package/react-semantic-ui-range  */}
        <Grid.Column>
          <Grid.Row>
            <div className="perimeter">10km</div>
            <Slider
              className="slider"
              value="2"
              color="blue"
            />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Item.Group>
  </Container>
);

// == Export
export default Home;
