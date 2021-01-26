// == IMPORT NPM
import React from 'react';

// == IMPORT COMPOSANTS
import {
  Icon, Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == IMPORT STYLES
import './footer.scss';

const Footer = () => (
  <Segment className="footer" attached="bottom" compact inverted textAlign="center">
    <Link to="/equipe"><Icon name="code" size="large" /></Link>
  </Segment>
);

export default Footer;
