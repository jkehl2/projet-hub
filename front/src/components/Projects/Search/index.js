// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Container, Button, Form, Grid, Item, FormField, Input, Icon, Segment,
} from 'semantic-ui-react';
// == IMPORTS CONTAINERS

// == STYLES
import './search.scss';

// == Composant
const Search = ({
  active, handleClick,
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
        <Form>
          <Grid>
            <Grid.Column width={16}>
              <Grid.Row>
                <Segment>
                  <Form.Group>
                    <Form.Input label="Localité" placeholder="adresse, code postale, ville" width={10} />
                    <Form.Input width={4} type="range" label="Périmètre" min={0} max={5} step={1} />
                    <Form.Input width={2} label="(km)" value="15km" disabled />
                  </Form.Group>
                </Segment>
              </Grid.Row>
              <Grid.Row>
                <Segment basic textAlign="center">
                  <Button basic circular icon size="massive">
                    <Icon name="search" color="orange" size="large" />
                  </Button>
                </Segment>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Form>
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
  active: PropTypes.bool.isRequired,
  handleClick: PropTypes.bool.isRequired,
};

// == Export
export default Search;
