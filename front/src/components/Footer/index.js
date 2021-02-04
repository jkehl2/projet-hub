// == IMPORT NPM
import React from 'react';

// == IMPORT COMPOSANTS
import {
  Icon,
  Segment,
  Grid,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == IMPORT STYLES
import './footer.scss';

const Footer = () => (
  <Segment className="footer" attached="bottom" compact textAlign="center">
    <Grid centered className="footer--icon">

      {/* COMPUTER PART */}
      <Grid.Row only="computer">
        <Link to="/equipe" title="L'équipe Local-Hub"><Icon name="code" size="large" inverted /></Link>
        <Link className="footer--link-white" to="/mentionsLegales" title="mentions légales"><span className="footer--padded">mentions légales</span></Link>
      </Grid.Row>

      {/* MOBILE PART */}
      <Grid.Row only="mobile">
        <Link to="/equipe" title="L'équipe Local-Hub"><Icon name="code" size="small" inverted /></Link>
        <Link className="footer--link-white" to="/mentionsLegales" title="mentions légales"><span className="footer--padded">mentions légales</span></Link>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Footer;
