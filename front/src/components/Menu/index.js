// == IMPORT NPM
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORT COMPOSANTS
import {
  Dropdown, Grid, Icon, Label, Menu as MenuUi,
} from 'semantic-ui-react';

// == IMPORT STYLES
import './menu.scss';

const DropDownTrigger = ({ logged, userName }) => (
  <>
    {logged && (
      <Grid padded="horizontally">
        <Grid.Row only="computer" stretched>
          <Label color="black"><Icon name="circle" color="green" size="small" />{`${userName}`}</Label>
        </Grid.Row>
      </Grid>
    )}
    <Icon name="bars" size="large" />
  </>
);
DropDownTrigger.propTypes = {
  logged: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
};

const Menu = ({ logged, userName }) => (
  <MenuUi attached="top" borderless compact inverted>
    <MenuUi.Menu position="left">
      <MenuUi.Item><Icon name="hubspot" size="huge" /></MenuUi.Item>
      <MenuUi.Header as="h1" className="ui item compact menu__header">Local-Hub</MenuUi.Header>
    </MenuUi.Menu>
    <MenuUi.Menu position="right" size="large">
      <Dropdown item trigger={DropDownTrigger({ logged, userName })} icon={null} simple position="right">
        <Dropdown.Menu>
          <Dropdown.Item>Rechercher</Dropdown.Item>
          {logged && (
          <> <Dropdown.Divider />
            <Dropdown.Item>Profil</Dropdown.Item>
            <Dropdown.Item>Mes projets</Dropdown.Item>
            <Dropdown.Item>Mes favoris</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Déconnexion</Dropdown.Item>
          </>
          )}
          {!logged && (
          <> <Dropdown.Divider />
            <Dropdown.Item>Connexion</Dropdown.Item>
            <Dropdown.Item>S'enregistrer</Dropdown.Item>
          </>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </MenuUi.Menu>
  </MenuUi>
);

Menu.propTypes = {
  logged: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Menu;
