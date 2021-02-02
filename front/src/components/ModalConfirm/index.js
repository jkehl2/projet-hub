// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS
import {
  Modal,
  Button,
  Form,
  Segment,
} from 'semantic-ui-react';

// == Composant Profil
const ModalConfirmDelete = ({
  title,
  trigger,
  confirm,
  setConfirmation,
  handleAction,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        onClose={() => {
          setOpen(false);
          setConfirmation({ confirm: '' });
        }}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={trigger}
      >
        <Modal.Header>{`${title}`}</Modal.Header>
        <Modal.Content>
          <Form onSubmit={handleAction}>
            <Form.Input
              type="text"
              label="Saisissez CONFIRMER pour valider l'action"
              title="Saisissez CONFIRMER pour valider l'action"
              placeholder=""
              required
              value={confirm}
              onChange={(event) => {
                setConfirmation({ confirm: event.target.value });
              }}
            />
            <Segment basic compact textAlign="right">
              <Button.Group>
                <Button
                  negative
                  type="submit"
                  title="Confirmer"
                  content="Confirmer"
                  onClick={handleAction}
                />
                <Button.Or text="ou" />
                <Button
                  type="button"
                  title="Annuler"
                  onClick={(event) => {
                    event.preventDefault();
                    setOpen(false);
                    setConfirmation({ confirm: '' });
                  }}
                  content="Annuler"
                />
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
  confirm: PropTypes.string.isRequired,
  setConfirmation: PropTypes.func.isRequired,
  handleAction: PropTypes.func.isRequired,
};

// == Export
export default ModalConfirmDelete;
