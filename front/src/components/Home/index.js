// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS
import SearchProjects from 'src/containers/SearchProjects';
// == IMPORTS COMPOSANTS
import {
  Container,
  Header,
  Divider,
} from 'semantic-ui-react';

import HeaderHome from './HeaderHome';
import DescriptionHome from './DescriptionHome';

// == STYLES
import './home.scss';

// == Composant
const Home = ({ cleanAppParams }) => {
  // On clean les message et error affiché lorsque l'on quitte le composant home.
  useEffect(() => () => {
    cleanAppParams();
  }, []);
  return (

    <Container className="home bgc-pictures">
      <Divider horizontal>
        <Header
          as="h1"
          content="Local Hub"
          textAlign="center"
          className="header-title"
        />
      </Divider>
      {/* PAGE TOP WITH PICTURES */}
      <HeaderHome />

      {/* SEARCH BAR */}
      <Header
        as="h2"
        className="home-search"
        textAlign="center"
      >
        Rechercher
      </Header>
      <SearchProjects isHome />

      {/* PAGE HEADER WITH LOCAL HUB PRESENTATION */}
      <DescriptionHome />
    </Container>

  );
};

Home.propTypes = {
  cleanAppParams: PropTypes.func.isRequired,
};

// == Export
export default Home;
