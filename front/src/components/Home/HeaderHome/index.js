// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Card, Icon,
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
          background: 'rgb(2,0,36)',
          background: 'radial-gradient(circle, rgba(2,0,36,1) 9%, rgba(109,160,177,1) 49%, rgba(0,212,255,1) 76%)',
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
        <Card.Header as="h2" textAlign="center" style={{ color: '#00CED1' }}>
          <Icon name="write" />
          Poster
        </Card.Header>
      </Card.Content>
    </Card>
    <Card color="teal">
      <Card.Content
        style={{
          background: 'rgb(2,0,36)',
          background: 'radial-gradient(circle, rgba(2,0,36,1) 9%, rgba(109,160,177,1) 49%, rgba(0,212,255,1) 76%)',
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
        <Card.Header as="h2" textAlign="center" style={{ color: '#00CED1' }}>
          <Icon name="comments" />
          Echanger
        </Card.Header>
      </Card.Content>
    </Card>
    <Card color="teal">
      <Card.Content
        style={{
          background: 'rgb(2,0,36)',
          background: 'radial-gradient(circle, rgba(2,0,36,1) 9%, rgba(109,160,177,1) 49%, rgba(0,212,255,1) 76%)',
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
        <Card.Header as="h2" textAlign="center" style={{ color: '#00CED1' }}>
          <Icon name="handshake" />
          Collaborer
        </Card.Header>
      </Card.Content>
    </Card>
  </Card.Group>
);

// == Export
export default HeaderHome;
