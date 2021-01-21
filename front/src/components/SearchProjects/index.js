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
const SearchProjects = ({ searchParams }) => {
  const { localite, perimeter } = searchParams;
  return (
    <Form className="search-project">
      <Grid>
        <Grid.Column width={16}>
          <Grid.Row>
            <Segment>
              <Form.Group>
                <Form.Input label="Localité" placeholder="adresse, code postale, ville" width={10} value={localite} />
                <Form.Input width={4} type="range" label="Périmètre" min={0} max={4} step={1} value={perimeter} />
                <Form.Input width={2} label="(km)" value={`${utils.perimeters[perimeter].value} km`} disabled />
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
  );
};
// == PROP TYPES
SearchProjects.propTypes = {
  searchParams: PropTypes.shape({
    localite: PropTypes.string.isRequired,
    perimeter: PropTypes.number.isRequired,
  }).isRequired,
};
// == Export
export default SearchProjects;
