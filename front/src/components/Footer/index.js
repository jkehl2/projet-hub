// == IMPORT NPM
import React from 'react';

// == IMPORT COMPOSANTS
import {
  Grid,
} from 'semantic-ui-react';

// == IMPORT STYLES
import './footer.scss';
import { Link } from 'react-router-dom';

// == FOOTER CONTENT
const Footer = () => (
  <Grid columns="equal">
    <Grid.Row color="olive">
      <Grid.Column TextAlign="center">
        <Link to="/equipe">L'équipe</Link>
      </Grid.Column>
      <Grid.Column TextAlign="center">
        <Link to="/mentionsLegales">Mention légales</Link>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Footer;
