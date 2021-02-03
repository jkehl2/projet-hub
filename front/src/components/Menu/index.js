// == IMPORT NPM
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORT COMPOSANTS
import {
  Dropdown, Grid, Header, Icon, Label, Menu as MenuUi,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// == IMPORT STYLES
import './menu.scss';

// DROPDOWN TRIGGER - SHOW USER CONNECTED INMODE WHIDE SCREEN, HIDE OVERWISE
const DropDownTrigger = ({ logged, userName }) => (
  <>
    {logged && (
      <Grid padded="horizontally">
        <Grid.Row only="computer" stretched>

          <Label className="user"><Icon name="circle" size="small" className="user-label" />{`${userName}`}</Label>

        </Grid.Row>
        <Grid.Row only="mobile" stretched>
          <Icon name="circle" color="green" size="small" />
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

const Menu = ({ logged, userName, handleDisconnect }) => (
  <MenuUi attached="top" borderless compact inverted className="menu-top">
    <MenuUi.Menu position="left">
      <Link className="item" to="/">
        <Grid padded="horizontally">
          <Grid.Row only="computer"><Header icon="hubspot" size="huge" content="Local-Hub" inverted /></Grid.Row>
          <Grid.Row only="mobile"><Header icon="hubspot" size="small" content="Local-Hub" inverted /></Grid.Row>
        </Grid>
      </Link>
    </MenuUi.Menu>
    <MenuUi.Menu position="right" size="large">
      <Dropdown
        item
        trigger={DropDownTrigger({ logged, userName })}
        icon={null}
        position="right"
      >
        <Dropdown.Menu className="Menu-Dropdown">
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
