// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes, { shape } from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Modal,
  Segment,
} from 'semantic-ui-react';

// == STYLES
import './needForm.scss';

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
  const [open, setOpen] = useState(false);
  useEffect(() => {
    syncNeedsArray();
    cleanNewNeedFields();
  }, []);
  return (
    <Segment>
      <Header size="medium" content="Editer la liste de vos besoins" subheader="Ajouter, supprimer, modifier un besoin" />
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
          maxLength={150}
          spellCheck
          cols={50}
          wrap="soft"
          required
          value={description}
          onChange={(event) => {
            syncNewNeedFields({ description: event.target.value });
          }}
        />
        <Segment className="need-form--alignRight" basic compact textAlign="right">
          <Button
            className="add-button"
            type="submit"
            title="Ajouter un besoin"
            content="Ajouter"
            onClick={handleAddNeed}
          />
        </Segment>
      </Form>
      <Grid divided="vertically" padded="horizontally" stackable centered>
        {needs.map((need) => (
          <Grid.Row key={need.id}>
            <Form onSubmit={(event) => {
              event.preventDefault();
              EditNeedById(need.id);
            }}
            >
              <Grid columns={2} divided stackable centered>
                <Grid.Column width={12}>
                  <Form.Input
                    type="text"
                    label="Titre du besoin"
                    title="Titre du besoin"
                    placeholder="Titre de votre besoin"
                    required
                    value={need.title}
                    onChange={(event) => {
                      syncEditNeedFields(
                        need.id,
                        {
                          title: event.target.value,
                        },
                      );
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
                    value={need.description}
                    onChange={(event) => {
                      syncEditNeedFields(
                        need.id,
                        {
                          description: event.target.value,
                        },
                      );
                    }}
                  />
                </Grid.Column>
                <Grid.Column width={4} verticalAlign="middle" textAlign="center">
                  <Button.Group>
                    <Button
                    className="modify-button"
                      type="submit"
                      title="Editer"
                      content="Editer"
                      onClick={(event) => {
                        event.preventDefault();
                        EditNeedById(need.id);
                      }}
                    />
                    <Button.Or text="ou" />
                    <Modal
                      basic
                      onClose={() => {
                        setOpen(false);
                      }}
                      onOpen={() => setOpen(true)}
                      size="small"
                      open={open}
                      trigger={(
                        <Button
                          negative
                          type="button"
                          title="Supprimer"
                          content="Supprimer"
                        />
                      )}
                    >
                      <Header icon>
                        <Icon name="trash" />
                        Supprimer le besoin
                      </Header>
                      <Modal.Content>
                        <p>
                          Voules-vous vraiment supprimer ce besoin ?
                        </p>
                      </Modal.Content>
                      <Modal.Actions>
                        <Button.Group>
                          <Button
                            negative
                            type="button"
                            title="Confirmer"
                            content="Confirmer"
                            onClick={(event) => {
                              event.preventDefault();
                              setOpen(false);
                              DeleteNeedById(need.id);
                            }}
                          />
                          <Button.Or text="ou" />
                          <Button
                            type="button"
                            title="Annuler"
                            onClick={(event) => {
                              event.preventDefault();
                              setOpen(false);
                            }}
                            content="Annuler"
                          />
                        </Button.Group>
                      </Modal.Actions>
                    </Modal>

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
