// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
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
    <Segment basic>
      <Menu compact icon="labeled" secondary floated="right">
        <Menu.Item
          name="Editer"
          active={state.activeItem === 'edit'}
          onClick={handleItemClick}
        >
          <Icon name="edit" />
          Editer
        </Menu.Item>

        <Menu.Item
          name="Archiver"
          active={state.activeItem === 'archive'}
          onClick={handleItemClick}
        >
          <Icon name="archive" />
          Archiver
        </Menu.Item>

        <Menu.Item
          name="Supprimer"
          active={state.activeItem === 'delete'}
          onClick={handleItemClick}
        >
          <Icon name="trash" color="red" />
          Supprimer
        </Menu.Item>
      </Menu>
    </Segment>
  );
};
// == PROP TYPES
ProjectMenu.propTypes = {
};

// == Export
export default ProjectMenu;
