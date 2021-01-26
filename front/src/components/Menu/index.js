// == IMPORT NPM
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORT COMPOSANTS
import {
  Dropdown, Grid, Icon, Label, Menu as MenuUi,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// DROPDOWN TRIGGER - SHOW USER CONNECTED INMODE WHIDE SCREEN, HIDE OVERWISE
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

// == IMPORT STYLES
import './menu.scss';

const Menu = ({ logged, userName, handleDisconnect }) => (
  <MenuUi attached="top" borderless compact inverted>
    <MenuUi.Menu position="left">
      <MenuUi.Item><Link to="/"><Icon name="hubspot" size="huge" /></Link></MenuUi.Item>
      <MenuUi.Header as="h1" className="ui item compact menu__header">Local-Hub</MenuUi.Header>
    </MenuUi.Menu>
    <MenuUi.Menu position="right" size="large">
      <Dropdown
        item
        trigger={DropDownTrigger({ logged, userName })}
        icon={null}
        position="right"
      >
        <Dropdown.Menu>
          <Link className="item" role="option" to="/projets">Rechercher</Link>
          {logged && (
          <> <Dropdown.Divider />
            <Link className="item" role="option" to="/utilisateur/profil">Profil</Link>
            {/* <Dropdown.Item as="a" href="/utilisateur/projets">Mes projets</Dropdown.Item>
            <Dropdown.Item as="a" href="/utilisateur/favoris">Mes favoris</Dropdown.Item> */}
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
            {/* <Link className="item" role="option" to="/utilisateur/enregistrement">S'enregistrer</Link> */}
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
