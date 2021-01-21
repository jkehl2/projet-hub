// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';
import SearchProjects from 'src/components/SearchProjects';
import HeaderHome from './HeaderHome';
import DescriptionHome from './DescriptionHome';
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
    <SearchProjects searchParams={{
      localite: 'Ma localité',
      perimeter: 1,
    }}
    />
  </Container>
);

// == Export
export default Home;
