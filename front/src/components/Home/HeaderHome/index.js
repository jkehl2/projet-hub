// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Card, Image,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './headerHome.scss';

// == Composant
const HeaderHome = () => (
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
);

// == Export
export default HeaderHome;
