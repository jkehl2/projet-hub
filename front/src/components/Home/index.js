// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';
import HeaderHome from './HeaderHome';
import DescriptionHome from './DescriptionHome';
import SearchHome from './SearchHome';
// == IMPORTS CONTAINERS

// == STYLES
import './home.scss';

// == Composant
const Home = () => (
  <Container className="home">
    {/** Page top with pictures */}
    <HeaderHome />

    {/** Page header with Local Hub presentation */}
    <DescriptionHome />

    {/** Search Bar */}
    <SearchHome />
  </Container>
);

// == Export
export default Home;
