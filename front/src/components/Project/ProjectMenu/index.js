// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS
import {
  Button,
  Menu,
} from 'semantic-ui-react';
import ModalConfirm from 'src/components/ModalConfirm';

// == STYLES
import './projectMenu.scss';

// == Composant
const ProjectMenu = ({
  confirm,
  setEditModeOn,
  setConfirmation,
  archiveProject,
  deleteProject,
}) => {
  const [state, setState] = useState({ activeItem: '' });
  const handleItemClick = (e, { name }) => {
    setState({ activeItem: name });
  };
  return (
    <>
      <Menu compact icon secondary attached="bottom">
        <Menu.Item
          name="Editer"
          active={state.activeItem === 'edit'}
          onClick={handleItemClick}
          fitted="horizontally"
        >
          <Button
            type="button"
            icon="edit"
            color="blue"
            title="Editer"
            onClick={(event) => {
              event.preventDefault();
              setEditModeOn();
            }}
          />
        </Menu.Item>

        <Menu.Item
          name="Archiver"
          active={state.activeItem === 'archive'}
          onClick={handleItemClick}
          fitted="horizontally"
        >
          <ModalConfirm
            title="Confirmer l'archivage de votre projet"
            trigger={<Button icon="archive" color="brown" title="Archiver" />}
            confirm={confirm}
            setConfirmation={setConfirmation}
            handleDelete={archiveProject}
          />
        </Menu.Item>

        <Menu.Item
          name="Supprimer"
          active={state.activeItem === 'delete'}
          onClick={handleItemClick}
          fitted="horizontally"
        >
          <ModalConfirm
            title="Confirmer la suppression de votre projet"
            trigger={<Button icon="trash" color="red" title="Supprimer" />}
            confirm={confirm}
            setConfirmation={setConfirmation}
            handleDelete={deleteProject}
          />
        </Menu.Item>
      </Menu>
    </>
  );
};
ProjectMenu.propTypes = {
  confirm: PropTypes.string.isRequired,
  setEditModeOn: PropTypes.func.isRequired,
  setConfirmation: PropTypes.func.isRequired,
  archiveProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
};

// == Export
export default ProjectMenu;
