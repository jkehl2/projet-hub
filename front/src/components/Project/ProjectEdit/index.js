// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './projectEdit.scss';

// == Composant
const ProjectEdit = ({ project }) => (
  <Segment basic>
    <Form>
      <Form.Input placeholder="Titre du projet" label="Titre" required value={project.title} />
      <Form.Input type="date" label="Date d'échéance" required value={project.expireDate} />
      <Form.TextArea label="Description" placeholder="Description du projet" required value={project.description} />
      <Segment>
        <Header as="h3">Liste des besoins</Header>
        <Form.Input label="Titre" placeholder="Titre du besoin" required />
        <Form.TextArea label="Description" placeholder="Description courte du besoin" required />
        <Segment basic textAlign="right"><Form.Button>Ajouter</Form.Button></Segment>
        <Grid columns={2} divided>
          {project.needs.map((need) => (
            <Grid.Row key={need.id}>
              <Grid.Column verticalAlign="middle" textAlign="center" mobile={4} computer={2}>
                <Button basic icon>
                  <Icon name="trash" color="red" />
                </Button>
              </Grid.Column>
              <Grid.Column mobile={12} computer={14}>
                <Header as="h3">{`${need.title}`}</Header>
                <p>{`${need.description}`}</p>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </Segment>
      <Segment basic textAlign="right">
        <Button.Group>
          <Button positive>Valider</Button>
          <Button.Or />
          <Button>Annuler</Button>
        </Button.Group>
      </Segment>
    </Form>
  </Segment>
);
// == PROP TYPES
ProjectEdit.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    expireDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    needs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })).isRequired,
  }).isRequired,
};

// == Export
export default ProjectEdit;
