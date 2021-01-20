// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Card, Image, Form, Input, Icon, Button, Progress, Slider,
} from 'semantic-ui-react';

// == IMPORTS COMPOSANTS

// == IMPORTS CONTAINERS

// == STYLES
import './home.scss';

// == Composant
const Home = () => (
  <div className="home">
    <Container>
      {/** Page top with pictures */}
      <Card.Group>
        <Card>
          <Image />
        </Card>
      </Card.Group>
      {/** Page header with Local Hub presentation */}
      <Card>
        <Card.Header>Local Hub</Card.Header>
        <Card.Description>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Card.Description>
      </Card>
      {/** Search Bar */}
      <Form.Field>
        <Input type="text" placeholder="Search" />
        <Icon name="search" />
      </Form.Field>
      {/** Perimeter slider */}

      <Slider value={value} color="red" settings={settings} />

    </Container>
  </div>
);

// == Export
export default Home;
