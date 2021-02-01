// == Import npm
import React, { useEffect } from 'react';
import PropTypes, { shape } from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Button,
  Form,
  Grid,
  Segment,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './projectEdit.scss';

// == Composant
const NeedsForm = ({
  needs,
  title,
  description,
  syncNeedsArray,
  cleanNewNeedFields,
  syncNewNeedFields,
  syncEditNeedFields,
  handleAddNeed,
  DeleteNeedById,
  EditNeedById,
}) => {
  useEffect(() => {
    syncNeedsArray();
    cleanNewNeedFields();
  }, []);
  return (
    <Segment basic>
      <Form onSubmit={handleAddNeed}>
        <Form.Input
          type="text"
          label="Titre du besoin"
          title="Titre du besoin"
          placeholder="Titre de votre besoin"
          required
          value={title}
          onChange={(event) => {
            syncNewNeedFields({ title: event.target.value });
          }}
        />
        <Form.TextArea
          label="Description du besoin"
          title="Description du besion"
          placeholder="Description de votre besoin"
          maxlength={150}
          spellcheck
          cols={50}
          wrap="soft"
          required
          value={description}
          onChange={(event) => {
            syncNewNeedFields({ description: event.target.value });
          }}
        />
        <Segment basic compact textAlign="right">
          <Form.Button
            positive
            type="submit"
            content="Confirmer"
            title="Confirmer"
            onClick={handleAddNeed}
          />
        </Segment>
      </Form>
      <Grid divided>
        {needs.map((need) => (
          <Grid.Row key={need.id}>
            <Form onSubmit={(event) => {
              event.preventDefault();
              EditNeedById(need.id);
            }}
            >
              <Grid columns={2} divided>
                <Grid.Column width={12}>
                  <Form.Input
                    type="text"
                    label="Titre du besoin"
                    title="Titre du besoin"
                    placeholder="Titre de votre besoin"
                    required
                    value={title}
                    onChange={(event) => {
                      syncEditNeedFields({
                        id: need.id,
                        payload: {
                          title: event.target.value,
                        },
                      });
                    }}
                  />
                  <Form.TextArea
                    label="Description du besion"
                    title="Description du besion"
                    placeholder="Description de votre besoin"
                    maxlength={150}
                    spellcheck
                    cols={50}
                    wrap="soft"
                    required
                    value={description}
                    onChange={(event) => {
                      syncEditNeedFields({
                        id: need.id,
                        payload: {
                          description: event.target.value,
                        },
                      });
                    }}
                  />
                </Grid.Column>
                <Grid.Column width={4} verticalAlign="middle" textAlign="center">
                  <Button.Group>
                    <Form.Button
                      positive
                      type="submit"
                      content="Editer"
                      title="Editer"
                      onClick={(event) => {
                        event.preventDefault();
                        EditNeedById(need.id);
                      }}
                    />
                    <Button.Or text="ou" />
                    <Button
                      type="button"
                      content="Supprimer"
                      title="Supprimer"
                      onClick={(event) => {
                        event.preventDefault();
                        DeleteNeedById(need.id);
                      }}
                    />
                  </Button.Group>
                </Grid.Column>
              </Grid>
            </Form>
          </Grid.Row>
        ))}
      </Grid>
    </Segment>
  );
};
// == PROP TYPES
NeedsForm.propTypes = {
  needs: PropTypes.arrayOf(shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  syncNeedsArray: PropTypes.func.isRequired,
  cleanNewNeedFields: PropTypes.func.isRequired,
  syncNewNeedFields: PropTypes.func.isRequired,
  syncEditNeedFields: PropTypes.func.isRequired,
  handleAddNeed: PropTypes.func.isRequired,
  DeleteNeedById: PropTypes.func.isRequired,
  EditNeedById: PropTypes.func.isRequired,
};

// == Export
export default NeedsForm;
