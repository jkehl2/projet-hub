// == Import npm
import React, { useState } from 'react';

// == IMPORTS COMPOSANTS
import {
  Button,
  Icon, Menu, Segment,
} from 'semantic-ui-react';

// == IMPORTS CONTAINERS

// == STYLES
import './projectMenu.scss';

// == Functions

// == Composant
const ProjectMenu = () => {
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

// == Export
export default ProjectMenu;
