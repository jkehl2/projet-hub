/* eslint-disable camelcase */
// == IMPORTS PACKAGES
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPONENT
import {
  Button,
  Container,
  Header,
  Segment,
  Form,
} from 'semantic-ui-react';

// == IMPORT UTILITARY
// == - DATE FORMATER : ISO TO HTML DATE FORMAT
import dateFormater from 'src/utils/dateHTMLFormater';

// == STYLES
import './createProject.scss';

// == PRIMARY COMPONENT
const CreateProject = ({
  title,
  expiration_date,
  description,
  location,
  cleanProjectFields,
  setProjectField,
  handleSubmit,
  handleCancel,
}) => {
  useEffect(() => {
    cleanProjectFields();
    return () => {
      cleanProjectFields();
    };
  }, []);
  return (
    <Container className="create-project">
      <Segment textAlign="left">

        {/* PAGE TITLE */}
        <Header
          as="h1"
          content="Proposer un nouveau projet"
          textAlign="center"
          dividing
          subheader="Décrivez votre projet en détail"
        />

        {/* INPUT PROJECT TITLE */}
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

          {/* INPUT PROJECT TARGET LOCATION */}
          <Form.Input
            type="text"
            label="Localité du projet (adresse, ville, code postale)"
            title="Localité du projet"
            placeholder="Place de la Duchesse Anne 44000 NANTES"
            required
            value={location}
            onChange={(event) => {
              setProjectField({ location: event.target.value });
            }}
          />

          {/* INPUT PROJECT DESCRIPTION */}
          <Form.TextArea
            label="Description du projet"
            title="Description du projet"
            placeholder="Les potagers urbains se définissent simplement comme la culture de légumes ..."
            maxlength={700}
            spellcheck
            cols={100}
            wrap="soft"
            value={description}
            onChange={(event) => {
              setProjectField({ description: event.target.value });
            }}
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
            onChange={(event) => {
              setProjectField({ expiration_date: event.target.value });
            }}
          />

          <Segment basic textAlign="right">
            <Button.Group>
              <Button
                className="create-button"
                type="submit"
                title="Créer votre projet"
                content="Créer"
                onClick={handleSubmit}
              />

              <Button.Or text="ou" />

              <Button
                type="button"
                title="Annuler"
                content="Annuler"
                onClick={handleCancel}
              />
            </Button.Group>
          </Segment>

        </Form>
      </Segment>
    </Container>
  );
};

CreateProject.propTypes = {
  title: PropTypes.string.isRequired,
  expiration_date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  cleanProjectFields: PropTypes.func.isRequired,
  setProjectField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

// == Export
export default CreateProject;
