// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Button, Container, Header, Segment, Form, Label,
} from 'semantic-ui-react';

// == IMPORTS UTILS
import utils from 'src/utils/perimeters.json';

// IMPORT DATE UTIL
import dateFormater from 'src/utils/dateHTMLFormater';

// == IMPORTS CONTAINERS

// == STYLES
import './createProject.scss';

// == Composant
const CreateProject = ({
  title, expiration_date, description, location,
  setCreateProject, perimeter, handleSubmit,
}) => (
  <Container className="createProject">
    <Segment textAlign="left">
      {/* Titre */}
      <Header as="h1">Créer un projet !</Header>
      <Form>
        <Form.Input
          type="text"
          label="Titre du projet"
          title="nom du projet"
          placeholder="titre"
          required
          value={title}
          onChange={(event) => {
            setCreateProject({ title: event.target.value });
          }}
        />
        <Form.Input
          type="date"
          label="Date d'expiration"
          title="date d'expiration"
          placeholder={dateFormater(new Date().getTime() + (60 * 60 * 24 * 1000 * 30))}
          min={dateFormater(new Date())}
          max={dateFormater(new Date().getTime() + (60 * 60 * 24 * 1000 * 900))}
          required
          value={dateFormater(expiration_date)}
          onChange={(event) => {
            setCreateProject({ expiration_date: event.target.value });
          }}
        />
        <Form.TextArea
          type="text"
          label="description"
          title="Description du projet"
          placeholder="description"
          required
          value={description}
          onChange={(event) => {
            setCreateProject({ description: event.target.value });
          }}
        />
        <Form.Input
          type="text"
          label="Localité"
          title="localité"
          placeholder="localité"
          required
          value={location}
          onChange={(event) => {
            setCreateProject({ location: event.target.value });
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
          <Form.Button positive onClick={handleSubmit}>Valider</Form.Button>
          <Button negative>Annuler</Button>
        </Segment>
      </Form>
    </Segment>
  </Container>
);

CreateProject.propTypes = {
  title: PropTypes.string.isRequired,
  expiration_date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  setCreateProject: PropTypes.func.isRequired,
  perimeter: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

// == Export
export default CreateProject;
