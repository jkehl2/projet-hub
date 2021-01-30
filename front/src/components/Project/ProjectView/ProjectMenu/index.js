// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS

// == IMPORTS COMPOSANTS
import {
  Button,
  Menu,
} from 'semantic-ui-react';

// == STYLES
import './projectMenu.scss';

// == Composant
const ProjectMenu = (deleteConfirm, setConfirmation, deleteProject) => {
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
          <Button icon="edit" title="Editer" />
        </Menu.Item>

        <Menu.Item
          name="Archiver"
          active={state.activeItem === 'archive'}
          onClick={handleItemClick}
          fitted="horizontally"
        >
          <Button icon="archive" title="Archiver" />
        </Menu.Item>

        <Menu.Item
          name="Supprimer"
          active={state.activeItem === 'delete'}
          onClick={handleItemClick}
          fitted="horizontally"
        >
          <Button icon="trash" color="red" title="Supprimer" />
        </Menu.Item>
      </Menu>
    </>
  );
};
ProjectMenu.propTypes = {
  deleteConfirm: PropTypes.string.isRequired,
  setConfirmation: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
};

// == Export
export default ProjectMenu;
