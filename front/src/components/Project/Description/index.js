// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Icon, Image, Item, Label,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './description.scss';

// == Composant
const Description = ({ isFavorite }) => (

  <Item.Group>
    <Item>
      <Item.Image size="medium" src="https://react.semantic-ui.com/images/wireframe/image.png" />
      <Item.Content>
        <Item.Header as="h1">
          <span>Un super projet</span>
          {isFavorite ? <Icon name="star" /> : <Icon name="star outline" />}
        </Item.Header>
        <Item.Meta>
          <Image avatar spaced="right" src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
          <Label as="a" href="mailto:george.orwell@localhub.fr">
            <span>George ORWEL</span>
            <Label.Detail>george.orwell@localhub.fr</Label.Detail>
          </Label>
        </Item.Meta>
        <Item.Description>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam praesentium non enim eligendi sapiente atque.
            Sit impedit modi voluptates sequi ex iste, amet,
            reiciendis ab vero corrupti est porro laboriosam?
          </p>
        </Item.Description>
        <Item.Extra>
          <Label>
            Date expiration
            <Label.Detail>20 décembre 2021</Label.Detail>
          </Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>

);
// == PROP TYPES
Description.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
};

// == Export
export default Description;
