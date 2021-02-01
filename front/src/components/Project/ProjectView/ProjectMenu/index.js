// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS
import {
  Button,
  Menu,
} from 'semantic-ui-react';
import ModalConfirmDelete from 'src/components/ModalConfirmDelete';

// == STYLES
import './projectMenu.scss';

// == Composant
const ProjectMenu = ({ deleteConfirm, setConfirmation, archiveProject, deleteProject }) => {
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
          <Button icon="edit" color="blue" title="Editer" />
        </Menu.Item>

        <Menu.Item
          name="Archiver"
          active={state.activeItem === 'archive'}
          onClick={handleItemClick}
          fitted="horizontally"
        >
          <ModalConfirmDelete
            title="Confirmer l'archivage de votre projet"
            trigger={<Button icon="archive" color="brown" title="Archiver" />}
            deleteConfirm={deleteConfirm}
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
          <ModalConfirmDelete
            title="Confirmer la suppression de votre projet"
            trigger={<Button icon="trash" color="red" title="Archiver" />}
            deleteConfirm={deleteConfirm}
            setConfirmation={setConfirmation}
            handleDelete={deleteProject}
          />
        </Menu.Item>
      </Menu>
    </>
  );
};
ProjectMenu.propTypes = {
  deleteConfirm: PropTypes.string.isRequired,
  setConfirmation: PropTypes.func.isRequired,
  archiveProject: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
};

// == Export
export default ProjectMenu;
