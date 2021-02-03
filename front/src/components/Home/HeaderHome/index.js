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
import { Link } from 'react-router-dom';

// == Composant
const HeaderHome = () => (
  <Grid textAlign="center" padded="horizontally" className="header-home">
    <Grid.Row only="computer" className="header-home--row-computer-padded">
      <Step.Group widths={3} size="large">
        <Link to="/utilisateur/create" className="step" title="Poster">
          <Icon className="icon-step " name="write" />
          <Step.Content title="Poster" />
        </Link>
        <Link to="/utilisateur/projets" className="step" title="Echanger">
          <Icon className="icon-step " name="comments" />
          <Step.Content title="Echanger" />
        </Link>
        <Link to="/projets" className="step" title="Collaborer">
          <Icon  className="icon-step " name="handshake" />
          <Step.Content title="Collaborer" />
        </Link>
      </Step.Group>
    </Grid.Row>
    <Grid.Row only="mobile" className="header-home--row-mobile-padded">
      <Step.Group widths={3} size="tiny" unstackable>
        <Link to="/utilisateur/create" className="step" title="Poster">
          <Icon className="icon-step " name="write" />
        </Link>
        <Link to="/utilisateur/projets" className="step" title="Echanger">
          <Icon  className="icon-step " name="comments" />
        </Link>
        <Link to="/projets" className="step" title="Collaborer">
          <Icon  className="icon-step " name="handshake" />
        </Link>
      </Step.Group>
    </Grid.Row>
  </Grid>
);

// == Export
export default HeaderHome;
