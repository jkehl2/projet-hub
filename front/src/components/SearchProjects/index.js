// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Form, Icon, Button, Segment, Grid,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == IMPORTS UTILS
import utils from 'src/utils/perimeters.json';

// == STYLES
import './searchProjects.scss';

// == Composant
const SearchProjects = ({
  localite, perimeter, archived, setSearch, handleSubmit,
}) => (
  <Form
    className="search-project"
    onSubmit={handleSubmit()}
  >
    <Grid>
      <Grid.Column width={16}>
        <Grid.Row>
          <Segment>
            <Form.Group>
              <Form.Input
                label="Localité"
                placeholder="adresse, code postale, ville"
                width={10}
                value={localite}
                onChange={(event) => {
                  setSearch({ localite: event.target.value });
                }}
              />
              <Form.Input
                width={4}
                type="range"
                label="Périmètre"
                min={0}
                max={4}
                step={1}
                value={perimeter}
                onChange={(event) => {
                  setSearch({ perimeter: parseInt(event.target.value, 10) });
                }}
              />
              <Form.Input width={2} label="(km)" value={`${utils.perimeters[perimeter].value} km`} disabled />
            </Form.Group>
            <Form.Radio
              toggle
              label="Inclure les projets archivés ?"
              checked={archived}
              onChange={(_) => {
                setSearch({ archived: !archived });
              }}
            />
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Segment basic textAlign="center">
            <Button basic circular icon size="massive" type="submit">
              <Icon name="search" color="orange" size="large" />
            </Button>
          </Segment>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  </Form>
);
// == PROP TYPES
SearchProjects.propTypes = {
  localite: PropTypes.string.isRequired,
  perimeter: PropTypes.number.isRequired,
  archived: PropTypes.bool.isRequired,
  setSearch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
// == Export
export default SearchProjects;
