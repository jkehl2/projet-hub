// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Button, Container, Header, Item, Segment, Form, Grid, Label,
} from 'semantic-ui-react';

// == IMPORTS UTILS
import utils from 'src/utils/perimeters.json';

// == IMPORTS CONTAINERS

// == STYLES
import './createProject.scss';

// == Composant
const CreateProject = ({ title, date, description, location,
setCreateProject, titleNeed, descriptionNeed, perimeter, handleSubmit }) => (
  <Container className="createProject">
    <Segment textAlign="left">
      {/* Titre */}
      <Header as="h1">Créer un projet</Header>
      <Form>
        {/*change order*/}
        <Form.Input
          type="text"
          label="nom du projet"
          title="nom du projet"
          placeholder="titre"
          required
          value={title}
          onChange={(event) => {
            setCreateProject({ title: event.target.value });
          }}
        />
        <Form.Input
          type="text"
          label="date d'expiration"
          title="date d'expiration"
          value={date}
          placeholder="date"
          onChange={(event) => {
            setCreateProject({ date: event.target.value });
          }}
        />
        <Form.TextArea
          type="text"
          label="description"
          value={description}
          placeholder="description"
          onChange={(event) => {
            setCreateProject({ description: event.target.value });
          }}
        />
        <Form.Input
          type="text"
          label="localité"
          value={location}
          placeholder="localité"
          onChange={(event) => {
            setCreateProject({ localité: event.target.value });
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
            setCreateProject({ perimeter: parseInt(event.target.value, 10) });
          }}
        />
        <div className="two wide field search-project__perimeter-label">
          <Label size="big" basic content={`${utils.perimeters[perimeter].value} km`} horizontal />
        </div>
        <Segment basic textAlign="right">
          <Form.Button onClick={handleSubmit}>Ajouter</Form.Button>
          <Button>Annuler</Button>
        </Segment>
      </Form>
    </Segment>
  </Container>
);

CreateProject.propTypes = {
  props: PropTypes.object.isRequired,
};

// == Export
export default CreateProject;
