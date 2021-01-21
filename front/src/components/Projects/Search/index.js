// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Container, Button, Form, Grid, Item, FormField, Input,
} from 'semantic-ui-react';
// == IMPORTS CONTAINERS

// == STYLES
import './search.scss';

// == Composant
const Search = ({
  distance, visible, active, handleVisibility, handleChange, handleClick,
}) => (
  <Container className="search">
    <Item.Group>
      <Item>
        {/* titre */}
        <Item.Header as="h1">Effectuer une recherche</Item.Header>
        {/* localité search bar */}
        <FormField>
          <Input action={{ icon: 'search' }} placeholder="Search..." />
        </FormField>
        {/* range */}
        <Grid columns={2}>
          <Grid.Column as={Form}>
            <Form.Input
              label={`Range: ${distance}km`}
              min={1}
              max={10}
              name="distance"
              onChange={handleChange}
              step={1}
              type="range"
              value={distance}
            />
            <Form.Button
              content={visible ? 'Unmount' : 'Mount'}
              onClick={handleVisibility}
            />
          </Grid.Column>
        </Grid>
        {/* button Include archives */}
        <div>
          Inclure les projets archivés:
          <Button toggle active={active} onClick={handleClick}>
            Toggle
          </Button>
        </div>
        {/* bouton valider */}
        <Button positive>Valider</Button>
      </Item>
    </Item.Group>
  </Container>
);

// == PROP TYPES
Search.propTypes = {
  distance: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  handleChange: PropTypes.bool.isRequired,
  handleClick: PropTypes.bool.isRequired,
  handleVisibility: PropTypes.bool.isRequired,
};

// == Export
export default Search;
