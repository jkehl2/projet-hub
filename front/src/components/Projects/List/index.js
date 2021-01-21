// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Container, Item, Icon, Label,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './list.scss';

// == Composant
const List = ({
  isArchived, isAuthor, isFavorite, Timestamp,
}) => (
  <Container className="list">
    <Item.Group>
      <Item>
        {/* image */}
        <Item.Image src="/images/wireframe/image.png" size="tiny" verticalAlign="top" />

        <Item.Header as="h3">
          <span>Titre du projet</span>

          {/* Nom de l'auteur */}

          <Item.Author>
            <p>Lucifer Morningstar</p>
          </Item.Author>

          {/* date et heure de la création du projet */}

          <Timestamp date={Date} />

          {/* bouton archives */}

          {isArchived && <Label as="span" tag color="brown" attached="top right">Archivée</Label>}

          {/* étoile favoris */}

          {!isAuthor && (isFavorite ? <Icon name="star" /> : <Icon name="star outline" />)}

        </Item.Header>
        <Item.Adress>

          {/* address */}
          <p>666 hell street, Nowhere</p>

        </Item.Adress>
      </Item>
    </Item.Group>
  </Container>
);

// == PROP TYPES
List.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  isArchived: PropTypes.bool.isRequired,
  isAuthor: PropTypes.bool.isRequired,
  Timestamp: PropTypes.string.isRequired,
};
// == Export
export default List;
