// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Button,
  Form,
  Image,
  Segment,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './projectEdit.scss';

// == Composant
const ProjectEdit = ({
  title,
  expireDate,
  description,
  location,
  avatar,
  handleFileUpload,
  setProjectField,
  handleSubmit,
  handleCancel,
}) => (
  <Segment basic>
    <Form onSubmit={handleSubmit}>
      <Form.Input
        placeholder="Titre du projet"
        label="Titre"
        required
        value={project.title}
      />
      <Form.Input
        type="date"
        label="Date d'échéance"
        required
        value={project.expireDate}
      />
      <Form.TextArea
        label="Description"
        placeholder="Description du projet"
        required
        value={project.description}
      />
      <Segment basic compact textAlign="right">
        <Button.Group>
          <Form.Button
            positive
            type="submit"
            content="Confirmer"
          />
          <Button.Or text="ou" />
          <Button
            type="button"
            content="Annuler"
            onClick={handleCancel}
          />
        </Button.Group>
      </Segment>
    </Form>
  </Segment>
);
// == PROP TYPES
ProjectEdit.propTypes = {
  title: PropTypes.string.isRequired,
  expireDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  uploadAvatar: PropTypes.func.isRequired,
  setProjectField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

// == Export
export default ProjectEdit;
