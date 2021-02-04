// == Import npm
import React from 'react';

// == IMPORTS COMPOSANTS
import {
  Icon,
  Grid,
  Step,
} from 'semantic-ui-react';

// == IMPORTS STYLES
import './headerHome.scss';
import { Link } from 'react-router-dom';

// == PRIMARY COMPONENT
const HeaderHome = () => (
  <Grid
    className="header-home"
    textAlign="center"
    padded="horizontally"
  >
    <Grid.Row
      className="header-home--row-computer-padded"
      only="computer"
    >
      <Step.Group
        className="steps-group--shadow"
        widths={3}
        size="large"
      >
        <Link
          to="/utilisateur/create"
          className="step"
          title="Poster"
        >
          <Icon
            name="write"
            className="icon-colors"
          />
          <Step.Content title="Poster" />
        </Link>
        <Link
          to="/utilisateur/projets"
          className="step"
          title="Echanger"
        >
          <Icon
            name="comments"
            className="icon-colors"
          />
          <Step.Content title="Echanger" />
        </Link>
        <Link
          to="/projets"
          className="step"
          title="Collaborer"
        >
          <Icon
            name="handshake"
            className="icon-colors"
          />
          <Step.Content title="Collaborer" />
        </Link>
      </Step.Group>
    </Grid.Row>
    <Grid.Row
      only="mobile"
      className="header-home--row-mobile-padded"
    >
      <Step.Group
        widths={3}
        size="tiny"
        unstackable
        className="steps-group--shadow"
      >
        <Link
          to="/utilisateur/create"
          className="step"
          title="Poster"
        >
          <Icon
            name="write"
            className="icon-colors"
          />
        </Link>
        <Link
          to="/utilisateur/projets"
          className="step"
          title="Echanger"
        >
          <Icon
            name="comments"
            className="icon-colors"
          />
        </Link>
        <Link
          to="/projets"
          className="step"
          title="Collaborer"
        >
          <Icon
            name="handshake"
            className="icon-colors"
          />
        </Link>
      </Step.Group>
    </Grid.Row>
  </Grid>
);

// == Export
export default HeaderHome;
