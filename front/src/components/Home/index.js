// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == IMPORTS CONTAINERS
import SearchProjects from 'src/containers/SearchProjects';
// == IMPORTS COMPOSANTS
import {
  Container, Divider, Header,
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
    <Container className="home">
      <Divider horizontal><Header as="h1" content="Local Hub" textAlign="center" /></Divider>
      {/** Page top with pictures */}
      <HeaderHome />

      {/** Search Bar */}
      <Divider horizontal>Rechercher</Divider>
      <SearchProjects className="Search-bar" isHome />

      {/** Page header with Local Hub presentation */}
      <DescriptionHome />
    </Container>
  );
};

Home.propTypes = {
  cleanAppParams: PropTypes.func.isRequired,
};

// == Export
export default Home;
