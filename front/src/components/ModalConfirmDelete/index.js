// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS
import { Modal, Button, Form, Segment } from 'semantic-ui-react';

// == Composant Profil
const ModalConfirmDelete = ({
  title,
  trigger,
  deleteConfirm,
  setConfirmation,
  handleDelete,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        onClose={() => {
          setOpen(false);
          setConfirmation({ deleteConfirm: '' });
        }}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={trigger}
      >
        <Modal.Header>{`${title}`}</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleDelete}>
            <Form.Input
              type="text"
              label="Saisissez CONFIRMER pour valider l'action"
              title="Saisissez CONFIRMER pour valider l'action"
              placeholder=""
              required
              value={deleteConfirm}
              onChange={(event) => {
                setConfirmation({ deleteConfirm: event.target.value });
              }}
            />
            <Segment textAlign="right">
              <Button.Group>
                <Form.Button negative type="submit">Confirmer</Form.Button>
                <Button.Or text="ou" />
                <Button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    setOpen(false);
                    setConfirmation({ deleteConfirm: '' });
                  }}
                >Annuler
                </Button>
              </Button.Group>
            </Segment>
          </Form>
        </Modal.Content>
      </Modal>
    </>
  );
};

ModalConfirmDelete.propTypes = {
  title: PropTypes.string.isRequired,
  trigger: PropTypes.object.isRequired,
  deleteConfirm: PropTypes.string.isRequired,
  setConfirmation: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

// == Export
export default ModalConfirmDelete;
