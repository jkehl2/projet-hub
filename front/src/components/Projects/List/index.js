// == Import npm
import React from 'react';

// == IMPORTS COMPOSANTS
import {
  Container, Image,
} from 'semantic-ui-react';
// == IMPORTS CONTAINERS

// == STYLES
import './list.scss';

// == Composant
const List = () => (
  <Container className="list">
  {/* image */}
    <Image src="/images/wireframe/image.png" size="tiny" verticalAlign="top" /> <span>Titre du projet</span>
    <Divider />
    <Image src="/images/wireframe/image.png" size="tiny" verticalAlign="middle" />{' '}
    <span>Titre du projet</span>
    <Divider />
    <Image src="/images/wireframe/image.png" size="tiny" verticalAlign="bottom" />{' '}
    <span>Titre du projet</span>
  {/* bouton archives */}
  {/* étoile favoris */}
  {/* address */}
  </Container>
);

// == Export
export default List;
