// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Card, Image, Segment,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './headerHome.scss';

// == Composant
const HeaderHome = () => (
  <Card.Group itemsPerRow="3">
    <Card color="teal">
      <Card.Content
        style={{
          backgroundColor: '#AFEEEE',
        }}
      >
        <Card.Header
          as="h1"
          textAlign="center"
          style={{
            border: '1px solid teal',
            width: '2em',
            height: '2em',
            borderRadius: '50%',
            boxShadow: '.2em .1em .1em teal',
            color: 'teal',
          }}
        >1.
        </Card.Header>
        <Card.Header as="h2" textAlign="center" style={{ color: '#00CED1' }}>Poster</Card.Header>
      </Card.Content>
    </Card>
    <Card color="teal">
      <Card.Content
        style={{
          backgroundColor: '#AFEEEE',
        }}
      >
        <Card.Header
          as="h1"
          textAlign="center"
          style={{
            border: '1px solid teal',
            width: '2em',
            height: '2em',
            borderRadius: '50%',
            boxShadow: '.2em .1em .1em teal',
            color: 'teal',
          }}
        >2.
        </Card.Header>
        <Card.Header as="h2" textAlign="center" style={{ color: '#00CED1' }}> Echanger</Card.Header>
      </Card.Content>
    </Card>
    <Card color="teal">
      <Card.Content
        style={{
          backgroundColor: '#AFEEEE',
        }}
      >
        <Card.Header
          as="h1"
          textAlign="center"
          style={{
            border: '1px solid teal',
            width: '2em',
            height: '2em',
            borderRadius: '50%',
            boxShadow: '.2em .1em .1em teal',
            color: 'teal',
          }}
        >3.
        </Card.Header>
        <Card.Header as="h2" textAlign="center" style={{ color: '#00CED1' }}> Collaborer</Card.Header>
      </Card.Content>
    </Card>
  </Card.Group>
);

// == Export
export default HeaderHome;
