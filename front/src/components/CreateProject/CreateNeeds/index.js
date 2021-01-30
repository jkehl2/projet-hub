// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Button, Header, Segment, Form, Grid, Checkbox,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == Composant

const CreateNeeds = ({
  titleNeed, descriptionNeed, setCreateNeed,
}) => (
  <Grid columns={2} divided>
    <Grid.Row>
      <Grid.Column verticalAlign="middle" textAlign="center" mobile={4} computer={2}>
        <Header>Liste des besoins</Header>
        <Form>
          <Button>Ajouter un besoin</Button>
          <Form.Input
            type="text"
            value={titleNeed}
            placeholder="titre"
            label="titre du besoin"
            onChange={(event) => {
              setCreateNeed({ titleNeed: event.target.value });
            }}
          />
          <Form.TextArea
            type="text"
            value={descriptionNeed}
            placeholder="description"
            label="nom du projet"
            onChange={(event) => {
              setCreateNeed({ descriptionNeed: event.target.value });
            }}
          />
          <Segment basic textAlign="right">
            <Button.Group>
              <Button positive>Valider</Button>
              <Button.Or />
              <Button>Annuler</Button>
            </Button.Group>
          </Segment>
          <Checkbox>{titleNeed}</Checkbox>
        </Form>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
CreateNeeds.propTypes = {
  titleNeed: PropTypes.string.isRequired,
  descriptionNeed: PropTypes.string.isRequired,
  setCreateNeed: PropTypes.func.isRequired,
};

// == Export
export default CreateNeeds;
