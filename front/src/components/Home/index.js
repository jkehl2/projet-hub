// == Import npm
import React from 'react';
// == IMPORTS CONTAINERS
import SearchProjects from 'src/containers/SearchProjects';
// == IMPORTS COMPOSANTS
import {
  Container,
} from 'semantic-ui-react';
import HeaderHome from './HeaderHome';
import DescriptionHome from './DescriptionHome';


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
    <SearchProjects />
  </Container>
);

// == Export
export default Home;
