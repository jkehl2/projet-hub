// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Form, Icon, Button, Segment, Label, Grid, Input,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './searchHome.scss';

// == Composant
const SearchHome = () => (

  <Form>
    <Grid>
      <Grid.Column width={16}>
        <Grid.Row>
          <Segment>
            <Form.Group>
              <Form.Input label="Localité" placeholder="adresse, code postale, ville" width={10} />
              <Form.Input width={4} type="range" label="Périmètre" min={0} max={5} step={1} />
              <Form.Input width={2} label="(km)" value="15km" disabled />
            </Form.Group>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Segment basic textAlign="center">
            <Button basic circular icon size="massive">
              <Icon name="search" color="orange" size="large" />
            </Button>
          </Segment>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  </Form>

);

// == Export
export default SearchHome;
