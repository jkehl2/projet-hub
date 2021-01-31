// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// IMPORT DATE UTIL
import dateFormater from 'src/utils/dateFormater';

// == IMPORTS COMPOSANTS
import {
  Button,
  Form,
  Segment,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './projectEdit.scss';

// == Composant
const ProjectForm = ({
  title,
  expiration_date,
  description,
  location,
  syncProjectFields,
  setProjectField,
  handleSubmit,
  handleCancel,
}) => {
  useEffect(() => {
    syncProjectFields();
  }, []);
  return (
    <Segment basic>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          type="text"
          label="Titre du projet"
          title="Titre du projet"
          placeholder="Un potager urbain - Place de la Duchesse Anne"
          required
          value={title}
          onChange={(event) => {
            setProjectField({ title: event.target.value });
          }}
        />
        <Form.Input
          type="text"
          label="Localité du projet (adresse, ville, code postale)"
          title="Localité du projet"
          placeholder="Place de la Duchesse Anne 44000 NANTES"
          required
          value={location}
        />
        <Form.TextArea
          label="Description du projet"
          title="Description du projet"
          placeholder="Les potagers urbains se définissent simplement comme la culture de légumes ..."
          required
          value={description}
        />
        <Form.Input
          type="date"
          label="Date d'échéance"
          title="Date d'échéance"
          placeholder={dateFormater(new Date().getTime() + (60 * 60 * 24 * 1000 * 30))}
          min={dateFormater(new Date())}
          max={dateFormater(new Date().getTime() + (60 * 60 * 24 * 1000 * 900))}
          required
          value={dateFormater(expiration_date)}
        />
        <Segment basic compact textAlign="right">
          <Button.Group>
            <Form.Button
              positive
              type="submit"
              content="Confirmer"
              title="Confirmer"
            />
            <Button.Or text="ou" />
            <Button
              type="button"
              content="Annuler"
              title="Annuler"
              onClick={handleCancel}
            />
          </Button.Group>
        </Segment>
      </Form>
    </Segment>
  );
};
// == PROP TYPES
ProjectForm.propTypes = {
  title: PropTypes.string.isRequired,
  expiration_date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  syncProjectFields: PropTypes.func.isRequired,
  setProjectField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

// == Export
export default ProjectForm;
