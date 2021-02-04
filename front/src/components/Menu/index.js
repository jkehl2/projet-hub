// == IMPORT PACKAGES
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORT COMPONENTS
import {
  Dropdown,
  Grid,
  Header,
  Icon,
  Label,
  Menu as MenuUi,
} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

// == IMPORT STYLES
import './menu.scss';

// DROPDOWN TRIGGER - SHOW USER CONNECTED WIDE SCREEN MODE, HIDE OTHERWISE
const DropDownTrigger = ({ logged, userName }) => (
  <>
    {logged && (
      <Grid padded="horizontally">
        <Grid.Row only="mobile" stretched>
          <Icon className="menu--connect-label--icon" name="circle" color="green" size="small" />
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

// MENU COMPONENT
const Menu = ({ logged, userName, handleDisconnect }) => (
  <MenuUi className="menu menu--shadow" attached="top" borderless compact inverted>
    <MenuUi.Menu position="left">
      <Link className="item" to="/">
        <Grid padded="horizontally">
          <Grid.Row only="computer"><Header icon="hubspot" size="huge" content="Local-Hub" inverted /></Grid.Row>
          <Grid.Row only="mobile"><Header icon="hubspot" size="small" content="Local-Hub" inverted /></Grid.Row>
        </Grid>
      </Link>
    </MenuUi.Menu>
    <MenuUi.Menu position="right" size="large">
      <MenuUi.Item>
        {logged && (
          <Grid padded="horizontally">
            <Grid.Row only="computer" stretched>
              <Link to="/utilisateur/profil"><Label className="menu--connect-label"><Icon className="menu--connect-label--icon" name="circle" size="small" />{`${userName}`}</Label></Link>
            </Grid.Row>
          </Grid>
        )}
      </MenuUi.Item>
      <Dropdown
        item
        trigger={DropDownTrigger({ logged, userName })}
        icon={null}
        position="right"
      >
        <Dropdown.Menu className="menu--dropdown">
          <Link className="item" role="option" to="/projets">Rechercher</Link>
          {logged && (
          <>
            <Link className="item" role="option" to="/utilisateur/create">Créer un projet</Link>
            <Dropdown.Divider />
            <Link className="item" role="option" to="/utilisateur/profil">Profil</Link>
            <Link className="item" role="option" to="/utilisateur/projets">Mes projets</Link>
            <Link className="item" role="option" to="/utilisateur/favoris">Mes favoris</Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => {
              handleDisconnect();
            }}
            >Déconnexion
            </Dropdown.Item>
          </>
          )}
          {!logged && (
          <> <Dropdown.Divider />
            <Link className="item" role="option" to="/utilisateur/connexion">Connexion</Link>
            <Dropdown.Divider />
            <Link className="item" role="option" to="/utilisateur/enregistrement">S'enregistrer</Link>
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
  handleDisconnect: PropTypes.func.isRequired,
};

export default Menu;
